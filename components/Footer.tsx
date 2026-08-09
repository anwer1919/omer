export default function Footer() {
  return (
    <footer className="py-1 md:py-2 text-center border-t border-[var(--divider)] bg-[var(--bg)]">
      <span aria-hidden className="block h-8 md:h-10 aspect-square bg-[var(--gold)] mx-auto mb-0.5 [mask-image:url(/logo.png)] [mask-mode:luminance] [mask-size:contain] [mask-repeat:no-repeat] [mask-position:center]" />
      <p className="text-xs text-[var(--muted)]">عمر العُمر — جميع الحقوق محفوظة ©</p>
    </footer>
  );
}
