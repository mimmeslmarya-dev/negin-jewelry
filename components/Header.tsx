"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FacetedGem from "./FacetedGem";

const links = [
  { href: "#atelier", label: "درباره‌ی آتلیه" },
  { href: "#craft", label: "چرا نگین" },
  { href: "#process", label: "فرآیند سفارش" },
  { href: "#gallery", label: "گالری" },
  { href: "#consult", label: "مشاوره اختصاصی" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-ink/90 backdrop-blur-md shadow-facet" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" className="flex items-center gap-3 visible-focus">
          <FacetedGem size={34} loop={false} />
          <span className="font-display text-lg font-bold text-porcelain">
            نگین جواهر
          </span>
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-porcelain/80 transition-colors hover:text-brass-light visible-focus"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#consult"
            className="rounded-full bg-brass-gradient px-5 py-2 text-sm font-semibold text-ink transition-transform hover:scale-[1.03] visible-focus"
          >
            مشاوره و سفارش
          </a>
        </nav>

        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "بستن منو" : "باز کردن منو"}
          aria-expanded={menuOpen}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden visible-focus"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="h-[1.5px] w-6 bg-porcelain"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="h-[1.5px] w-6 bg-porcelain"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="h-[1.5px] w-6 bg-porcelain"
          />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden bg-ink-soft md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-2 py-3 text-porcelain/90 transition-colors hover:bg-white/5 visible-focus"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#consult"
                onClick={() => setMenuOpen(false)}
                className="mt-2 rounded-full bg-brass-gradient px-5 py-3 text-center text-sm font-semibold text-ink visible-focus"
              >
                مشاوره و سفارش
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
