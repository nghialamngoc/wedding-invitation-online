"use client";

import React, { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import clsx from "clsx";
import { GalleryProps } from "../Gallery";

const data = [
  {
    images: ["/assets/11.jpg"],
  },
  {
    images: ["/assets/9.jpg"],
  },
  {
    images: ["/assets/10.jpg"],
  },
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
    images: ["/assets/12.jpg", ["/assets/13.jpg", "/assets/14.jpg"]],
    cols: "60% 40%",
  },
  {
    images: ["/assets/6.jpg"],
  },
  {
    images: ["/assets/15.jpg"],
  },
];

export const GalleryV1: FC<GalleryProps> = () => {
  return (
    <div className="bg-white pt-8 px-4">
      <div className="flex gap-2 justify-center items-center text-4xl font-[family-name:var(--font-italianno)]">
        <span>Album ảnh cưới</span>
        <span className="border-t-2 border-black flex-grow"></span>
        <Image src={"/assets/heart.png"} width={30} height={30} alt="heart" />
      </div>

      <div className="overflow-hidden mt-2">
        {data.map(({ images, cols }, index) => {
          return (
            <div
              key={index}
              className={clsx(
                "grid gap-2 mb-2 items-center",
                cols ? `` : `grid-cols-${images.length}`
              )}
              style={{
                gridTemplateColumns: cols,
              }}
            >
              {images.map((x, i) => {
                if (typeof x === "string") {
                  return (
                    <motion.div
                      key={i}
                      initial={{
                        x: (index + i) % 2 === 0 ? -100 : 100,
                        opacity: 0,
                      }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    >
                      <img className="shadow-md" src={x} alt="gallery" />
                    </motion.div>
                  );
                }

                if (Array.isArray(x)) {
                  return (
                    <motion.div
                      key={i}
                      initial={{
                        x: (index + i) % 2 === 0 ? -100 : 100,
                        opacity: 0,
                      }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    >
                      {x.map((y, j) => {
                        return (
                          <img
                            className="shadow-md"
                            key={j}
                            src={y}
                            alt="gallery"
                          />
                        );
                      })}
                    </motion.div>
                  );
                }
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};
