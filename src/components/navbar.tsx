"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { motion } from "framer-motion";
import { ScrollLink } from "./navigation/scroll-link";
import { useSmoothScroll } from "@/lib/hooks/use-smooth-scroll";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export function Navbar() {
  const { scrollToTop } = useSmoothScroll();

  return (
    <motion.header 
      className="sticky top-0 z-[9999] w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60"
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
            <SignedOut>
              <Button variant="ghost" asChild>
                <Link href="/waitlist">Join Waitlist</Link>
              </Button>
              <SignInButton mode="modal">
                <Button variant="ghost">
                  Sign In
                </Button>
              </SignInButton>
              <Button asChild>
                <Link href="/sign-up">Get Started</Link>
              </Button>
            </SignedOut>
            <SignedIn>
              <Button variant="ghost" asChild>
                <Link href="/dashboard">Dashboard</Link>
              </Button>
              <UserButton 
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    avatarBox: "w-10 h-10"
                  }
                }}
              />
            </SignedIn>
          </nav>
        </div>
      </div>
    </motion.header>
  );
}