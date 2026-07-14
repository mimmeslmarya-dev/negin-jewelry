"use client";

import { motion } from "framer-motion";

/**
 * The signature mark of Negin Jewelry: a faceted gem outline that "catches light"
 * as it draws — echoing نگین (the gem set into a ring) and the brand's core promise
 * that every piece is cut and set by hand, facet by facet.
 */
export default function FacetedGem({
  size = 72,
  loop = true,
}: {
  size?: number;
  loop?: boolean;
}) {
  const facetPaths = [
    "M50 6 L79 30 L50 34 Z",
    "M50 6 L21 30 L50 34 Z",
    "M21 30 L8 58 L50 34 Z",
    "M79 30 L92 58 L50 34 Z",
    "M8 58 L50 96 L50 34 Z",
    "M92 58 L50 96 L50 34 Z",
  ];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="gemShine" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D9B876" />
          <stop offset="50%" stopColor="#F3E3B8" />
          <stop offset="100%" stopColor="#7C5C28" />
        </linearGradient>
      </defs>
      {facetPaths.map((d, i) => (
        <motion.path
          key={i}
          d={d}
          stroke="url(#gemShine)"
          strokeWidth="1.1"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: i * 0.12, ease: "easeInOut" }}
        />
      ))}
      {loop && (
        <motion.circle
          cx="50"
          cy="34"
          r="2"
          fill="#F3E3B8"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 3.2,
            repeat: Infinity,
            repeatDelay: 1.4,
            ease: "easeInOut",
          }}
        />
      )}
    </svg>
  );
}
