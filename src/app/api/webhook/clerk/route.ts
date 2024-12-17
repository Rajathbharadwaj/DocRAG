import { NextResponse } from "next/server";
import { createSupabaseClient } from "@/lib/supabase";
import { WebhookEvent } from "@clerk/nextjs/server";

export async function POST(req: Request) {
  try {
    // Get the request body
    const payload = await req.json();
    console.log("[WEBHOOK] Received webhook payload:", payload);

    // Get the headers from the request directly
    const svix_id = req.headers.get('svix-id');
    const svix_timestamp = req.headers.get('svix-timestamp');
    const svix_signature = req.headers.get('svix-signature');

    // If there are no headers, error out
    if (!svix_id || !svix_timestamp || !svix_signature) {
      console.error("[WEBHOOK] Missing Svix headers");
      return new NextResponse("Error occurred -- missing Svix headers", {
        status: 400,
      });
    }

    // Process the webhook payload
    const evt = payload as WebhookEvent;
    const { type, data } = evt;
    console.log("[WEBHOOK] Processing webhook of type:", type);

    // Create a new Supabase admin client
    const supabaseClient = createSupabaseClient();

    // Handle the webhook
    const { id, ...attributes } = data;

    if (type === "user.created" || type === "user.updated") {
      // For user.created or user.updated, set their role in Supabase
      const role = "authenticated";

      try {
        await supabaseClient.auth.admin.updateUserById(id as string, {
          user_metadata: { ...attributes },
          role,
        });

        console.log(`User ${id} updated in Supabase`);
      } catch (error) {
        console.error("Error updating user in Supabase:", error);
        return new NextResponse("Error updating user in Supabase", {
          status: 400,
        });
      }
    }

    return new NextResponse("", { status: 201 });
  } catch (error) {
    console.error("Error in Clerk webhook:", error);
    return new NextResponse("Error occurred", { status: 400 });
  }
}
