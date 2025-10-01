"use client";
import { motion } from "framer-motion";

export default function ScaleBox() {
  return (
    <motion.div
      initial={{ scale: 0.5, scaleX: 0.2 }}
      animate={{ scale: 1, scaleX: 1 }}
      transition={{ duration: 1 }}
      className="w-24 h-24 bg-green-500 rounded-md"
    />
  );
}
