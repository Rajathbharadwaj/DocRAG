"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/components/ui/use-toast";
import { Message } from "@/lib/supabase";
import { cn } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { supabase, createSupabaseClient, Message as SupabaseMessage } from "@/lib/supabase";
import { SignedIn } from "@clerk/nextjs";
import { LogOut, Send, Bot, User, Check, Loader2, X } from "lucide-react";
import { useEffect, useRef, useState, useCallback } from "react";
import { Progress } from "@/components/ui/progress";
import { Project } from "@/lib/types";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

interface ChatUIProps {
  project: Project;
}

export function ChatUI({ project: initialProject }: ChatUIProps) {
  const { user, isLoaded: isUserLoaded } = useUser();
  const router = useRouter();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [project, setProject] = useState(initialProject);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();
  const [isStreaming, setIsStreaming] = useState(false);
  const [isIndexing, setIsIndexing] = useState(false);
  const [docName, setDocName] = useState("");
  const [indexingProgress, setIndexingProgress] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const checkIndexingStatus = async () => {
    if (!docName) return;
    
    try {
      const response = await fetch(`/api/indexing-status/${docName}`);
      const data = await response.json();
      
      console.log("[ChatUI] Indexing status:", data);
      
      if (data.error) {
        console.error("[ChatUI] Indexing error:", data.error);
        toast({
          title: "Indexing Error",
          description: data.error,
          variant: "destructive",
          className: "fixed top-4 right-4"
        });
        setIsIndexing(false);
        return;
      }
      
      // Calculate progress percentage (0-100)
      const progress = data.urls_processed > 0 ? 100 : 
                      data.urls_queued > 0 ? (data.urls_processed / (data.urls_processed + data.urls_queued)) * 100 : 0;
      
      setIndexingProgress(progress);
      
      // Check if at least one URL is processed
      if (data.urls_processed >= 1) {
        setIsIndexing(false);
        setIndexingProgress(100);
        toast({
          title: "Ready",
          description: "You can now start chatting!",
          variant: "default",
          className: "fixed top-4 right-4"
        });
        return;
      }
      
      // Show processing toast if still indexing
      toast({
        title: "Processing",
        description: `Indexing progress: ${Math.round(progress)}%`,
        variant: "default",
        className: "fixed top-4 right-4"
      });
      
      // Continue checking status every 2 seconds
      setTimeout(checkIndexingStatus, 2000);
    } catch (error) {
      console.error('[ChatUI] Error checking indexing status:', error);
      toast({
        title: "Error",
        description: "Failed to check indexing status",
        variant: "destructive",
        className: "fixed top-4 right-4"
      });
      setIsIndexing(false);
    }
  };

  const loadProjectDetails = useCallback(async () => {
    try {
      const response = await fetch("/api/supabase-token");
      if (!response.ok) throw new Error(`Failed to fetch token: ${response.statusText}`);
      const { token } = await response.json();
      if (!token) throw new Error("No token received");
      
      const supabaseClient = createSupabaseClient(token);
      console.log("[ChatUI] Loading project details for project:", project?.id);
      const { data, error } = await supabaseClient
        .from("projects")
        .select("*")
        .eq("id", project?.id)
        .single();

      if (error) {
        console.error("[ChatUI] Error loading project details:", error);
        throw error;
      }

      if (data) {
        console.log("[ChatUI] Project details loaded:", data);
        setProject(data);
        setDocName(data.doc_name || "");
        if (data.doc_name) {
          setIsIndexing(true);
          checkIndexingStatus();
        } else {
          setIsIndexing(false);
        }
      }
    } catch (error) {
      console.error("[ChatUI] Error loading project details:", error);
    }
  }, [project?.id]);

  const loadMessages = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      console.log("[ChatUI] Loading messages for project:", project?.id);
      
      // Get the token for authenticated requests
      const response = await fetch("/api/supabase-token");
      if (!response.ok) {
        throw new Error(`Failed to fetch token: ${response.statusText}`);
      }
      
      const { token } = await response.json();
      if (!token) {
        throw new Error("No token received");
      }
      
      // Create authenticated client
      const supabaseClient = createSupabaseClient(token);
      
      const { data: messages, error } = await supabaseClient
        .from("messages")
        .select("*")
        .eq("project_id", project?.id)
        .order("created_at", { ascending: true });

      if (error) {
        console.error("[ChatUI] Failed to load messages:", error);
        throw error;
      }

      if (!messages) {
        console.log("[ChatUI] No messages found for project:", project?.id);
        return;
      }

      console.log("[ChatUI] Loaded messages:", messages.length);
      setMessages(
        messages.map((msg) => ({
          role: msg.role as "user" | "assistant",
          content: msg.content,
        }))
      );
    } catch (error) {
      console.error("[ChatUI] Error loading messages:", error);
      setError(error instanceof Error ? error.message : "Failed to load messages");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (project?.id && isUserLoaded) {
      loadMessages();
      loadProjectDetails();
    }
  }, [project?.id, isUserLoaded]);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isIndexing) {
      toast({
        title: "Still indexing",
        description: "Please wait for the content to be indexed before sending messages",
        variant: "destructive",
        className: "fixed top-4 right-4"
      });
      return;
    }

    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((messages) => [
      ...messages,
      { role: "user", content: userMessage },
    ]);

    try {
      setIsStreaming(true);
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
          projectId: project?.id,
          docName: project?.doc_name,
        }),
      });

      if (!response.ok) {
        throw new Error(await response.text());
      }

      const data = await response.json();
      setMessages((messages) => [
        ...messages,
        { role: "assistant", content: data.content },
      ]);
    } catch (error) {
      console.error("[ChatUI] Error sending message:", error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message",
        variant: "destructive",
        className: "fixed top-4 right-4"
      });
    } finally {
      setIsStreaming(false);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="border-b">
        <div className="flex h-14 items-center px-4 justify-between">
          <div className="flex items-center space-x-4">
            <Bot className="h-6 w-6" />
            <div>
              <h2 className="text-lg font-semibold">{project?.name}</h2>
              {user && (
                <p className="text-sm text-muted-foreground">
                  Signed in as {user.firstName}
                </p>
              )}
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => router.push('/dashboard')}
              title="Back to Projects"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      <Card className="flex-1 p-4 space-y-4">
        <ScrollArea className="h-[calc(100vh-12rem)]">
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={cn(
                  "flex w-full",
                  message.role === "assistant" ? "justify-start" : "justify-end"
                )}
              >
                <div
                  className={cn(
                    "rounded-lg px-3 py-2 max-w-[80%] space-y-2",
                    message.role === "assistant"
                      ? "bg-muted"
                      : "bg-primary text-primary-foreground"
                  )}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isStreaming && (
              <div className="flex justify-start">
                <div className="rounded-lg px-3 py-2 max-w-[80%] bg-muted">
                  <Loader2 className="h-4 w-4 animate-spin" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>
      </Card>

      <form onSubmit={handleSubmit} className="pt-4 space-x-2 flex">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          disabled={isStreaming}
        />
        <Button 
          type="submit" 
          disabled={isStreaming || isIndexing || !input.trim()}
        >
          {isStreaming ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Send className="h-4 w-4" />
          )}
        </Button>
      </form>
    </div>
  );
}
