import "./../globals.css";
import BtnGroupOther from "@/components/common/btnGroup2";

export default function FramerPage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko-KR">
      <body>
        <div className="w-full p-10 bg-white">
          <BtnGroupOther />
          {children}
        </div>
      </body>
    </html>
  );
}
