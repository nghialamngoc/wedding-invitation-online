"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import clsx from "clsx";

const data = [
  {
    images: ["/assets/3.jpg"],
  },
  {
    images: ["/assets/1.jpg", "/assets/7.jpg"],
  },
  {
    images: ["/assets/5.jpg"],
  },
  {
    images: ["/assets/6.jpg"],
  },
];

export const GalleryV1 = () => {
  return (
    <div className="bg-white text-black pt-8 px-4">
      <div className="flex gap-2 justify-center items-center text-4xl font-[family-name:var(--font-italianno)]">
        <span>Album ảnh cưới</span>
        <span className="border-t-2 border-black flex-grow"></span>
        <Image src={"/assets/heart.png"} width={30} height={30} alt="heart" />
      </div>

      <div className="overflow-hidden mt-2">
        {data.map(({ images }, index) => {
          return (
            <div
              key={index}
              className={clsx("grid gap-2 mb-2", `grid-cols-${images.length}`)}
            >
              {images.map((x, i) => {
                return (
                  <motion.div
                    key={i}
                    initial={{
                      x: (index + i) % 2 === 0 ? 100 : -100,
                      opacity: 0,
                    }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="shadow-md"
                  >
                    <img src={x} alt="gallery" />
                  </motion.div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};
