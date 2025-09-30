"use client";
import { motion } from "framer-motion";

const parentVariants = {
  show: {
    transition: { staggerChildren: 0.3, delayChildren: 0.2 },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (custom: number) => ({
    opacity: 1,
    y: 0,
    x: custom * 30, // custom 값에 따라 x 위치 변화
    backgroundColor: `hsl(${custom * 60}, 70%, 50%)`, // custom 값으로 색상 변화
    transition: { duration: 0.5 },
  }),
};

export default function StaggerWithCustom() {
  return (
    <motion.div variants={parentVariants} initial="hidden" animate="show" className="flex gap-4">
      {[0, 1, 2, 3].map((i) => (
        <motion.div key={i} custom={i} variants={childVariants} className="w-16 h-16" />
      ))}
    </motion.div>
  );
}
