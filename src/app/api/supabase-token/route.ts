import { auth, currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const session = auth();
    const user = await currentUser();

    console.log("Auth session:", {
      sessionId: session.sessionId,
      userId: session.userId,
      hasUser: !!user
    });

    if (!user || !session.userId) {
      console.error("No authenticated user found");
      return new NextResponse("Unauthorized - No user found", { status: 401 });
    }

    // Get the session token from Clerk with specific JWT template
    const token = await session.getToken({
      template: "supabase"
    });

    if (!token) {
      console.error("Failed to generate token for user:", session.userId);
      return new NextResponse("Failed to generate token", { status: 500 });
    }

    // Log token for debugging (remove in production)
    console.log("Generated token:", {
      userId: session.userId,
      hasToken: !!token,
      tokenLength: token.length
    });

    return NextResponse.json({ token });
  } catch (error) {
    console.error("Error generating token:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
