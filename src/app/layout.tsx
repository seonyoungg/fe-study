import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'FE-TEST',
  description: 'FE-TALK 테스트 페이지',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko-KR'>
      <body>{children}</body>
    </html>
  );
}
