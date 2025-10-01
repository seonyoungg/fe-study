"use client";
import { motion } from "framer-motion";

export default function TranslateBox() {
  return (
    <motion.div
      initial={{ x: -100, y: 50, z: 0 }}
      animate={{ x: 0, y: 0, z: 0 }}
      transition={{ duration: 1 }}
      className="w-24 h-24 bg-blue-500 rounded-md"
    />
  );
}
