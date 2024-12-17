import { auth, currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const session = await auth();
    const user = await currentUser();

    // Log initial auth state
    console.log("[/api/supabase-token] Initial auth state:", {
      hasSession: !!session,
      sessionId: session?.sessionId,
      userId: session?.userId,
      hasUser: !!user
    });

    if (!session?.userId || !user) {
      console.error("[/api/supabase-token] No authenticated user found");
      return new NextResponse(JSON.stringify({ error: "Unauthorized - No user found" }), { 
        status: 401,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    // Get the session token from Clerk with specific JWT template
    const token = await session.getToken({
      template: "supabase"
    });

    if (!token) {
      console.error("[/api/supabase-token] Failed to generate token for user:", session.userId);
      return new NextResponse(
        JSON.stringify({ error: "Failed to generate token" }), 
        { 
          status: 500,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
    }

    // Log successful token generation
    console.log("[/api/supabase-token] Generated token successfully:", {
      userId: session.userId,
      hasToken: !!token,
      tokenLength: token.length
    });

    return new NextResponse(JSON.stringify({ token }), { 
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error("[/api/supabase-token] Error generating token:", error);
    return new NextResponse(
      JSON.stringify({ error: "Internal Server Error" }), 
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
}
