"use client";

import { motion } from "framer-motion";
import FacetedGem from "./FacetedGem";
import AnimatedCounter from "./AnimatedCounter";

export default function AtelierSection() {
  return (
    <section id="atelier" className="relative bg-ink py-24 sm:py-32">
      <div className="mx-auto grid max-w-content grid-cols-1 gap-16 px-6 md:grid-cols-2 md:items-center md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 110, damping: 18 }}
        >
          <div className="mb-5 flex items-center gap-3">
            <FacetedGem size={26} loop={false} />
            <span className="text-sm tracking-wide text-brass-light">
              درباره‌ی آتلیه
            </span>
          </div>

          <h2 className="font-display text-3xl font-bold text-porcelain sm:text-4xl">
            یک میز کار، یک استادکار، یک نگین در یک لحظه
          </h2>

          <p className="mt-5 max-w-md leading-8 text-porcelain/75">
            آتلیه‌ی نگین جواهر با یک میزِ کار کوچک در تهران شروع شد — همون‌جایی
            که هنوز هم هر قطعه اونجا ساخته می‌شه. اینجا هیچ خط تولیدی وجود
            نداره؛ فقط یک استادکار، ابزارهای دقیق، و زمانی که لازمه تا یک تکه
            طلا واقعاً به چیزی که باید باشه تبدیل بشه.
          </p>

          <p className="mt-5 max-w-md leading-8 text-porcelain/75">
            ما باور داریم جواهر خوب عجله نداره. برای همینه که هنوز، بعد از
            سال‌ها، ترجیح می‌دیم کندتر کار کنیم اما هر قطعه امضای دستِ سازنده‌اش
            رو با خودش داشته باشه.
          </p>
        </motion.div>

        {/* image with a curtain-wipe reveal, tamed into the dark palette, plus a live counting stat */}
        <div className="relative overflow-hidden rounded-[1.75rem] shadow-facet">
          <img
            src="/images/atelier-diamond.jpg"
            alt="نگینِ الماس در دستِ استادکار، لحظه‌ی بررسی دقیق پیش از جاسازی"
            className="aspect-[5/4] w-full object-cover"
          />
          {/* dark vignette so the photo sits inside the ink palette instead of clashing */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-ink/35" />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-porcelain/10" />

          <motion.div
            initial={{ scaleX: 1 }}
            whileInView={{ scaleX: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-0 origin-left bg-ink-soft"
          />

          <div className="absolute bottom-5 right-5 rounded-xl bg-ink/70 px-4 py-3 backdrop-blur-sm">
            <AnimatedCounter
              to={480}
              suffix="+"
              className="block font-display text-2xl font-black text-brass-light"
            />
            <span className="mt-1 block text-[11px] text-porcelain/70">
              قطعه‌ی دست‌ساز تاکنون
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
