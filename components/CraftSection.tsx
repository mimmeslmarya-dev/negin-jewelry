"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { craftStats } from "@/lib/data";
import FacetedGem from "./FacetedGem";

export default function CraftSection() {
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageWrapRef,
    offset: ["start end", "end start"],
  });
  // real scroll-linked parallax — the image drifts slower than the page scroll
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="craft" className="relative bg-ink-soft py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:items-center">
          <motion.div
            ref={imageWrapRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring", stiffness: 110, damping: 18 }}
            className="relative overflow-hidden rounded-[1.75rem] shadow-facet"
          >
            <motion.img
              style={{ y }}
              src="/images/craft-ring.jpg"
              alt="انگشتر جواهر روی پارچه مشکی، نمایی از دقت ساخت دست‌ساز"
              className="aspect-[5/4] w-full scale-110 object-cover"
            />
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-5 flex items-center gap-3"
            >
              <FacetedGem size={26} loop={false} />
              <span className="text-sm tracking-wide text-brass-light">
                چرا نگین
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 110, damping: 18, delay: 0.1 }}
              className="font-display text-3xl font-bold text-porcelain sm:text-4xl"
            >
              دست، قبل از ماشین
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 110, damping: 18, delay: 0.2 }}
              className="mt-5 max-w-md leading-8 text-porcelain/75"
            >
              در نگین جواهر، هیچ نگینی با قالب یکسان تکرار نمی‌شود. طلا با
              دست ذوب، ریخته و صیقل می‌خورد؛ نگین‌ها یک‌به‌یک بررسی و
              جاسازی می‌شوند. نتیجه، جواهری‌ست که اثر انگشت سازنده‌اش را
              با خودش دارد.
            </motion.p>

            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-9">
              {craftStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 160, damping: 16, delay: i * 0.1 }}
                >
                  <div className="font-display text-4xl font-black bg-brass-gradient bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-porcelain/65">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
