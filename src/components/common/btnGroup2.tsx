"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function BtnGroupOther() {
  const [count2, setCount2] = useState(1);
  const router = useRouter();
  const pathname = usePathname();

  const countUp = () => setCount2((prev) => prev + 1);
  const countDown = () => setCount2((prev) => (prev > 1 ? prev - 1 : 1));
  const countReset = () => {
    setCount2(1);
    router.replace("/");
  };

  useEffect(() => {
    if (pathname.includes("/basic")) {
      router.push(`/basic/${count2}`);
    } else if (pathname.includes("/variant")) {
      router.push(`/variant/${count2}`);
    }
  }, [count2, pathname, router]);

  // 토스 느낌 버튼 스타일
  const btnStyle =
    "px-4 py-2 rounded-2xl text-white font-medium shadow-sm hover:shadow-md transition-shadow duration-150 cursor-pointer";

  return (
    <div className="flex items-center justify-end w-full gap-3 mb-6">
      <button onClick={countReset} className={`${btnStyle} bg-[#3A3A3A] hover:bg-[#2c2c2c]`}>
        홈
      </button>
      <button onClick={countDown} className={`${btnStyle} bg-[#0055FF] hover:bg-[#0041CC]`}>
        ◀
      </button>
      <button onClick={countUp} className={`${btnStyle} bg-[#0055FF] hover:bg-[#0041CC]`}>
        ▶
      </button>
    </div>
  );
}
