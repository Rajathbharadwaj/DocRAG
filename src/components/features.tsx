"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Zap,
  Search,
  Bot,
  Lock,
  BarChart,
} from "lucide-react";

const features = [
  {
    name: "Quick Setup",
    description: "Connect your docs and get started in under 5 minutes",
    icon: Zap,
  },
  {
    name: "Smart Search",
    description: "Powerful semantic search across all your documentation",
    icon: Search,
  },
  {
    name: "AI Responses",
    description: "Get accurate, context-aware answers powered by RAG",
    icon: Bot,
  },
  {
    name: "Multiple Sources",
    description: "Support for various documentation formats and sources",
    icon: BookOpen,
  },
  {
    name: "Enterprise Security",
    description: "Bank-grade security for your sensitive documentation",
    icon: Lock,
  },
  {
    name: "Analytics",
    description: "Track usage patterns and optimize your documentation",
    icon: BarChart,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function Features() {
  return (
    <section id="features" className="py-24 sm:py-32 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-base font-semibold leading-7 text-muted-foreground">Everything you need</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight gradient-text sm:text-4xl">
            Powerful Features for Your Documentation
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Transform your documentation into an intelligent knowledge base with our comprehensive feature set.
          </p>
        </motion.div>
        <motion.div 
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                variants={item}
                className="flex flex-col rounded-3xl bg-black/5 p-8 dark:bg-white/5 ring-1 ring-black/10 dark:ring-white/10"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                  <feature.icon className="h-5 w-5 flex-none gradient-text" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
}