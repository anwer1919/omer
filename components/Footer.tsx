export default function Footer() {
  return (
    <footer className="pt-1 pb-0.5 text-center border-t border-[var(--divider)]">
      <span aria-hidden className="block h-10 aspect-square bg-[var(--gold)] mx-auto mb-1 [mask-image:url(/logo.png)] [mask-mode:luminance] [mask-size:contain] [mask-repeat:no-repeat] [mask-position:center]" />
      <p className="text-xs text-[var(--muted)]">عمر العُمر — جميع الحقوق محفوظة ©</p>
    </footer>
  );
}