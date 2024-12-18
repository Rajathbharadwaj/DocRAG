import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

// This is a helper function to stream text
function streamText(text: string) {
  const stream = new ReadableStream({
    start(controller) {
      controller.enqueue(text);
      controller.close();
    },
  });
  return stream;
}

function streamError(error: string) {
  return new Response(streamText(error), {
    headers: {
      'Content-Type': 'text/plain',
    },
    status: 500,
  });
}

export async function POST(req: Request) {
  try {
    const session = await auth();
    const { userId } = session;
    
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const { projectId, message } = await req.json();

    // TODO: Replace this with your actual API call
    // For now, we'll just stream a dummy response
    return new NextResponse(streamText(
      "This is a streaming response from the assistant. It will be displayed word by word in the chat UI. You can replace this with your actual API integration."
    ));

  } catch (error) {
    console.error("[CHAT_POST]", error);
    return streamError("Internal Error");
  }
}
