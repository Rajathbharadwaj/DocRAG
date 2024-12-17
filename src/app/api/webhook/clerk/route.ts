import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";
import { createSupabaseClient } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // Get the headers
    const headerPayload = headers();
    const svix_id = headerPayload.get("svix-id");
    const svix_timestamp = headerPayload.get("svix-timestamp");
    const svix_signature = headerPayload.get("svix-signature");

    // If there are no headers, error out
    if (!svix_id || !svix_timestamp || !svix_signature) {
      return new NextResponse("Error occured -- no svix headers", {
        status: 400,
      });
    }

    // Get the body
    const payload = await req.json();
    const body = JSON.stringify(payload);

    // Create a new Supabase admin client
    const supabaseClient = createSupabaseClient();

    // Handle the webhook
    const evt = payload as WebhookEvent;
    const { id, ...attributes } = evt.data;

    console.log("Webhook body:", body);

    if (evt.type === "user.created" || evt.type === "user.updated") {
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
