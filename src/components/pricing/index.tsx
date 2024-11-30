import { PricingHeader } from "./pricing-header";
import { PricingCard } from "./pricing-card";
import { pricingTiers } from "./pricing-data";
import { motion } from "framer-motion";

export function Pricing() {
  return (
    <section id="pricing" className="py-24 sm:py-32 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <PricingHeader />
        <motion.div 
          className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {pricingTiers.map((tier, index) => (
            <PricingCard key={tier.name} {...tier} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}