"use client";

import { useState, useEffect, useRef } from "react";
import { Loader2 } from "lucide-react";
import { TypeWriter } from "@/components/ui/type-writer";
import { motion, AnimatePresence, useInView } from "framer-motion";

const question = "How do I deploy to production?";
const answer = `To deploy to production, follow these steps:
1. Build your project using \`npm run build\`
2. Configure your environment variables
3. Run database migrations
4. Start the production server with \`npm start\``;

export function QAConversation() {
  const [showAnswer, setShowAnswer] = useState(false);
  const [questionComplete, setQuestionComplete] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });

  useEffect(() => {
    if (questionComplete) {
      const timer = setTimeout(() => {
        setShowAnswer(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [questionComplete]);

  return (
    <div className="space-y-4" ref={ref}>
      {isInView && (
        <>
          <motion.div 
            className="flex gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-sm font-medium">You</span>
            </div>
            <div className="flex-1">
              <p className="text-sm">
                <TypeWriter 
                  text={question} 
                  delay={50} 
                  onComplete={() => setQuestionComplete(true)}
                />
              </p>
            </div>
          </motion.div>

          <AnimatePresence>
            {questionComplete && (
              <motion.div 
                className="flex gap-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-medium">AI</span>
                </div>
                <div className="flex-1">
                  {showAnswer ? (
                    <p className="text-sm font-mono text-muted-foreground">
                      <TypeWriter text={answer} delay={30} />
                    </p>
                  ) : (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Generating response...
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </div>
  );
}