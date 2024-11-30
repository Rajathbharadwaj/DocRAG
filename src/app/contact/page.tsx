"use client";

import { Navbar } from "@/components/navbar";
import Script from "next/script";
import { useEffect, useState } from "react";

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-24">
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl font-bold tracking-tight gradient-text sm:text-5xl">
            Book a Call With Our Team
          </h1>
          <p className="text-xl text-muted-foreground">
            Schedule a 30-minute consultation to learn how DocRAG can transform your documentation into an intelligent knowledge base.
          </p>
        </div>
        
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
        
        {isLoading ? (
          <div className="flex items-center justify-center min-h-[700px]">
            <div className="animate-pulse text-muted-foreground">
              Loading calendar...
            </div>
          </div>
        ) : (
          <div 
            className="calendly-inline-widget w-full"
            style={{ minHeight: '700px' }}
            data-url="https://calendly.com/rjdevbharadwaj/30min"
          />
        )}
      </main>
    </div>
  );
}