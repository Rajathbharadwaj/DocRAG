"use client";

import { ContactNavbar } from "@/components/contact/contact-navbar";
import { CalendlyEmbed } from "@/components/contact/calendly-embed";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <ContactNavbar />
      <main className="container mx-auto px-4 py-24">
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl font-bold tracking-tight gradient-text sm:text-5xl">
            Book a Call With Our Team
          </h1>
          <p className="text-xl text-muted-foreground">
            Schedule a 30-minute consultation to learn how DocRAG can transform your documentation into an intelligent knowledge base.
          </p>
        </div>
        
        <CalendlyEmbed data-url="https://calendly.com/rjdevbharadwaj/docrag-meeting-call" />
      </main>
    </div>
  );
}