import { ChatUI } from "@/components/chat/chat-ui";
import { createSupabaseClient } from "@/lib/supabase";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs";

interface ChatPageProps {
  params: {
    projectId: string;
  };
}

export default async function ChatPage({ params }: ChatPageProps) {
  const { projectId } = params;
  const session = auth();
  const { userId } = session;

  if (!userId) {
    console.error("[ChatPage] No user ID found");
    redirect("/sign-in");
  }

  console.log("[ChatPage] Loading project:", { projectId, userId });
  
  try {
    // Get token for Supabase authentication
    const token = await session.getToken({
      template: "supabase"
    });

    if (!token) {
      console.error("[ChatPage] Failed to get Supabase token");
      redirect("/dashboard");
    }

    const supabase = createSupabaseClient(token);

    // Fetch project details
    const { data: project, error } = await supabase
      .from("projects")
      .select("*")
      .eq("id", projectId)
      .eq("user_id", userId)
      .single();

    console.log("[ChatPage] Project query result:", {
      project,
      error,
      projectId,
      userId
    });

    if (error) {
      console.error("[ChatPage] Supabase error:", error);
      redirect("/dashboard");
    }

    if (!project) {
      console.error("[ChatPage] Project not found or unauthorized");
      redirect("/dashboard");
    }

    return (
      <div className="flex flex-col h-screen">
        <ChatUI 
          projectId={projectId} 
          projectName={project.name} 
          projectUrl={project.url} 
        />
      </div>
    );
  } catch (error) {
    console.error("[ChatPage] Unexpected error:", error);
    redirect("/dashboard");
  }
}
