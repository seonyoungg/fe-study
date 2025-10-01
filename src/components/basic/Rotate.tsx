"use client";
import { motion } from "framer-motion";

export default function RotateBox() {
  return (
    <motion.div
      initial={{ rotate: -90, rotateX: 45, rotateY: 45 }}
      animate={{ rotate: 0, rotateX: 0, rotateY: 0 }}
      transition={{ duration: 1 }}
      className="w-24 h-24 bg-red-500 rounded-md"
    />
  );
}
