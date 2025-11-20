"use client" 

import * as React from "react"

import { motion } from "motion/react";
 
export function ShiningText({textLeft, textRight, customStyle}) {
  return (
    <motion.div
      className={`bg-[linear-gradient(110deg,#37405E,35%,#ffffff6a,50%,#D3AC4A,60%,#37405E)] bg-[length:200%_100%] bg-clip-text font-regular text-transparent ${customStyle}`}
      initial={{ backgroundPosition: "200% 0" }}
      animate={{ backgroundPosition: "-200% 0" }}
      transition={{
        repeat: Infinity,
        duration: 6,
        ease: "linear",
      }}
    >
      {textLeft}{textRight}
    </motion.div>
  );
}