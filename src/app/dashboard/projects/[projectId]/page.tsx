import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { ChatUI } from "@/components/chat/chat-ui";
import { supabase } from "@/lib/supabase";

export default async function ProjectPage({
  params,
}: {
  params: { projectId: string };
}) {
  const { userId } = auth();
  if (!userId) {
    redirect("/sign-in");
  }

  const { data: project, error } = await supabase
    .from("projects")
    .select("*")
    .eq("id", params.projectId)
    .eq("user_id", userId)
    .single();

  if (error || !project) {
    redirect("/dashboard");
  }

  return (
    <div className="flex-1 flex flex-col h-full">
      <ChatUI projectId={project.id} projectUrl={project.url} projectName={project.name} />
    </div>
  );
}
