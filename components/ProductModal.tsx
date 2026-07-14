"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import type { Product } from "@/lib/data";

export default function ProductModal({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/90 px-6 py-10 backdrop-blur-md"
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 16 }}
        transition={{ type: "spring", stiffness: 260, damping: 28 }}
        className="relative grid w-full max-w-4xl grid-cols-1 overflow-hidden rounded-2xl bg-ink-soft shadow-facet md:grid-cols-2"
      >
        <button
          aria-label="بستن"
          onClick={onClose}
          className="visible-focus absolute left-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-porcelain/15 bg-ink/70 text-porcelain/80 transition-colors hover:text-brass-light"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        {/* shared layout image — morphs from the gallery card */}
        <motion.div
          layoutId={`product-image-${product.id}`}
          transition={{ layout: { type: "spring", stiffness: 320, damping: 32 } }}
          className="relative aspect-[4/5] md:aspect-auto"
        >
          <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
          <span className="absolute right-4 top-4 rounded-full bg-ink/70 px-3 py-1 text-xs text-brass-light backdrop-blur-sm">
            {product.category}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="flex flex-col justify-center p-8 text-right md:p-10"
        >
          <h3 className="font-display text-2xl font-bold text-porcelain md:text-3xl">
            {product.name}
          </h3>
          <p className="mt-2 text-sm text-porcelain/60">{product.material}</p>
          <p className="mt-6 text-sm leading-8 text-porcelain/75">{product.description}</p>
          <p className="mt-8 text-lg font-semibold text-brass-light">{product.price}</p>
          <button className="visible-focus mt-6 self-start rounded-full bg-brass-gradient px-8 py-3 text-sm font-bold text-ink transition-transform hover:scale-[1.02]">
            مشاوره برای این قطعه
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
