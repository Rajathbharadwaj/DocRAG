"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const CALENDLY_URL = "https://calendly.com/rjdevbharadwaj/30min";
const MEETING_DESCRIPTION = `🚀 DocRAG Consultation Call

During this 30-minute call, we'll discuss:
• Your current documentation challenges and needs
• How DocRAG can transform your documentation into an intelligent knowledge base
• Custom implementation strategies for your specific use case
• Pricing and deployment options that fit your scale

Please come prepared with:
• Brief overview of your current documentation setup
• Key challenges you're looking to solve
• Any specific questions about DocRAG's features

After the call, you'll receive:
• A personalized implementation plan
• Pricing details tailored to your needs
• Next steps for getting started with DocRAG

Looking forward to showing you how DocRAG can revolutionize your documentation experience!`;

export function CalendlyEmbed() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
        onLoad={() => setIsLoading(false)}
      />
      
      {isLoading && (
        <div className="flex items-center justify-center min-h-[700px]">
          <div className="animate-pulse text-muted-foreground">
            Loading calendar...
          </div>
        </div>
      )}
      
      <div 
        className={`calendly-inline-widget w-full ${isLoading ? 'hidden' : 'block'}`}
        style={{ minHeight: '700px' }}
        data-url={CALENDLY_URL}
        data-prefill={JSON.stringify({
          customAnswers: {
            a1: MEETING_DESCRIPTION
          }
        })}
      />
    </>
  );
}