import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  index: number;
}

export function PricingCard({ name, price, description, features, index }: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="flex flex-col rounded-3xl bg-black/5 p-8 dark:bg-white/5 ring-1 ring-black/10 dark:ring-white/10"
    >
      <h3 className="text-lg font-semibold leading-8">{name}</h3>
      <p className="mt-4 text-sm leading-6 text-muted-foreground">{description}</p>
      <p className="mt-6 flex items-baseline gap-x-1">
        <span className="text-4xl font-bold">{price}</span>
        {price !== "Custom" && <span className="text-sm font-semibold leading-6 text-muted-foreground">/month</span>}
      </p>
      <ul className="mt-8 space-y-3 text-sm leading-6 text-muted-foreground">
        {features.map((feature) => (
          <li key={feature} className="flex gap-x-3">
            <Check className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
            {feature}
          </li>
        ))}
      </ul>
      <Button className="mt-8">
        {name === "Enterprise" ? "Contact Sales" : "Get Started"}
      </Button>
    </motion.div>
  );
}