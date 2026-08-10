export default function Footer() {
  return (
    <footer className="bg-[var(--bg2)] border-t border-[var(--gold-dim)] py-1 md:py-1.5 px-2 md:px-4">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-0.5">
        <p className="text-[9px] md:text-[11px] text-[#d9a066] text-center">
          © {new Date().getFullYear()} عمر العُمر — جميع الحقوق محفوظة
        </p>
      </div>
    </footer>
  );
}
