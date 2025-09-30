import React from 'react';
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision';

export function HomeItem3() {
  return (
    <BackgroundBeamsWithCollision className='w-full h-dvh md:h-dvh'>
      <div className='w-full flex flex-col items-center gap-6'>
        <h2 className='text-3xl relative z-20 md:text-5xl lg:text-7xl font-bold text-center text-black dark:text-white tracking-tight'>
          DevTalk FE
          <div className='relative [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]'>
            <div className='absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]'>
              <span className=''>Framer-Motion</span>
            </div>
            <div className='relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4'>
              <span className=''>Framer-Motion</span>
            </div>
          </div>
          <p className='text-end text-lg md:text-2xl lg:text-3xl'>@seonyoung</p>
        </h2>
        <a
          href='/framer'
          className='inline-block px-6 py-2 rounded-2xl text-white bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 
            hover:opacity-90 transition'>
          살펴보기
        </a>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
