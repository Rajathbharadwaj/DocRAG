"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Loader2, Plus, Send, Link as LinkIcon } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { QAConversation } from "./qa-conversation";
import { TypeWriter } from "@/components/ui/type-writer";

const codeExample = `import { RAGBuilder } from 'docrag';

// Initialize RAG
const rag = new RAGBuilder()
  .addSource('./docs')
  .setModel('gpt-4')
  .build();

// Query your docs
const answer = await rag.query(
  "How do I deploy to production?"
);`;

export function DashboardPreview() {
  const [currentStep, setCurrentStep] = React.useState(0);
  const [activeTab, setActiveTab] = React.useState("dashboard");
  const [showCode, setShowCode] = React.useState(false);

  const steps = [
    {
      title: "Login",
      description: "Sign in to your account",
      preview: (
        <div className="flex items-center justify-center h-full">
          <div className="w-full max-w-sm space-y-4 p-4">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Welcome back</h3>
              <p className="text-sm text-muted-foreground">Enter your credentials to continue</p>
            </div>
            <div className="space-y-4">
              <input type="email" placeholder="Email" className="w-full px-3 py-2 rounded-md border bg-background" readOnly />
              <input type="password" placeholder="Password" className="w-full px-3 py-2 rounded-md border bg-background" readOnly />
              <Button className="w-full">Sign In</Button>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Create RAG",
      description: "Start a new project",
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
      title: "Configure",
      description: "Set up your project",
      preview: (
        <div className="h-full flex flex-col p-4 space-y-4">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">RAG Name</label>
              <input 
                type="text" 
                defaultValue="Company Docs RAG"
                className="w-full mt-1 px-3 py-2 rounded-md border bg-background"
                readOnly
              />
            </div>
            <div>
              <label className="text-sm font-medium">Documentation URL</label>
              <div className="flex gap-2 mt-1">
                <input 
                  type="url" 
                  defaultValue="https://docs.company.com"
                  className="flex-1 px-3 py-2 rounded-md border bg-background"
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
      title: "Index",
      description: "Processing documentation",
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
      description: "Start using your RAG",
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
                className="flex-1 px-3 py-2 rounded-md border bg-background text-sm"
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
    if (activeTab === "dashboard") {
      const timer = setInterval(() => {
        setCurrentStep((prev) => (prev + 1) % steps.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [steps.length, activeTab]);

  React.useEffect(() => {
    if (activeTab === "code") {
      setShowCode(true);
    } else {
      setShowCode(false);
    }
  }, [activeTab]);

  return (
    <div className="mx-auto mt-16 max-w-2xl lg:max-w-4xl">
      <Tabs 
        defaultValue="dashboard" 
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full"
      >
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="dashboard">
          <div className="rounded-3xl bg-background p-8 ring-1 ring-black/10 dark:ring-white/10">
            <div className="relative overflow-hidden rounded-2xl bg-black/5 dark:bg-white/5 p-2">
              <div className="flex gap-4 mb-6">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    className={`flex-1 ${index === currentStep ? "text-primary" : "text-muted-foreground"}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                        index === currentStep 
                          ? "border-primary bg-primary/10" 
                          : "border-muted"
                      }`}>
                        <span className="text-sm font-semibold">{index + 1}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium">{step.title}</span>
                        <span className="text-xs">{step.description}</span>
                      </div>
                    </div>
                  </motion.div>
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
            <pre className="text-sm overflow-x-auto">
              <code className="text-muted-foreground">
                {showCode && <TypeWriter text={codeExample} delay={30} />}
              </code>
            </pre>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}