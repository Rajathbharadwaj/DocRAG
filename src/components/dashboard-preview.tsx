"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Loader2, Plus, Send, Link as LinkIcon } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TypeWriter } from "./TypeWriter";

function QAConversation() {
  const [showAnswer, setShowAnswer] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnswer(true);
    }, 2000); // 20 seconds delay
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
            <TypeWriter text="How do I deploy to production?" delay={10} />
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

export function DashboardPreview() {
  const [currentStep, setCurrentStep] = React.useState(0);

  const steps = [
    {
      title: "Login",
      preview: (
        <div className="flex items-center justify-center h-full">
          <div className="w-full max-w-sm space-y-4 p-4">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Welcome back</h3>
              <p className="text-sm text-muted-foreground">Enter your credentials to continue</p>
            </div>
            <div className="space-y-4">
              <input type="email" placeholder="Email" className="w-full px-3 py-2 rounded-md border bg-background font-mono" readOnly />
              <input type="password" placeholder="Password" className="w-full px-3 py-2 rounded-md border bg-background font-mono" readOnly />
              <Button className="w-full">Sign In</Button>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Create RAG",
      preview: (
        <div className="flex items-center justify-center h-full">
          <Button size="lg" className="flex items-center gap-2">
            <Plus className="h-5 w-5" />
            Create New DocRAG
          </Button>
        </div>
      )
    },
    {
      title: "Name & Configure",
      preview: (
        <div className="h-full flex flex-col p-4 space-y-4">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">RAG Name</label>
              <input 
                type="text" 
                defaultValue="Company Docs RAG"
                className="w-full mt-1 px-3 py-2 rounded-md border bg-background font-mono"
                readOnly
              />
            </div>
            <div>
              <label className="text-sm font-medium">Documentation URL</label>
              <div className="flex gap-2 mt-1">
                <input 
                  type="url" 
                  defaultValue="https://docs.company.com"
                  className="flex-1 px-3 py-2 rounded-md border bg-background font-mono"
                  readOnly
                />
                <Button size="icon">
                  <LinkIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Indexing",
      preview: (
        <div className="h-full flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center gap-3">
            <Loader2 className="h-6 w-6 animate-spin text-primary" />
            <p className="text-lg font-medium">Indexing Documentation...</p>
          </div>
          <div className="w-full max-w-xs bg-secondary rounded-full h-2">
            <div className="bg-primary h-2 rounded-full animate-progress" style={{ width: '60%' }} />
          </div>
          <p className="text-sm text-muted-foreground">This will take a few minutes</p>
        </div>
      )
    },
    {
      title: "Ready",
      preview: (
        <div className="h-full flex flex-col">
          <div className="border-b p-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" />
              Company Docs RAG
            </h3>
            <p className="text-sm text-muted-foreground">Ask questions about your documentation</p>
          </div>
          
          <div className="flex-1 overflow-auto p-4">
            <QAConversation />
          </div>

          <div className="border-t p-4">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Ask a question about your documentation..."
                className="flex-1 px-3 py-2 rounded-md border bg-background text-sm font-mono"
                readOnly
              />
              <Button size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )
    }
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 5000); // 5 seconds per step

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mx-auto mt-16 max-w-2xl lg:max-w-4xl">
      <Tabs defaultValue="dashboard" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="dashboard">
          <div className="rounded-3xl bg-background p-8 ring-1 ring-black/10 dark:ring-white/10">
            <div className="relative overflow-hidden rounded-2xl bg-black/5 dark:bg-white/5 p-2">
              <div className="flex gap-2 mb-4">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    className={`h-1 flex-1 rounded-full ${
                      index === currentStep ? "bg-primary" : "bg-primary/20"
                    }`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  />
                ))}
              </div>
              
              <div className="relative h-[400px] overflow-hidden rounded-lg bg-background">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    {steps[currentStep].preview}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="code">
          <div className="rounded-3xl bg-background p-8 ring-1 ring-black/10 dark:ring-white/10">
            <pre className="text-sm font-mono overflow-x-auto">
              <code className="text-muted-foreground">
                <TypeWriter 
                  text={`import { RAGBuilder } from 'docrag';

// Initialize RAG
const rag = new RAGBuilder()
  .addSource('./docs')
  .setModel('gpt-4')
  .build();

// Query your docs
const answer = await rag.query(
  "How do I deploy to production?"
);`}
                  delay={30}
                />
              </code>
            </pre>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}