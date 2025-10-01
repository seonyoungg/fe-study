"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function BtnGroup() {
  const [count, setCount] = useState(1);
  const router = useRouter();

  const countUp = () => {
    setCount((prev) => prev + 1);
  };

  const countDown = () => {
    setCount((prev) => (prev > 1 ? prev - 1 : 1));
  };

  useEffect(() => {
    router.push(`/basic/${count}`);
  }, [count, router]);

  return (
    <div className="flex justify-end gap-4 mt-4 w-full">
      <button className="w-8 h-8 text-center bg-black text-white rounded-lg cursor-pointer" onClick={countDown}>
        ◀
      </button>
      <button className="w-8 h-8 text-center bg-black text-white rounded-lg cursor-pointer" onClick={countUp}>
        ▶
      </button>
    </div>
  );
}
