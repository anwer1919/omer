'use client';
import {useState} from 'react';
export default function Gallery(){
  const [open,setOpen]=useState<number|null>(null);
  return (
    <section className="py-[120px] max-md:py-[72px] max-w-[1200px] mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {Array.from({length:6},(_,i)=>(
          <button key={i} onClick={()=>setOpen(i)} className="aspect-[4/5] overflow-hidden rounded-[14px]">
            <img src={`/gallery/${i+1}.webp`} alt={`لقطة ${i+1}`} className="size-full object-cover transition hover:scale-[1.03]"/>
          </button>
        ))}
      </div>
      {open!==null && (
        <div className="fixed inset-0 bg-black/90 grid place-items-center z-50" onClick={()=>setOpen(null)}>
          <img src={`/gallery/${open+1}.webp`} alt="" className="max-h-[90vh]"/>
        </div>
      )}
    </section>
  );
}
