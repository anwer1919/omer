export const metadata = {
  title: 'عمر العُمر | Founder & Entrepreneur',
  description: 'الهوية الرقمية الرسمية لعمر العُمر — الشركات، المسيرة، والتواصل.',
  openGraph: { type: 'profile' },
};
export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
