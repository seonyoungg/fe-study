"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function BtnGroup() {
  const [count, setCount] = useState(1);
  const router = useRouter();

  const countUp = () => setCount((prev) => prev + 1);
  const countDown = () => setCount((prev) => (prev > 1 ? prev - 1 : 1));
  const countReset = () => {
    setCount(1);
    router.replace("/");
  };

  useEffect(() => {
    if (count !== 1) router.push(`/basic/${count}`);
  }, [count, router]);

  // 토스 느낌 버튼 스타일
  const btnStyle =
    "px-4 py-2 rounded-2xl text-white font-medium shadow-sm hover:shadow-md transition-shadow duration-150 cursor-pointer";

  return (
    <div className="flex justify-end items-center gap-3 mb-6 w-full">
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
