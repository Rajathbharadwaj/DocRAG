"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "$0",
    description: "Perfect for small projects",
    features: [
      "Up to 1,000 pages",
      "Basic search",
      "Community support",
      "1 project",
    ],
  },
  {
    name: "Pro",
    price: "$49",
    description: "For growing teams",
    features: [
      "Up to 10,000 pages",
      "Advanced RAG",
      "Priority support",
      "5 projects",
      "Analytics",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    features: [
      "Unlimited pages",
      "Custom RAG models",
      "24/7 support",
      "Unlimited projects",
      "Advanced analytics",
      "SSO & Custom security",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 sm:py-32 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-base font-semibold leading-7 text-muted-foreground">Pricing</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight gradient-text sm:text-4xl">
            Simple, Transparent Pricing
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Choose the perfect plan for your needs. All plans include core features.
          </p>
        </motion.div>

        <motion.div 
          className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col rounded-3xl bg-black/5 p-8 dark:bg-white/5 ring-1 ring-black/10 dark:ring-white/10"
            >
              <h3 className="text-lg font-semibold leading-8">{tier.name}</h3>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">{tier.description}</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold">{tier.price}</span>
                {tier.price !== "Custom" && <span className="text-sm font-semibold leading-6 text-muted-foreground">/month</span>}
              </p>
              <ul className="mt-8 space-y-3 text-sm leading-6 text-muted-foreground">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <Check className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="mt-8">
                {tier.name === "Enterprise" ? "Contact Sales" : "Get Started"}
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}