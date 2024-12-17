"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Settings } from "lucide-react";
import { useRouter } from "next/navigation";
import { type Project } from "@/lib/supabase";

export function ProjectList() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProjects() {
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
    }

    fetchProjects();
  }, []);

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
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const router = useRouter();

  return (
    <Card 
      className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
      onClick={() => router.push(`/dashboard/projects/${project.id}`)}
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
        <Button 
          variant="ghost" 
          size="icon"
          onClick={(e) => {
            e.stopPropagation();
            router.push(`/dashboard/projects/${project.id}/settings`);
          }}
        >
          <Settings className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
}