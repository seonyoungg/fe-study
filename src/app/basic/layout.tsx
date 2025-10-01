import BtnGroup from "@/components/common/btnGroup";
import "./../globals.css";

export default function BasicPage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko-KR">
      <body>
        <div className="w-full p-10 bg-white">
          <BtnGroup />
          {children}
        </div>
      </body>
    </html>
  );
}
