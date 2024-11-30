"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TypeformQuestion } from "./typeform-question";
import { TypeformProgress } from "./typeform-progress";
import { TypeformNavigation } from "./typeform-navigation";

interface TypeformContainerProps {
  questions: {
    id: string;
    title: string;
    description?: string;
    component: React.ReactNode;
  }[];
  onComplete: (data: any) => void;
}

export function TypeformContainer({ questions, onComplete }: TypeformContainerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});

  const handleNext = (answer: any) => {
    setAnswers(prev => ({ ...prev, [questions[currentIndex].id]: answer }));
    
    if (currentIndex === questions.length - 1) {
      onComplete(answers);
    } else {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <TypeformProgress 
        current={currentIndex + 1} 
        total={questions.length} 
      />
      
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-2xl">
          <AnimatePresence mode="wait">
            <TypeformQuestion
              key={currentIndex}
              title={questions[currentIndex].title}
              description={questions[currentIndex].description}
            >
              {questions[currentIndex].component}
            </TypeformQuestion>
          </AnimatePresence>
          
          <TypeformNavigation
            currentIndex={currentIndex}
            totalQuestions={questions.length}
            onBack={handleBack}
            onNext={handleNext}
          />
        </div>
      </div>
    </div>
  );
}