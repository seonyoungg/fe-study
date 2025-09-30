'use client';
import { easeInOut, motion, Variants } from 'framer-motion';

const boxVariants: Variants = {
  hidden: { opacity: 0, x: 0, y: -20 },
  visible: { opacity: 1, x: 50, y: 0, transition: { duration: 2, ease: easeInOut } },
};

export default function StaticVariant() {
  return <motion.div variants={boxVariants} initial='hidden' animate='visible' className='w-24 h-24 bg-green-500' />;
}
