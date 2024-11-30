"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface TypeformNavigationProps {
  currentIndex: number;
  totalQuestions: number;
  onBack: () => void;
  onNext: (data: any) => void;
}

export function TypeformNavigation({
  currentIndex,
  totalQuestions,
  onBack,
  onNext,
}: TypeformNavigationProps) {
  return (
    <div className="flex justify-between mt-8">
      <Button
        variant="ghost"
        onClick={onBack}
        disabled={currentIndex === 0}
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back
      </Button>

      <Button onClick={() => onNext(null)}>
        {currentIndex === totalQuestions - 1 ? (
          "Complete"
        ) : (
          <>
            Next
            <ArrowRight className="w-4 h-4 ml-2" />
          </>
        )}
      </Button>
    </div>
  );
}