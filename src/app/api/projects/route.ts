import { NextResponse } from "next/server";
import { auth, currentUser } from "@clerk/nextjs";
import { createSupabaseClient } from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    if (!userId) {
      console.error("[PROJECTS_POST] No user ID found");
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const user = await currentUser();
    if (!user) {
      console.error("[PROJECTS_POST] No user found");
      return new NextResponse("User not found", { status: 404 });
    }

    // Get token for Supabase authentication
    const session = auth();
    console.log("[PROJECTS_POST] Getting Supabase token for user:", userId);
    
    const token = await session.getToken({
      template: "supabase"
    });

    if (!token) {
      console.error("[PROJECTS_POST] Failed to get Supabase token");
      return new NextResponse("Failed to get authentication token", { status: 500 });
    }

    console.log("[PROJECTS_POST] Successfully got Supabase token");

    // Log token details (first few characters)
    console.log("[PROJECTS_POST] Token details:", {
      length: token.length,
      prefix: token.substring(0, 20) + "...",
      parts: token.split(".").length
    });

    const body = await req.json();
    const { name, url, description } = body;
    console.log("[PROJECTS_POST] Creating project:", { name, url, description, userId });
    
    try {
      const supabaseClient = createSupabaseClient(token);
      console.log("[PROJECTS_POST] Successfully created Supabase client");
      
      // First check if we can query the database
      console.log("[PROJECTS_POST] Testing database connection...");
      const { error: testError } = await supabaseClient
        .from('projects')
        .select('count')
        .limit(1);
        
      if (testError) {
        console.error("[PROJECTS_POST] Database connection test failed:", testError);
        return new NextResponse("Database connection failed: " + testError.message, { status: 500 });
      }

      console.log("[PROJECTS_POST] Database connection test successful");

      // Now try to insert the project
      const { data: project, error: insertError } = await supabaseClient
        .from('projects')
        .insert([
          {
            name,
            url,
            description,
            user_id: userId,
            status: 'active',
            documents_count: 0
          }
        ])
        .select('*')
        .single();

      if (insertError) {
        console.error("[PROJECTS_POST] Insert Error:", insertError);
        return new NextResponse("Failed to create project: " + insertError.message, { status: 500 });
      }

      if (!project || !project.id) {
        console.error("[PROJECTS_POST] No project ID returned");
        return new NextResponse("Failed to create project: No project ID returned", { status: 500 });
      }

      console.log("[PROJECTS_POST] Project created successfully:", project.id);

      // Verify the project was created
      const { data: verifyProject, error: verifyError } = await supabaseClient
        .from('projects')
        .select('*')
        .eq('id', project.id)
        .single();

      if (verifyError || !verifyProject) {
        console.error("[PROJECTS_POST] Project verification failed:", { verifyError, project });
        return new NextResponse("Project creation verification failed", { status: 500 });
      }

      console.log("[PROJECTS_POST] Project verified successfully");
      return NextResponse.json(verifyProject);
    } catch (supabaseError) {
      console.error("[PROJECTS_POST] Supabase operation failed:", supabaseError);
      return new NextResponse("Database operation failed: " + (supabaseError instanceof Error ? supabaseError.message : "Unknown error"), { status: 500 });
    }
  } catch (error) {
    console.error("[PROJECTS_POST] Unexpected error:", error);
    return new NextResponse(error instanceof Error ? error.message : "Internal Error", { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const { userId } = auth();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const user = await currentUser();
    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    const supabaseClient = createSupabaseClient();
    const { data: projects, error } = await supabaseClient
      .from('projects')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (error) {
      console.error("[PROJECTS_GET] Supabase Error:", error);
      return new NextResponse(error.message, { status: 500 });
    }

    return NextResponse.json(projects);
  } catch (error) {
    console.error("[PROJECTS_GET]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}