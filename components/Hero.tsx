"use client";

import { useRef } from "react";
import type { MouseEvent } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import FacetedGem from "./FacetedGem";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(35);

  // cursor-following spotlight — "light catching the gem"
  const spotlight = useMotionTemplate`radial-gradient(650px circle at ${mouseX}% ${mouseY}%, rgba(217,184,118,0.16), transparent 55%)`;

  function handleMouseMove(e: MouseEvent<HTMLElement>) {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(((e.clientX - rect.left) / rect.width) * 100);
    mouseY.set(((e.clientY - rect.top) / rect.height) * 100);
  }

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      id="top"
      className="grain relative flex min-h-screen items-center overflow-hidden bg-ink-radial pt-28"
    >
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/hero-bg.jpg"
          alt=""
          className="h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
      </div>

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden md:block"
        style={{ background: spotlight }}
      />

      <div className="mx-auto grid w-full max-w-content grid-cols-1 gap-14 px-6 md:grid-cols-[1.1fr_0.9fr] md:px-10">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 16 }}
            className="mb-6 flex items-center gap-3"
          >
            <FacetedGem size={28} />
            <span className="text-sm tracking-wide text-brass-light">
              آتلیه‌ی جواهرات دست‌ساز نگین
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 90, damping: 16, delay: 0.15 }}
            className="font-display text-[2.6rem] font-black leading-[1.25] text-porcelain sm:text-6xl"
          >
            هر قطعه، یک{" "}
            <span className="bg-brass-gradient bg-clip-text text-transparent">
              نگین
            </span>{" "}
            از یک لحظه‌ی ماندگار
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 90, damping: 16, delay: 0.3 }}
            className="mt-6 max-w-lg text-base leading-8 text-porcelain/75 sm:text-lg"
          >
            نگین جواهر جایی است که طلا، دست و زمان کنار هم می‌نشینند. هیچ
            قطعه‌ای در خط تولید ساخته نمی‌شود؛ هر گردنبند، انگشتر و دستبند،
            زیر دست یک استادکار شکل می‌گیرد — برای همان یک نفر که قرار است
            آن را بپوشد.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 90, damping: 16, delay: 0.45 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#gallery"
              className="rounded-full bg-brass-gradient px-7 py-3.5 text-sm font-bold text-ink transition-transform hover:scale-[1.03] visible-focus"
            >
              مشاهده گالری
            </a>
            <a
              href="#consult"
              className="rounded-full border border-porcelain/25 px-7 py-3.5 text-sm font-semibold text-porcelain transition-colors hover:border-brass-light hover:text-brass-light visible-focus"
            >
              مشاوره اختصاصی و سفارش
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 80, damping: 14, delay: 0.3 }}
          className="relative hidden items-center justify-center md:flex"
        >
          <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] shadow-facet">
            <img
              src="/images/set-negar.jpg"
              alt="گوشواره‌های طلا روی مخمل مشکی، از مجموعه نگین جواهر"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
