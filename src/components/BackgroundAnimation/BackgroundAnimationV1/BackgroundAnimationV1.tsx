"use client";

import React, { useEffect } from "react";
import styles from "./BackgroundAnimationV1.module.css";

const icons = [
  "/assets/icon-5.png",
  "/assets/icon-2.png",
  "/assets/icon-3.png",
  "/assets/icon-4.png",
];

const count = 60;

export const BackgroundAnimationV1 = () => {
  useEffect(() => {
    const width = document.documentElement.clientWidth;
    const container = document.getElementsByTagName("body");

    const createElement = () => {
      for (let i = 0; i < count; i++) {
        const randomLeft = Math.floor(Math.random() * width) - 20;
        const randomTop = Math.floor(Math.random() * 50);
        const randomIcon = Math.floor(Math.random() * 4);
        const randomTimming = Math.floor(Math.random() * 12) + 5;

        const el = document.createElement("div");

        el.style.backgroundImage = `url(${icons[randomIcon]})`;
        el.style.top = randomTop + "px";
        el.style.left = randomLeft + "px";

        el.style.animationDuration = `${randomTimming}s`;
        el.className = styles.icon;

        container[0].appendChild(el);
      }
    };

    createElement();
  }, []);
  return <div className={styles.root}></div>;
};
