import { auth } from '@clerk/nextjs/server';
import { redirect } from "next/navigation";
import { createSupabaseClient } from "@/lib/supabase";
import { ChatUI } from "@/components/chat/chat-ui";
import { headers } from "next/headers";

interface ChatPageProps {
  params: {
    projectId: string;
  };
}

export default async function ChatPage({ params }: ChatPageProps) {
  // Wait for params to be available
  const { projectId } = await params;

  const headersList = headers();
  const { userId, getToken } = await auth();
  console.log("[CHAT_PAGE] Initial auth state:", {
    userId,
  });

  if (!userId) {
    console.error("[CHAT_PAGE] No user ID found");
    redirect("/sign-in");
  }

  const token = await getToken({
    template: "supabase",
  });
  console.log("[CHAT_PAGE] Supabase token:", token);
  
  if (!token) {
    throw new Error("Failed to get authentication token");
  }

  const supabaseClient = createSupabaseClient(token);
  const { data: project, error } = await supabaseClient
    .from("projects")
    .select("*")
    .eq("id", projectId)
    .eq("user_id", userId)
    .single();

  if (error || !project) {
    redirect("/dashboard");
  }

  return (
    <div className="flex h-screen flex-col">
      <ChatUI project={project} />
    </div>
  );
}
