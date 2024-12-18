import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { ChatUI } from "@/components/chat/chat-ui";
import { supabase } from "@/lib/supabase";

interface ProjectPageProps {
  params: Promise<{
    projectId: string;
  }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { projectId } = await params;
  const { userId } = await auth();
  
  if (!userId) {
    redirect("/sign-in");
  }

  const { data: project, error } = await supabase
    .from("projects")
    .select("*")
    .eq("id", projectId)
    .eq("user_id", userId)
    .single();

  if (error || !project) {
    redirect("/dashboard");
  }

  return (
    <div className="flex-1 flex flex-col h-full">
      <ChatUI project={project} />
    </div>
  );
}
