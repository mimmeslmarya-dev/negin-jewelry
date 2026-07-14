"use client";

import { motion, type Variants } from "framer-motion";
import { processSteps } from "@/lib/data";
import FacetedGem from "./FacetedGem";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const stepVariant: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 140, damping: 18 } },
};

export default function ProcessSection() {
  return (
    <section id="process" className="relative bg-ink-soft py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="mb-14 flex flex-col items-center text-center">
          <FacetedGem size={30} loop={false} />
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            className="mt-5 font-display text-3xl font-bold text-porcelain sm:text-4xl"
          >
            فرآیند سفارش
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.1 }}
            className="mt-4 max-w-lg leading-7 text-porcelain/65"
          >
            از اولین پیام تا لحظه‌ای که جعبه را باز می‌کنید — چهار مرحله‌ی ساده.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {processSteps.map((item, i) => (
            <motion.div key={item.step} variants={stepVariant} className="relative text-center sm:text-right">
              {i < processSteps.length - 1 && (
                <div className="pointer-events-none absolute right-[-1.25rem] top-8 hidden h-px w-[calc(100%+1rem)] bg-gradient-to-l from-brass/40 via-brass/10 to-transparent lg:block" />
              )}
              <div className="mx-auto font-display text-4xl font-black bg-brass-gradient bg-clip-text text-transparent sm:mx-0">
                {item.step}
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-porcelain">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-porcelain/65">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
