# دليل التطوير — موقع عمر العُمر

## البنية
app/ الصفحات | components/ الأقسام | public/ الأصول | docs/ التوثيق

## قواعد ذهبية
1. الألوان تُعدَّل من `:root` في globals.css فقط — ممنوع قيم صلبة داخل المكوّنات.
2. قسم جديد = مكوّن مستقل يُسجَّل في `app/page.tsx` وبعد اعتماد العميل فقط.
3. الصور WebP/AVIF دائمًا، و`priority` لصورة الـHero وحدها.
4. صفحة الحجز: يُغيَّر `calLink` فقط في `app/booking/page.tsx`.
5. لا تُضاف مكتبات خارجية جديدة دون حاجة حقيقية.

## استبدالات إلزامية قبل النشر
- [ ] رقم واتساب والبريد وLinkedIn في `components/Contact.tsx`
- [ ] قيمة `calLink` في `app/booking/page.tsx`
- [ ] نص النبذة (About) وأوصاف الشركات (Companies) ومحطات المسيرة (Journey)
- [ ] الأصول في public/: ‏portrait.webp، صور gallery، profile.pdf، omar.vcf

## اختبار قبل أي نشر
- Lighthouse ≥ 90 (أداء / SEO / وصولية).
- LCP < 2.5s وCLS ≈ 0.
- جوال: iOS / Android + وضع الأجهزة في DevTools.
- كل الروابط: حجز، واتساب، بريد، LinkedIn، PDF، vCard.
- RTL + تركيز لوحة المفاتيح + reduced-motion.

## النشر
1. Commit & Push إلى GitHub.
2. Vercel يبني معاينة تلقائيًا لكل تعديل.
3. بعد الاعتماد النهائي: ربط الدومين من Vercel → Domains.

## تطوير مستقبلي
المكوّنات معزولة والـTokens مركزية — الموقع صالح لسنوات، وأي إضافة تتم دون كسر الهوية.
