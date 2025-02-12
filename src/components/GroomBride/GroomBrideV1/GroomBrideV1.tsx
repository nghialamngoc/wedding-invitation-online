"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./GroomBrideV1.module.css";

const data = [
  {
    image: "/assets/groom.jpg",
    name: "Ngọc Nghĩa",
    father: "Lâm Ngọc Thìn",
    mother: "Nguyễn Thị Thúy",
  },
  {
    image: "/assets/bride.jpg",
    name: "Kim Huyền",
    father: "Phạm Bình",
    mother: "Lê Thị Liên",
  },
];

export const GroomBrideV1 = () => {
  return (
    <div className={styles.root}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-3xl font-[family-name:var(--font-italianno)]"
      >
        <p>Hôn nhân là chuyện cả đời</p>
        <p>Yêu người vừa ý, cưới người mình thương...</p>
      </motion.div>

      <div className="mt-8 grid grid-cols-1 gap-4">
        {data.map((item, index) => {
          return (
            <div
              className="grid grid-cols-2 gap-2 px-2 overflow-hidden"
              key={index}
            >
              <motion.div
                initial={{
                  x: index === 0 ? 200 : -200,
                  y: index === 0 ? 100 : -100,
                  opacity: 1,
                  rotateY: -180,
                }}
                whileInView={{ x: 0, y: 0, opacity: 1, rotateY: 180 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                // viewport={{ once: true }}
                className={`relative w-full h-[260px] md:h-[400px] ${
                  index === 1 ? "order-2" : "order-1"
                }`}
              >
                <Image
                  className="object-cover shadow-lg rounded-sm"
                  src={item.image}
                  fill
                  alt="avatar"
                />
              </motion.div>

              <motion.div
                initial={{ x: index === 0 ? -100 : 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className={index === 1 ? "order-1" : "order-2"}
              >
                <p className="mt-4 italic font-medium text-lg">
                  {index === 0 ? "Nhà Trai" : "Nhà Gái"}
                </p>
                <div className="mt-1 font-medium">
                  <p>Ông {item.father}</p>
                  <p>Bà {item.mother}</p>
                </div>

                <p className="mt-6 italic font-medium">
                  {index === 0 ? "Chú rễ" : "Cô dâu"}
                </p>
                <p className="mt-1 font-[family-name:var(--font-italianno)] text-4xl">
                  {item.name}
                </p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
