"use client";
import { motion } from "framer-motion";

const customVariants = {
  visible: (i: number) => ({
    opacity: 1,
    x: i * 60,
    transition: { delay: i * 1 },
  }),
  hidden: { opacity: 0, x: 0 },
};

export default function DynamicVariantCustom() {
  return (
    <div className="flex gap-4">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          custom={i}
          variants={customVariants}
          initial="hidden"
          animate="visible"
          className="w-16 h-16 bg-red-400"
        />
      ))}
    </div>
  );
}
