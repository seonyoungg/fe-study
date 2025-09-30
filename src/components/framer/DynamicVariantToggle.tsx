"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const toggleVariants = {
  active: { scale: 1, backgroundColor: "orange" },
  inactive: { scale: 0.5, backgroundColor: "grey" },
};

export default function DynamicVariantToggle() {
  const [isActive, setIsActive] = useState(false);

  return (
    <motion.div
      variants={toggleVariants}
      animate={isActive ? "active" : "inactive"}
      className="w-24 h-24 cursor-pointer"
      onClick={() => setIsActive(!isActive)}
    />
  );
}
