import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export function HomeItem3() {
  return (
    <BackgroundBeamsWithCollision className="w-full h-dvh md:h-dvh">
      <div className="flex flex-col items-center w-full gap-6">
        <h2 className="relative z-20 text-3xl font-bold tracking-tight text-center text-black md:text-5xl lg:text-7xl dark:text-white">
          DevTalk FE
          <div className="relative [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
            <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
              <span className="">Framer-Motion</span>
            </div>
            <div className="relative py-4 text-transparent bg-no-repeat bg-clip-text bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">
              <span className="">Framer-Motion</span>
            </div>
          </div>
          <p className="text-lg text-end md:text-2xl lg:text-3xl">@seonyoung</p>
        </h2>
        <div className="flex flex-col gap-4">
          <a
            href="/basic/1"
            className="inline-block px-6 py-2 text-center text-white transition rounded-2xl bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 hover:opacity-90"
          >
            기본애니메이션
          </a>
          <a
            href="/variant/1"
            className="inline-block px-6 py-2 text-center text-white transition rounded-2xl bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 hover:opacity-90"
          >
            Variant 활용
          </a>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
