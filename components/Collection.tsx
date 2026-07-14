"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { products } from "@/lib/data";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";
import FacetedGem from "./FacetedGem";

export default function Collection() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = products.find((p) => p.id === selectedId) ?? null;

  return (
    <section id="gallery" className="relative bg-ink py-24 sm:py-32">
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
            گالری مجموعه
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.1 }}
            className="mt-4 max-w-lg leading-7 text-porcelain/65"
          >
            نمونه‌ای از قطعاتی که تا امروز ساخته‌ایم. هر مدل، نقطه‌ی
            شروعی‌ست — می‌توانید عیناً همین را سفارش دهید یا از آن برای
            طراحی نسخه‌ی اختصاصی خودتان الهام بگیرید.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, i) => (
            <ProductCard product={product} index={i} key={product.id} onSelect={setSelectedId} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && <ProductModal product={selected} onClose={() => setSelectedId(null)} />}
      </AnimatePresence>
    </section>
  );
}
