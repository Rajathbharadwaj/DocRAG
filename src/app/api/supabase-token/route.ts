import { getAuth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { userId, getToken } = await getAuth(request);

    // Log initial auth state
    console.log("[/api/supabase-token] Initial auth state:", {
      userId,
      hasUser: !!userId
    });

    if (!userId) {
      console.error("[/api/supabase-token] No authenticated user found");
      return new NextResponse(JSON.stringify({ error: "Unauthorized - No user found" }), { 
        status: 401,
        headers: {
          'Content-Type': 'application/json',
        }
      });
    }

    // Get Supabase token
    console.log("[/api/supabase-token] Getting Supabase token for user:", userId);
    const token = await getToken({
      template: "supabase"
    });

    if (!token) {
      console.error("[/api/supabase-token] Failed to get Supabase token");
      return new NextResponse(JSON.stringify({ error: "Failed to get Supabase token" }), { 
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        }
      });
    }

    // Return token
    console.log("[/api/supabase-token] Successfully retrieved Supabase token");
    return new NextResponse(JSON.stringify({ token }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      }
    });

  } catch (error) {
    console.error("[/api/supabase-token] Error:", error);
    return new NextResponse(JSON.stringify({ error: "Internal Server Error" }), { 
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      }
    });
  }
}
