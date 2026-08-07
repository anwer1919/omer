'use client';
import { useState } from 'react';
import Link from 'next/link';

const slots = ['10:00 صباحًا', '12:00 ظهرًا', '2:00 عصرًا', '4:00 عصرًا', '6:00 مساءً'];
const week = ['ح', 'ن', 'ث', 'ر', 'خ', 'ج', 'س'];

export default function Booking() {
  const [day, setDay] = useState<number | null>(null);
  const [slot, setSlot] = useState<string | null>(null);

  const confirm = () => {
    if (day === null || !slot) return;
    const msg = `مرحبًا، أرغب بحجز اجتماع يوم ${day} من الشهر، الساعة ${slot}.`;
    window.open(`https://wa.me/966542860000?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section className="min-h-screen max-w-[1000px] mx-auto px-6 py-24">
      <Link href="/" className="text-sm text-[var(--muted)] hover:text-[var(--gold)]">→ عودة</Link>
      <h1 className="text-[40px] max-md:text-[32px] text-center mt-4 mb-14">حجز اجتماع</h1>
      <div className="flex max-md:flex-col gap-12 items-start">
        <ul className="w-56 max-md:w-full space-y-3 text-lg">
          {slots.map(s => (
            <li key={s}>
              <button onClick={() => setSlot(s)}
                className={`w-full text-right px-5 h-11 rounded-full transition ${slot === s ? 'bg-[var(--gold)] text-black font-medium' : 'hover:text-[var(--gold)]'}`}>
                {s}
              </button>
            </li>
          ))}
        </ul>
        <div className="flex-1 w-full">
          <div className="grid grid-cols-7 gap-2 text-center text-sm text-[var(--muted)] mb-2">
            {week.map(w => <span key={w}>{w}</span>)}
          </div>
          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: 30 }, (_, i) => i + 1).map(d => (
              <button key={d} onClick={() => setDay(d)}
                className={`h-11 rounded-md grid place-items-center transition ${day === d ? 'bg-[var(--gold)] text-black font-medium' : 'hover:bg-[var(--card)]'}`}>
                {d}
              </button>
            ))}
          </div>
        </div>
      </div>
      <button onClick={confirm} disabled={day === null || !slot}
        className="mx-auto mt-14 block h-[52px] px-12 rounded-full bg-[var(--gold)] text-black font-medium disabled:opacity-40 hover:bg-[var(--gold-hover)]">
        تأكيد الحجز
      </button>
    </section>
  );
}
