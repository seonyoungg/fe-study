import './../globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko-KR'>
      <body>
        <div className='w-full'>{children}</div>
      </body>
    </html>
  );
}
