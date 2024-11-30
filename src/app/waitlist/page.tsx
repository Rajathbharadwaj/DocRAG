import { WaitlistForm } from "@/components/waitlist/waitlist-form";
import { WaitlistNavbar } from "@/components/waitlist/waitlist-navbar";

export default function WaitlistPage() {
  return (
    <div className="min-h-screen bg-background">
      <WaitlistNavbar />
      <main className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <WaitlistForm />
      </main>
    </div>
  );
}