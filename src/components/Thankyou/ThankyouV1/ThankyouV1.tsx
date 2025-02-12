"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const ThankyouV1 = () => {
  return (
    <div className="bg-white text-black mx-4 relative overflow-hidden">
      <motion.div
        className="relative w-full aspect-[1/1]"
        initial={{
          opacity: 0,
          scale: 0.9,
        }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <Image src="/assets/8.jpg" fill alt="thank_you" priority />
      </motion.div>

      <motion.div
        className="absolute font-[family-name:var(--font-italianno)] top-1/2 w-full bg-white/70 p-4 text-center"
        initial={{
          y: 10,
          opacity: 0,
        }}
        whileInView={{ opacity: 1, y: "-50%" }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="text-6xl font-medium">Thank you</div>
        <div className="text-4xl">Rất hân hạnh đón tiếp</div>
      </motion.div>
    </div>
  );
};
