import { NextRequest, NextResponse } from "next/server";
import { getAuth } from "@clerk/nextjs/server";
import { createSupabaseClient } from "@/lib/supabase";
import axios from 'axios';

// Handle OPTIONS request for CORS
export async function OPTIONS(req: Request) {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}

export async function POST(req: NextRequest) {
  try {
    const { userId, getToken } = await getAuth(req);

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    const { data } = body;

    if (!data || !data.name || !data.url || !data.description || !data.contentType) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    const { name, url, description, contentType } = data;

    // Get token for Supabase authentication
    const token = await getToken({
      template: "supabase"
    });

    if (!token) {
      return new NextResponse("Failed to get authentication token", { status: 500 });
    }

    try {
      // Call the indexing API
      const payload = {
        url: url,
        content_type: contentType.toLowerCase(),
        max_depth: 0,
        max_links: 3,
        backlink_threshold: 0.3,
        doc_name: name.toLowerCase().replace(/[^a-z0-9]/g, '_')
      };

      const indexResponse = await axios.post('http://127.0.0.1:8000/index_url', payload, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });

      const indexData = indexResponse.data;

      if (!indexData.doc_name) {
        return new NextResponse("Invalid indexing response: missing doc_name", { status: 500 });
      }

      const supabaseClient = createSupabaseClient(token);
      
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
        throw insertError;
      }

      return new NextResponse(JSON.stringify(project), {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      });

    } catch (error) {
      console.error("[PROJECTS_POST] Error:", error);
      return new NextResponse(
        error instanceof Error ? error.message : "Failed to create project",
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("[PROJECTS_POST] Error:", error);
    return new NextResponse(
      error instanceof Error ? error.message : "Internal server error",
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const { userId, getToken } = await getAuth(req);

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const token = await getToken({
      template: "supabase"
    });

    if (!token) {
      return new NextResponse("Failed to get authentication token", { status: 500 });
    }

    const supabaseClient = createSupabaseClient(token);

    const { data: projects, error } = await supabaseClient
      .from('projects')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (error) {
      throw error;
    }

    return new NextResponse(JSON.stringify(projects), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error("[PROJECTS_GET] Error:", error);
    return new NextResponse(
      error instanceof Error ? error.message : "Internal server error",
      { status: 500 }
    );
  }
}