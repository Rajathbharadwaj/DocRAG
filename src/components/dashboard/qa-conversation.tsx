import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";
import { TypeWriter } from "../TypeWriter";

export function QAConversation() {
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnswer(true);
    }, 20000); // 20 seconds delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex gap-3">
        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="text-sm font-medium">You</span>
        </div>
        <div className="flex-1">
          <p className="text-sm">
            <TypeWriter text="How do I deploy to production?" delay={50} />
          </p>
        </div>
      </div>
      {showAnswer ? (
        <div className="flex gap-3">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-sm font-medium">AI</span>
          </div>
          <div className="flex-1">
            <p className="text-sm font-mono text-muted-foreground">
              <TypeWriter 
                text={`To deploy to production, follow these steps:
1. Build your project using \`npm run build\`
2. Configure your environment variables
3. Run database migrations
4. Start the production server with \`npm start\``}
                delay={30}
              />
            </p>
          </div>
        </div>
      ) : (
        <div className="flex gap-3">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-sm font-medium">AI</span>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Loader2 className="h-4 w-4 animate-spin" />
              Generating response...
            </div>
          </div>
        </div>
      )}
    </div>
  );
}