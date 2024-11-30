import { motion } from "framer-motion";

export function PricingHeader() {
  return (
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
  );
}