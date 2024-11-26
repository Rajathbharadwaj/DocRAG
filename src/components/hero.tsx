"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";

export function Hero() {
  return (
    <div className="relative">
      <div className="hero-gradient absolute inset-0 z-0" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <motion.div 
          className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <motion.a 
              href="/demo" 
              className="inline-flex space-x-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="rounded-full bg-black/5 px-3 py-1 text-sm font-semibold leading-6 text-black ring-1 ring-inset ring-black/20 dark:bg-white/10 dark:text-white dark:ring-white/20">
                What's new
              </span>
              <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-muted-foreground">
                <span>Just shipped v1.0</span>
                <ArrowRight className="h-4 w-4" />
              </span>
            </motion.a>
          </div>
          <motion.h1 
            className="mt-10 text-4xl font-bold tracking-tight gradient-text sm:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Build RAG Over Your Docs in Minutes
          </motion.h1>
          <motion.p 
            className="mt-6 text-lg leading-8 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Transform your documentation into an intelligent knowledge base. Quick setup, powerful search, and AI-powered answers.
          </motion.p>
          <motion.div 
            className="mt-10 flex items-center gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Button size="lg" asChild>
              <Link href="/signup" className="flex items-center gap-2">
                Start Building <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/demo">Live Demo</Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="rounded-2xl bg-black/5 p-8 dark:bg-white/5 ring-1 ring-black/10 dark:ring-white/10">
              <div className="flex items-center space-x-2 text-sm mb-4">
                <Terminal className="h-4 w-4" />
                <span className="font-medium">Example usage</span>
              </div>
              <pre className="text-sm leading-6">
                <code className="text-muted-foreground">{`import { RAGBuilder } from 'docrag';

const rag = new RAGBuilder()
  .addSource('./docs')
  .setModel('gpt-4')
  .build();

// Start answering questions
const answer = await rag.query(
  "How do I deploy to production?"
);`}</code>
              </pre>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}