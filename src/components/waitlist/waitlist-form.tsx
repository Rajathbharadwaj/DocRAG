"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Loader2, ArrowRight, ArrowLeft } from "lucide-react";
import { waitlistSchema, type WaitlistFormData } from "@/lib/schemas/waitlist";
import { TypeformQuestion } from "@/components/typeform/typeform-question";
import { TypeformProgress } from "@/components/typeform/typeform-progress";

const questions = [
  {
    id: "name",
    title: "First, what's your name?",
    description: "We'd love to know who we're talking to.",
    placeholder: "Type your full name",
  },
  {
    id: "email",
    title: "What's your email address?",
    description: "We'll keep you updated on our progress.",
    placeholder: "name@company.com",
  },
  {
    id: "company",
    title: "Where do you work?",
    description: "This helps us understand our users better.",
    placeholder: "Company name",
  },
  {
    id: "url",
    title: "What's your documentation URL?",
    description: "This helps us prepare for your needs.",
    placeholder: "https://docs.example.com",
  },
];

export function WaitlistForm() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
  });

  const { register, handleSubmit, watch, formState: { errors } } = form;
  const currentValue = watch(questions[currentQuestion].id as keyof WaitlistFormData);

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && currentValue) {
      if (currentQuestion === questions.length - 1) {
        handleSubmit(onSubmit)();
      } else {
        nextQuestion();
      }
    }
  };

  async function onSubmit(data: WaitlistFormData) {
    setIsLoading(true);
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to join waitlist");

      toast({
        title: "Welcome aboard! 🎉",
        description: "You've been added to our waitlist. We'll be in touch soon!",
      });
    } catch (error) {
      toast({
        title: "Oops!",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto px-4">
      <TypeformProgress 
        current={currentQuestion + 1} 
        total={questions.length} 
      />
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 pt-16">
        <AnimatePresence mode="wait">
          <TypeformQuestion
            key={currentQuestion}
            title={questions[currentQuestion].title}
            description={questions[currentQuestion].description}
          >
            <Input
              {...register(questions[currentQuestion].id as keyof WaitlistFormData)}
              placeholder={questions[currentQuestion].placeholder}
              className="text-lg bg-transparent border-none shadow-none focus-visible:ring-0 px-0 h-auto text-primary"
              onKeyDown={handleKeyDown}
              autoFocus
            />
            {errors[questions[currentQuestion].id as keyof WaitlistFormData] && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-destructive mt-2"
              >
                {errors[questions[currentQuestion].id as keyof WaitlistFormData]?.message}
              </motion.p>
            )}
          </TypeformQuestion>
        </AnimatePresence>

        <div className="flex justify-between">
          <Button
            type="button"
            variant="ghost"
            onClick={previousQuestion}
            disabled={currentQuestion === 0}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>

          {currentQuestion === questions.length - 1 ? (
            <Button type="submit" disabled={isLoading || !currentValue}>
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Joining...
                </>
              ) : (
                <>
                  Join Waitlist
                  <ArrowRight className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          ) : (
            <Button
              type="button"
              onClick={nextQuestion}
              disabled={!currentValue}
            >
              Next
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}