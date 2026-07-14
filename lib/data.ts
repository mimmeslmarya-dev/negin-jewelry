export type Product = {
  id: string;
  category: string;
  name: string;
  material: string;
  price: string;
  image: string;
  description: string;
};

export const products: Product[] = [
  {
    id: "necklace-anita",
    category: "گردنبند",
    name: "گردنبند «آنیتا»",
    material: "طلای ۱۸ عیار، نگین الماس تراش برلیان",
    price: "۴۸٬۵۰۰٬۰۰۰ تومان",
    image:
      "/images/necklace-anita.jpg",
    description:
      "زنجیری ظریف که نگین آن، به‌جای وسط گردن، کمی نامتقارن می‌نشیند؛ طراحی‌شده برای کسی که تقارن کامل را دوست ندارد.",
  },
  {
    id: "ring-yasaman",
    category: "انگشتر",
    name: "انگشتر «یاسمن»",
    material: "طلای سفید ۱۸ عیار، سولیتر الماس ۰.۵ قیراط",
    price: "۶۲٬۰۰۰٬۰۰۰ تومان",
    image:
      "/images/ring-yasaman.jpg",
    description:
      "یک نگین، یک پایه، بدون هیچ جزئیات اضافه. برای شروع داستانی که قرار نیست شبیه هیچ داستان دیگری باشد.",
  },
  {
    id: "set-negar",
    category: "ست عروس",
    name: "ست «نگار» — گردنبند و گوشواره",
    material: "طلای ۱۸ عیار، مروارید و نگین‌های ریز",
    price: "۹۸٬۰۰۰٬۰۰۰ تومان",
    image:
      "/images/set-negar.jpg",
    description:
      "طراحی‌شده برای شبی که فقط یک‌بار اتفاق می‌افتد؛ سبک، قابل‌تحمل برای ساعت‌ها جشن، و ماندگار برای سال‌ها بعد از آن.",
  },
  {
    id: "bracelet-ava",
    category: "دستبند",
    name: "دستبند «آوا»",
    material: "طلای ۱۸ عیار، زنجیر فیگارو دست‌بافت",
    price: "۳۵٬۲۰۰٬۰۰۰ تومان",
    image:
      "/images/bracelet-ava.jpg",
    description:
      "حلقه‌های زنجیر یکی‌یکی و با دست به هم متصل می‌شوند؛ همین باعث می‌شود هیچ دو دستبند «آوا» کاملاً یکسان نباشند.",
  },
];

export const craftStats = [
  { value: "۱۴", label: "ساعت میانگین ساخت هر قطعه، از طرح تا صیقل نهایی" },
  { value: "۱۸", label: "عیار طلای استفاده‌شده در تمام مجموعه‌ها" },
  { value: "۷", label: "سال تجربه‌ی تراش و قلم‌زنی دست‌ساز" },
  { value: "۱۰۰٪", label: "ضمانت اصالت فلز و نگین با مدرک کتبی" },
];

export const testimonialQuote = {
  text: "چیزی که نگین جواهر می‌سازد، شبیه چیزی نیست که قبلاً دیده باشید. هر قطعه انگار برای همان یک نفر طراحی شده.",
  author: "از یادداشت‌های مشتریان آتلیه",
};

export const processSteps = [
  {
    step: "۰۱",
    title: "مشاوره",
    description: "درباره‌ی سلیقه، بودجه و مناسبتی که قطعه براش ساخته می‌شه صحبت می‌کنیم.",
  },
  {
    step: "۰۲",
    title: "طراحی",
    description: "طرح اولیه رو می‌کشیم و پیش از ساخت، با شما نهایی‌اش می‌کنیم.",
  },
  {
    step: "۰۳",
    title: "ساخت دست",
    description: "استادکار روی میزِ کار، قطعه رو از طلای خام تا شکل نهایی می‌سازه.",
  },
  {
    step: "۰۴",
    title: "تحویل",
    description: "قطعه با گواهی اصالت، در جعبه‌ی اختصاصی نگین به دست شما می‌رسه.",
  },
];

