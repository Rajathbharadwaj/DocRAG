import { NextResponse } from "next/server";
import { auth, currentUser } from "@clerk/nextjs";
import { createSupabaseClient } from "@/lib/supabase";
import axios from 'axios';

// Handle OPTIONS request for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': 'http://127.0.0.1:8000',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Allow-Credentials': 'true',
    },
  });
}

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

    const body = await req.json();
    const { name, url, description, contentType } = body;
    console.log("[PROJECTS_POST] Creating project:", { name, url, description, contentType, userId });
    
    try {
      // First, call the indexing API
      console.log("[PROJECTS_POST] Calling indexing API for URL:", url);
      
      try {
        console.log("[PROJECTS_POST] Making request to:", 'http://127.0.0.1:8000/index_url');
        const payload = {
          url: url,
          content_type: contentType.toLowerCase(),
          max_depth: 0,
          max_links: 3,
          backlink_threshold: 0.3,
          doc_name: name.toLowerCase().replace(/[^a-z0-9]/g, '_')
        };
        console.log("[PROJECTS_POST] Request payload:", payload);

        const indexResponse = await axios.post('http://127.0.0.1:8000/index_url', payload, {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        });

        console.log("[PROJECTS_POST] Response status:", indexResponse.status);
        console.log("[PROJECTS_POST] Response headers:", indexResponse.headers);
        console.log("[PROJECTS_POST] Response data:", indexResponse.data);

        const indexData = indexResponse.data;

        // Check if we got a doc_name back
        if (!indexData.doc_name) {
          console.error("[PROJECTS_POST] No doc_name in indexing response:", indexData);
          return new NextResponse("Invalid indexing response: missing doc_name", { status: 500 });
        }

        const supabaseClient = createSupabaseClient(token);
        console.log("[PROJECTS_POST] Successfully created Supabase client");
        
        // Create the project with indexing status
        const { data: project, error: insertError } = await supabaseClient
          .from('projects')
          .insert([
            {
              name,
              url,
              description,
              user_id: userId,
              status: 'indexing',
              documents_count: 0,
              doc_name: indexData.doc_name
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

        // Return both the project data and the indexing response
        const response = NextResponse.json({
          ...project,
          doc_name: indexData.doc_name,
          indexing_status: indexData.status
        });

        // Add CORS headers to the response
        response.headers.set('Access-Control-Allow-Origin', 'http://127.0.0.1:8000');
        response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        response.headers.set('Access-Control-Allow-Credentials', 'true');

        return response;
      } catch (fetchError) {
        console.error("[PROJECTS_POST] API request error:", {
          error: fetchError,
          message: fetchError instanceof Error ? fetchError.message : "Unknown fetch error",
          response: fetchError.response ? {
            status: fetchError.response.status,
            data: fetchError.response.data
          } : undefined
        });
        return new NextResponse("Failed to connect to indexing service. Is it running?", { status: 500 });
      }
    } catch (supabaseError) {
      console.error("[PROJECTS_POST] Operation failed:", supabaseError);
      return new NextResponse("Operation failed: " + (supabaseError instanceof Error ? supabaseError.message : "Unknown error"), { status: 500 });
    }
  } catch (error) {
    console.error("[PROJECTS_POST] Unexpected error:", error);
    return new NextResponse(error instanceof Error ? error.message : "Internal Error", { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const session = auth();
    const { userId } = session;
    
    if (!userId) {
      console.error("[PROJECTS_GET] No user ID found");
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const user = await currentUser();
    if (!user) {
      console.error("[PROJECTS_GET] No user found");
      return new NextResponse("User not found", { status: 404 });
    }

    // Get token for Supabase authentication
    console.log("[PROJECTS_GET] Getting Supabase token for user:", userId);
    const token = await session.getToken({
      template: "supabase"
    });

    if (!token) {
      console.error("[PROJECTS_GET] Failed to get Supabase token");
      return new NextResponse("Failed to get authentication token", { status: 500 });
    }

    console.log("[PROJECTS_GET] Successfully got Supabase token");
    
    // Create authenticated Supabase client
    const supabaseClient = createSupabaseClient(token);
    
    console.log("[PROJECTS_GET] Fetching projects for user:", userId);
    const { data: projects, error } = await supabaseClient
      .from('projects')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (error) {
      console.error("[PROJECTS_GET] Supabase Error:", error);
      return new NextResponse(error.message, { status: 500 });
    }

    console.log("[PROJECTS_GET] Found projects:", projects?.length || 0);
    
    const response = NextResponse.json(projects || []);
    response.headers.set('Access-Control-Allow-Origin', 'http://127.0.0.1:8000');
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    response.headers.set('Access-Control-Allow-Credentials', 'true');

    return response;
  } catch (error) {
    console.error("[PROJECTS_GET] Error:", error);
    return new NextResponse(
      error instanceof Error ? error.message : "Internal Error", 
      { status: 500 }
    );
  }
}