import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Cursor } from "@/components/cursor";

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
});

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
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${jetbrainsMono.className} overflow-x-hidden`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          suppressHydrationWarning
        >
          <Cursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}