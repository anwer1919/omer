import Link from 'next/link';
export default function NotFound() {
  return (
    <main className="min-h-screen grid place-items-center text-center px-6">
      <div>
        <h1 className="text-[64px] text-[var(--gold)]">404</h1>
        <p className="text-[var(--muted)] mb-8">الصفحة غير موجودة</p>
        <Link href="/" className="inline-grid h-[52px] px-8 rounded-[4px] bg-[var(--gold)] text-black place-items-center">العودة للرئيسية</Link>
      </div>
    </main>
  );
}
