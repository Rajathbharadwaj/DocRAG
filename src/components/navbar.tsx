"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { motion } from "framer-motion";
import { ScrollLink } from "./navigation/scroll-link";
import { useSmoothScroll } from "@/lib/hooks/use-smooth-scroll";

export function Navbar() {
  const { scrollToTop } = useSmoothScroll();

  return (
    <motion.header 
      className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <button
            onClick={scrollToTop}
            className="mr-6 flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <span className="text-xl font-bold gradient-text">DocRAG</span>
          </button>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <ScrollLink 
              sectionId="features" 
              className="hover:text-primary transition-colors"
            >
              Features
            </ScrollLink>
            <ScrollLink 
              sectionId="how-it-works" 
              className="hover:text-primary transition-colors"
            >
              How It Works
            </ScrollLink>
            <ScrollLink 
              sectionId="pricing" 
              className="hover:text-primary transition-colors"
            >
              Pricing
            </ScrollLink>
            <Link
              href="/blog"
              className="hover:text-primary transition-colors"
            >
              Blog
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-3">
            <ThemeToggle />
            <Button variant="ghost" asChild>
              <Link href="/waitlist">Join Waitlist</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/sign-in">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/sign-up">Get Started</Link>
            </Button>
          </nav>
        </div>
      </div>
    </motion.header>
  );
}