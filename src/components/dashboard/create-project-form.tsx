"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { useUser } from "@clerk/nextjs";
import { createSupabaseClient } from "@/lib/supabase";
import { ContentType, ProjectFormData } from "@/lib/types";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function CreateProjectDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const { user } = useUser();
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [contentType, setContentType] = useState<ContentType>(ContentType.DOCUMENTATION);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;
    const url = formData.get("url") as string;
    const description = formData.get("description") as string;

    console.log("[CreateProject] Submitting form:", { name, url, description, contentType });

    try {
      const response = await fetch("/api/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, url, description, contentType }),
      });

      if (!response.ok) {
        const error = await response.text();
        throw new Error(error);
      }

      const project = await response.json();
      
      toast({
        title: "Success",
        description: "Project created successfully. Redirecting to chat...",
      });

      // Redirect to chat page
      router.push(`/chat/${project.id}`);
      onOpenChange(false);
    } catch (error) {
      console.error("[CreateProject] Error:", error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to create project",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Project</DialogTitle>
          <DialogDescription>
            Add a new documentation project to chat with
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="Project name"
              required
            />
          </div>
          <div>
            <Label htmlFor="url">Documentation URL</Label>
            <Input
              id="url"
              name="url"
              type="url"
              placeholder="https://docs.example.com"
              required
            />
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              placeholder="Brief description of the project"
              required
            />
          </div>
          <div>
            <Label htmlFor="contentType">Content Type</Label>
            <select
              id="contentType"
              className="w-full rounded-md border border-input bg-background px-3 py-2"
              value={contentType}
              onChange={(e) => setContentType(e.target.value as ContentType)}
            >
              <option value={ContentType.DOCUMENTATION}>Documentation</option>
              <option value={ContentType.REPOSITORY}>Repository</option>
            </select>
          </div>
          <div className="flex justify-end">
            <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating...
                </>
              ) : (
                "Create Project"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}