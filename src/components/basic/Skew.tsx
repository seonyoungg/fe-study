"use client";

import { motion } from "framer-motion";

export default function SkewBox() {
  return (
    <motion.div
      initial={{ skewX: 30, skewY: 10 }} // 초기 비스듬한 상태
      animate={{ skewX: 0, skewY: 0 }} // 원래 형태로 복원
      transition={{ duration: 1, ease: "easeOut" }}
      className="w-24 h-24 bg-yellow-500 rounded-md flex items-center justify-center text-white font-bold"
    >
      Skew
    </motion.div>
  );
}
