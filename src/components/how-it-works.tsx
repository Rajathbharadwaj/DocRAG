"use client";

import { motion } from "framer-motion";
import { DashboardPreview } from "./dashboard-preview";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32 bg-black/5 dark:bg-white/5 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-base font-semibold leading-7 text-muted-foreground">Two Ways to Build</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight gradient-text sm:text-4xl">
            How It Works
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Choose between our simple dashboard interface or integrate via code. Both get you up and running in minutes.
          </p>
        </motion.div>

        <DashboardPreview />
      </div>
    </section>
  );
}