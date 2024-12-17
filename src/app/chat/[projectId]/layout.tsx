import { ClerkProvider } from "@clerk/nextjs";

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col min-h-screen">
      {children}
    </main>
  );
}
