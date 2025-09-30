"use client";
import { motion } from "framer-motion";

const parentVariants = {
  show: {
    transition: {
      staggerChildren: 0.3, // staggerChildren: 자식들의 애니메이션 간격
      delayChildren: 0.2, // delayChildren: 애니메이션 지연
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Orchestration() {
  return (
    <motion.div variants={parentVariants} initial="hidden" animate="show" className="flex gap-4">
      {[0, 1, 2].map((i) => (
        <motion.div key={i} variants={childVariants} className="w-16 h-16 bg-pink-400" />
      ))}
    </motion.div>
  );
}
