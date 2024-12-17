"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/components/ui/use-toast";
import { Message } from "@/lib/supabase";
import { cn } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";
import { useClerk } from "@clerk/nextjs";
import { supabase, createSupabaseClient, Message as SupabaseMessage } from "@/lib/supabase";
import { SignedIn } from "@clerk/nextjs";
import { LogOut, Send, Bot, User, Check, Loader2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

interface ChatUIProps {
  projectId: string;
  projectUrl?: string;
  projectName?: string;
}

export function ChatUI({ projectId, projectName = "Company Docs RAG" }: ChatUIProps) {
  const { user, isLoaded: isUserLoaded } = useUser();
  const { signOut } = useClerk();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isStreaming, setIsStreaming] = useState(false);

  const loadMessages = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      console.log("[ChatUI] Loading messages for project:", projectId);
      
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
        .eq("project_id", projectId)
        .order("created_at", { ascending: true });

      if (error) {
        console.error("[ChatUI] Failed to load messages:", error);
        throw error;
      }

      if (!messages) {
        console.log("[ChatUI] No messages found for project:", projectId);
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
    if (projectId && isUserLoaded) {
      loadMessages();
    }
  }, [projectId, isUserLoaded]);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || !user) return;

    const userMessage: ChatMessage = {
      role: "user",
      content: input.trim()
    };

    try {
      const response = await fetch("/api/supabase-token");
      if (!response.ok) {
        throw new Error(`Failed to fetch token: ${response.statusText}`);
      }
      
      const { token } = await response.json();
      if (!token) {
        throw new Error("No token received");
      }

      setMessages(prev => [...prev, userMessage]);
      setInput("");
      
      const supabaseClient = createSupabaseClient(token);

      // Insert the user message
      const { error: insertError } = await supabaseClient
        .from("messages")
        .insert({
          project_id: projectId,
          user_id: user.id,
          role: userMessage.role,
          content: userMessage.content
        });

      if (insertError) {
        console.error("[ChatUI] Failed to insert message:", insertError);
        throw insertError;
      }

      // Simulate assistant response
      const assistantMessage: ChatMessage = {
        role: "assistant",
        content: "This is a simulated response. Replace with actual AI response."
      };

      // Insert the assistant message
      const { error: assistantError } = await supabaseClient
        .from("messages")
        .insert({
          project_id: projectId,
          user_id: user.id,
          role: assistantMessage.role,
          content: assistantMessage.content
        });

      if (assistantError) {
        console.error("[ChatUI] Failed to insert assistant message:", assistantError);
        throw assistantError;
      }

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error("[ChatUI] Error in chat:", error);
      setError(error instanceof Error ? error.message : "Failed to send message");
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message",
        variant: "destructive",
      });
    }
  };

  return (
    <SignedIn>
      <Card className="flex h-[85vh] flex-col">
        <div className="flex items-center justify-between border-b px-6 py-2">
          <div className="flex items-center gap-2">
            <Check className="h-5 w-5 text-green-500" />
            <div>
              <h1 className="text-lg font-semibold">{projectName}</h1>
              <p className="text-sm text-muted-foreground">
                Ask questions about your documentation
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => signOut()}
            className="h-8 w-8"
          >
            <LogOut className="h-4 w-4" />
          </Button>
        </div>
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={cn(
                  "flex w-max max-w-[80%] items-end gap-2 rounded-lg px-4 py-2",
                  message.role === "user"
                    ? "ml-auto bg-primary text-primary-foreground"
                    : "bg-muted"
                )}
              >
                {message.role === "user" ? (
                  <User className="h-4 w-4" />
                ) : (
                  <Bot className="h-4 w-4" />
                )}
                <p className="text-sm">{message.content}</p>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-center justify-center">
                <Loader2 className="h-4 w-4 animate-spin" />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>
        <form onSubmit={handleSubmit} className="border-t p-4">
          <div className="flex gap-4">
            <Input
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isStreaming}
            />
            <Button type="submit" disabled={isStreaming}>
              {isStreaming ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}
            </Button>
          </div>
        </form>
      </Card>
    </SignedIn>
  );
}
