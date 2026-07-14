"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import FacetedGem from "./FacetedGem";
import { testimonialQuote } from "@/lib/data";

export default function ConsultationSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="consult" className="relative overflow-hidden bg-ink-soft py-24 sm:py-32">
      <div className="pointer-events-none absolute -left-24 top-1/2 -translate-y-1/2 opacity-20">
        <FacetedGem size={340} loop={false} />
      </div>

      <div className="relative mx-auto grid max-w-content grid-cols-1 gap-14 px-6 md:grid-cols-2 md:px-10">
        <div>
          <FacetedGem size={28} loop={false} />
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            className="mt-5 font-display text-3xl font-bold text-porcelain sm:text-4xl"
          >
            یک مشاوره‌ی کوتاه، بدون هیچ تعهدی
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.1 }}
            className="mt-5 max-w-md leading-8 text-porcelain/75"
          >
            چه به‌دنبال یکی از قطعات همین گالری باشید و چه بخواهید چیزی
            کاملاً مخصوص خودتان طراحی شود، کافی‌ست پیام بدهید. در اولین
            تماس فقط درباره‌ی سلیقه، بودجه و زمان‌بندی شما صحبت می‌کنیم —
            نه چیز دیگری.
          </motion.p>

          <motion.blockquote
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.2 }}
            className="mt-10 border-r-2 border-brass pr-5 text-sm leading-7 text-porcelain/65"
          >
            «{testimonialQuote.text}»
            <footer className="mt-2 text-xs text-porcelain/45">
              {testimonialQuote.author}
            </footer>
          </motion.blockquote>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 110, damping: 18, delay: 0.15 }}
          className="rounded-2xl bg-ink p-7 shadow-facet sm:p-9"
        >
          {submitted ? (
            <div className="flex min-h-[280px] flex-col items-center justify-center text-center">
              <FacetedGem size={46} loop={false} />
              <h3 className="mt-5 font-display text-xl font-bold text-porcelain">
                پیام شما ثبت شد
              </h3>
              <p className="mt-2 max-w-xs text-sm leading-7 text-porcelain/65">
                تا حداکثر یک روز کاری، از همین طریق که مشخص کرده‌اید با
                شما تماس می‌گیریم.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="flex flex-col gap-5"
            >
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm text-porcelain/70"
                >
                  نام شما
                </label>
                <input
                  id="name"
                  required
                  type="text"
                  placeholder="مثلاً نگار احمدی"
                  className="w-full rounded-xl border border-porcelain/15 bg-ink-soft px-4 py-3 text-sm text-porcelain outline-none transition-colors placeholder:text-porcelain/30 focus:border-brass"
                />
              </div>
              <div>
                <label
                  htmlFor="contact"
                  className="mb-2 block text-sm text-porcelain/70"
                >
                  ایمیل یا شماره تماس
                </label>
                <input
                  id="contact"
                  required
                  type="text"
                  placeholder="راه ارتباطی که راحت‌ترید"
                  className="w-full rounded-xl border border-porcelain/15 bg-ink-soft px-4 py-3 text-sm text-porcelain outline-none transition-colors placeholder:text-porcelain/30 focus:border-brass"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm text-porcelain/70"
                >
                  پیام شما
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="کوتاه بگویید دنبال چه چیزی هستید — حتی یک ایده‌ی نصفه‌کاره هم کافی‌ست"
                  className="w-full resize-none rounded-xl border border-porcelain/15 bg-ink-soft px-4 py-3 text-sm text-porcelain outline-none transition-colors placeholder:text-porcelain/30 focus:border-brass"
                />
              </div>
              <button
                type="submit"
                className="mt-2 rounded-full bg-brass-gradient px-6 py-3.5 text-sm font-bold text-ink transition-transform hover:scale-[1.02] visible-focus"
              >
                ارسال درخواست مشاوره
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
