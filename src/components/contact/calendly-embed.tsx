"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const CALENDLY_URL = "https://calendly.com/rjdevbharadwaj/docrag-meeting-call";

export function CalendlyEmbed() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-pulse text-muted-foreground">
            Loading calendar...
          </div>
        </div>
      )}
      
      <div 
        className="calendly-inline-widget" 
        data-url={CALENDLY_URL}
        style={{
          minWidth: "320px",
          height: "1000px",
          visibility: isLoading ? 'hidden' : 'visible'
        }}
      />

      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
        onLoad={() => {
          setTimeout(() => setIsLoading(false), 500);
        }}
      />
    </div>
  );
}