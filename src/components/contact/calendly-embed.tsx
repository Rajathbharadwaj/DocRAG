"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

interface CalendlyEmbedProps extends React.HTMLAttributes<HTMLDivElement> {
  'data-url': string;
}

export function CalendlyEmbed({ 'data-url': url, ...props }: CalendlyEmbedProps) {
  const [isLoading, setIsLoading] = useState(true);
  
  return (
    <div className="relative" {...props}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-pulse text-muted-foreground">
            Loading calendar...
          </div>
        </div>
      )}
      
      <div 
        className="calendly-inline-widget" 
        data-url={url}
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