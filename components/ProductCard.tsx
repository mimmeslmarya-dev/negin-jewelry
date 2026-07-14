"use client";

import { motion } from "framer-motion";
import type { Product } from "@/lib/data";

export default function ProductCard({
  product,
  index,
  onSelect,
}: {
  product: Product;
  index: number;
  onSelect: (id: string) => void;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ type: "spring", stiffness: 140, damping: 18, delay: (index % 4) * 0.08 }}
      className="group relative overflow-hidden rounded-2xl bg-ink-soft"
    >
      <button
        type="button"
        onClick={() => onSelect(product.id)}
        aria-label={`مشاهده جزئیات ${product.name}`}
        className="visible-focus block w-full text-right"
      >
        <motion.div layoutId={`product-image-${product.id}`} className="relative aspect-[4/5] overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent opacity-80" />
          <span className="absolute top-4 right-4 rounded-full bg-ink/70 px-3 py-1 text-xs text-brass-light backdrop-blur-sm">
            {product.category}
          </span>

          <div className="absolute inset-x-0 bottom-0 translate-y-2 p-5 transition-transform duration-500 group-hover:translate-y-0">
            <h3 className="font-display text-lg font-bold text-porcelain">
              {product.name}
            </h3>
            <p className="mt-1 text-xs leading-5 text-porcelain/60">
              {product.material}
            </p>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-sm font-semibold text-brass-light">
                {product.price}
              </span>
            </div>
            <p className="mt-3 max-h-0 overflow-hidden text-xs leading-6 text-porcelain/70 opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100">
              {product.description}
            </p>
          </div>
        </motion.div>
      </button>
    </motion.article>
  );
}
