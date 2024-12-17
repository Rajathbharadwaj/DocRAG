import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import { createSupabaseClient } from "@/lib/supabase";

export async function DELETE(
  req: Request,
  { params }: { params: { projectId: string } }
) {
  try {
    const session = auth();
    const { userId } = session;
    
    if (!userId) {
      console.error("[PROJECT_DELETE] No user ID found");
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const { projectId } = params;
    console.log("[PROJECT_DELETE] Deleting project:", { projectId, userId });

    // Get token for Supabase authentication
    const token = await session.getToken({
      template: "supabase"
    });

    if (!token) {
      console.error("[PROJECT_DELETE] Failed to get Supabase token");
      return new NextResponse("Failed to get authentication token", { status: 500 });
    }

    // Create authenticated Supabase client
    const supabaseClient = createSupabaseClient(token);
    
    // First verify the project belongs to the user
    const { data: project, error: fetchError } = await supabaseClient
      .from('projects')
      .select('id')
      .eq('id', projectId)
      .eq('user_id', userId)
      .single();

    if (fetchError || !project) {
      console.error("[PROJECT_DELETE] Project not found or unauthorized:", fetchError);
      return new NextResponse(
        "Project not found or you don't have permission to delete it", 
        { status: 404 }
      );
    }

    // Delete the project
    const { error: deleteError } = await supabaseClient
      .from('projects')
      .delete()
      .eq('id', projectId)
      .eq('user_id', userId);

    if (deleteError) {
      console.error("[PROJECT_DELETE] Delete error:", deleteError);
      return new NextResponse(deleteError.message, { status: 500 });
    }

    console.log("[PROJECT_DELETE] Successfully deleted project:", projectId);
    return new NextResponse(null, { status: 204 });
    
  } catch (error) {
    console.error("[PROJECT_DELETE] Error:", error);
    return new NextResponse(
      error instanceof Error ? error.message : "Internal Error",
      { status: 500 }
    );
  }
}
