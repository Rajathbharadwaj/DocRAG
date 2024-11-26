"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TypeWriter } from "./TypeWriter";

export function CodeIntegration() {
  return (
    <div className="mt-32">
      <motion.div 
        className="mx-auto max-w-2xl text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-base font-semibold leading-7 text-muted-foreground">For Developers</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight gradient-text sm:text-4xl">
          Simple API Integration
        </p>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Prefer to code? Our API makes it simple to integrate RAG into your existing workflow.
        </p>
      </motion.div>

      <div className="mx-auto mt-16 max-w-2xl lg:max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-background p-8 ring-1 ring-black/10 dark:ring-white/10"
        >
          <div className="rounded-lg bg-black/5 p-4 dark:bg-white/5">
            <div className="flex items-center space-x-2 text-sm mb-4">
              <Terminal className="h-4 w-4" />
              <span className="font-medium">Example Integration</span>
            </div>
            <pre className="text-sm">
              <code className="text-muted-foreground">
                <TypeWriter 
                  text={`import { RAGBuilder } from 'docrag';

// Initialize and configure RAG
const rag = new RAGBuilder()
  .addSource('./docs')
  .setModel('gpt-4')
  .setChunkSize(1000)
  .setOverlap(200)
  .build();

// Start querying your documentation
const answer = await rag.query(
  "How do I deploy to production?"
);`}
                  delay={30}
                />
              </code>
            </pre>
          </div>
        </motion.div>
      </div>

      <div className="mt-16 flex justify-center">
        <Button size="lg" asChild>
          <Link href="/docs">View Full Documentation</Link>
        </Button>
      </div>
    </div>
  );
}