'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Booking() {
  const [sent, setSent] = useState(false);
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const body = `الاسم: ${d.get('name')}\nالجهة: ${d.get('org')}\nالمنصب: ${d.get('title')}\nالبريد: ${d.get('email')}\nسبب الاجتماع: ${d.get('reason')}`;
    window.location.href = `mailto:contact@omar.com?subject=${encodeURIComponent('طلب اجتماع — عمر العُمر')}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };
  const field = 'w-full bg-transparent border-b border-[var(--divider)] focus:border-[var(--gold)] outline-none py-3 transition-colors';
  return (
    <main className="max-w-[640px] mx-auto px-6 py-28">
      <Link href="/" className="text-sm text-[var(--muted)] hover:text-[var(--gold)]">→ عودة</Link>
      <h1 className="text-4xl font-semibold mt-8 mb-3">طلب اجتماع</h1>
      <p className="text-sm text-[var(--muted)] mb-12">يُراجع الطلب شخصيًا ويُرد خلال مدة وجيزة.</p>
      <form onSubmit={submit} className="space-y-8 text-right">
        <input required name="name" placeholder="الاسم" className={field} />
        <input required name="org" placeholder="الجهة" className={field} />
        <input name="title" placeholder="المنصب" className={field} />
        <input required type="email" name="email" placeholder="البريد الإلكتروني" className={field} />
        <textarea required name="reason" placeholder="سبب الاجتماع" rows={4} className={field} />
        <button className="h-[52px] w-full rounded-[4px] bg-[var(--gold)] text-black font-medium hover:bg-[#d1b07a] transition-colors">إرسال الطلب</button>
      </form>
      {sent && <p className="mt-6 text-sm text-[var(--gold)] text-center">تم فتح تطبيق البريد لإرسال طلبك ✔</p>}
    </main>
  );
}
