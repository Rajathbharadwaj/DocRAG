"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Settings, Trash2, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { type Project } from "@/lib/supabase";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/components/ui/use-toast";
import { useUser, SignOutButton } from "@clerk/nextjs";

export function ProjectList() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();
  const { user } = useUser();

  const fetchProjects = async () => {
    try {
      console.log("[ProjectList] Fetching projects...");
      const response = await fetch("/api/projects");
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error("[ProjectList] Error response:", { status: response.status, text: errorText });
        throw new Error(`Failed to fetch projects: ${errorText}`);
      }
      
      const data = await response.json();
      console.log("[ProjectList] Projects fetched:", data);
      setProjects(data);
      setError(null);
    } catch (error) {
      console.error("[ProjectList] Error:", error);
      setError(error instanceof Error ? error.message : "Failed to fetch projects");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleDeleteProject = async (projectId: string, projectName: string) => {
    try {
      const response = await fetch(`/api/projects/${projectId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText);
      }

      toast({
        title: "Project Deleted",
        description: `Successfully deleted "${projectName}"`,
      });

      // Refresh the projects list
      fetchProjects();
    } catch (error) {
      console.error("[ProjectList] Delete error:", error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to delete project",
        variant: "destructive",
      });
    }
  };

  if (isLoading) {
    return (
      <Card className="p-8 text-center">
        <p className="text-muted-foreground">Loading projects...</p>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="p-8 text-center">
        <h3 className="text-lg font-semibold mb-2 text-red-500">Error</h3>
        <p className="text-muted-foreground mb-4">{error}</p>
      </Card>
    );
  }

  if (projects.length === 0) {
    return (
      <Card className="p-8 text-center">
        <h3 className="text-lg font-semibold mb-2">No projects yet</h3>
        <p className="text-muted-foreground mb-4">
          Create your first RAG project to get started.
        </p>
      </Card>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Your Projects</h1>
        <SignOutButton>
          <Button variant="outline">
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </SignOutButton>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            onDelete={handleDeleteProject}
          />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ 
  project, 
  onDelete 
}: { 
  project: Project;
  onDelete: (projectId: string, projectName: string) => Promise<void>;
}) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    // Don't navigate if clicking the settings button
    if ((e.target as HTMLElement).closest('.settings-button')) {
      e.stopPropagation();
      return;
    }
    router.push(`/chat/${project.id}`);
  };

  return (
    <Card 
      className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-semibold mb-2">{project.name}</h3>
          {project.description && (
            <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
          )}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>{project.documents_count} documents</span>
            <span>•</span>
            <span>{new Date(project.created_at).toLocaleDateString()}</span>
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon"
              className="settings-button"
            >
              <Settings className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              className="text-red-600 focus:text-red-600 cursor-pointer"
              onClick={() => onDelete(project.id, project.name)}
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Delete Project
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </Card>
  );
}