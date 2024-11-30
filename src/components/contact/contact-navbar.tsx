"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";

export function ContactNavbar() {
  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold gradient-text">DocRAG</span>
        </Link>
        
        <nav className="flex items-center space-x-3">
          <ThemeToggle />
          <Button variant="ghost" asChild>
            <Link href="/">Back to Home</Link>
          </Button>
        </nav>
      </div>
    </motion.header>
  );
}