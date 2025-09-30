import { HomeItem } from '@/components/home/homeItem';
import { HomeItem2 } from '@/components/home/homeItem2';
import { HomeItem3 } from '@/components/home/homeItem3';

export default function Home() {
  return (
    <main className='w-full'>
      {/* <section>
        <HomeItem />
      </section>
      <section>
        <HomeItem2 />
      </section> */}
      <section className='w-full'>
        <HomeItem3 />
      </section>
    </main>
  );
}
