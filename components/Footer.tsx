import FacetedGem from "./FacetedGem";

export default function Footer() {
  return (
    <footer className="border-t border-porcelain/10 bg-ink py-12">
      <div className="mx-auto flex max-w-content flex-col items-center gap-6 px-6 text-center md:flex-row md:justify-between md:text-right">
        <div className="flex items-center gap-3">
          <FacetedGem size={30} loop={false} />
          <div>
            <p className="font-display font-bold text-porcelain">
              نگین جواهر
            </p>
            <p className="text-xs text-porcelain/50">
              آتلیه‌ی جواهرات دست‌ساز
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-1 text-sm text-porcelain/60">
          <a
            href="mailto:hello@neginjewelry.ir"
            className="transition-colors hover:text-brass-light visible-focus"
          >
            hello@neginjewelry.ir
          </a>
          <a
            href="tel:+982100000000"
            className="tracking-latin transition-colors hover:text-brass-light visible-focus"
          >
            ۰۲۱‑۰۰۰۰‑۰۰۰۰
          </a>
        </div>

        <p className="text-xs text-porcelain/35">
          © {new Date().getFullYear()} نگین جواهر — تمام حقوق محفوظ است
        </p>
      </div>
    </footer>
  );
}
