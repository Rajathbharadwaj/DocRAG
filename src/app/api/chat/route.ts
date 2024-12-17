import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";

// This is a helper function to stream text
function streamText(text: string) {
  const stream = new ReadableStream({
    async start(controller) {
      // Split the text into words and stream each word
      const words = text.split(" ");
      for (const word of words) {
        const chunk = new TextEncoder().encode(word + " ");
        controller.enqueue(chunk);
        // Add a small delay between words for a more natural feel
        await new Promise((resolve) => setTimeout(resolve, 50));
      }
      controller.close();
    },
  });

  return new NextResponse(stream);
}

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const { projectId, message } = await req.json();

    // TODO: Replace this with your actual API call
    // For now, we'll just stream a dummy response
    return streamText(
      "This is a streaming response from the assistant. It will be displayed word by word in the chat UI. You can replace this with your actual API integration."
    );

  } catch (error) {
    console.error("[CHAT_POST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
