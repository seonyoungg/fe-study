'use client';
import { motion } from 'framer-motion';

export default function BasicBox() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // 시작 상태
      animate={{ opacity: 1, y: 0 }} // 목표 상태
      transition={{ duration: 0.5, ease: 'easeOut' }} // 애니메이션 방식
      className='w-24 h-24 bg-blue-500'
    />
  );
}
