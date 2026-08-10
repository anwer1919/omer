export default function Footer() {
  return (
    <footer className="bg-[var(--bg2)] border-t border-[var(--gold-dim)] py-2 md:py-3 px-3 md:px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-1 md:gap-2">
        <span className="block h-px w-24 md:w-32 bg-[#d9a066]" />
        <p className="text-[10px] md:text-xs text-[#d9a066] text-center">
          © {new Date().getFullYear()} عمر العُمر — جميع الحقوق محفوظة
        </p>
      </div>
    </footer>
  );
}
