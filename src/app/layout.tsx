import type { Metadata } from "next";
import { neutrifStudio } from "@/config/fonts";
import { Providers } from "@/components/providers";
import { Cursor } from "@/components/cursor";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

export const metadata: Metadata = {
  title: "DocRAG - Instant RAG for Your Docs",
  description: "The fastest way to build RAG over any documentation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      signInFallbackRedirectUrl="/dashboard"
      signUpFallbackRedirectUrl="/dashboard"
      signInUrl="/sign-in"
      signUpUrl="/sign-up"
    >
      <html lang="en" suppressHydrationWarning>
        <head />
        <body 
          className={`${neutrifStudio.variable} font-sans bg-background`}
          suppressHydrationWarning
        >
          <Providers>
            {children}
            <Cursor />
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}