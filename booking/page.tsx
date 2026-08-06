'use client';
import {useEffect} from 'react';
export default function Booking(){
  useEffect(()=>{(async()=>{
    const Cal=(await import('@calcom/embed-react')).default;
    Cal('inline',{elementOrSelector:'#cal',calLink:'omar/30min',
      config:{theme:'dark',layout:'month_view'}});
  })();},[]);
  return (
    <section className="min-h-screen max-w-[900px] mx-auto px-6 py-24">
      <h1 className="text-[32px] mb-2">حجز اجتماع</h1>
      <p className="text-[var(--muted)] mb-10">اختر الموعد ويصلك تأكيد فوري — دون واتساب أو بريد وسيط.</p>
      <div id="cal" className="rounded-[14px] border border-[var(--divider)] overflow-hidden"/>
    </section>
  );
}
