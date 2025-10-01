"use client";
import { motion } from "framer-motion";

export default function PerspectiveBox() {
  return (
    <motion.div
      initial={{
        rotateY: -90,
        transformPerspective: 400,
      }}
      animate={{
        rotateY: 0,
        transformPerspective: 400,
      }}
      transition={{ duration: 1 }}
      className="w-24 h-24 bg-purple-500 rounded-md"
    />
  );
}
