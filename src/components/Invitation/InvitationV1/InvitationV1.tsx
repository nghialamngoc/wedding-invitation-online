"use client";

import { FC, useEffect, useRef } from "react";
import styles from "./InvitationV1.module.css";
import * as motion from "motion/react-client";
import { InvitationProps } from "../Invitation";
import clsx from "clsx";
import Image from "next/image";
import { inView } from "motion";

const data = [
  {
    image: "/assets/invitation-2.jpg",
  },
  {
    image: "/assets/invitation-1.jpg",
  },
  {
    image: "/assets/invitation-4.jpg",
  },
];

export const InvitationV1: FC<InvitationProps> = (props) => {
  const imageEl = useRef(null);

  useEffect(() => {
    const imageAnimation = () => {
      if (!imageEl.current) return;

      inView(imageEl.current, (item) => {
        const element = item as HTMLElement;

        element.style.transform = "scale(1)";
        element.style.opacity = "1";
        element.style.transition = "all 0.8s ease-in-out";
      });
    };

    imageAnimation();
  }, []);

  return (
    <div className="bg-white text-black text-center py-2">
      <div className="m-auto pt-2 px-3 w-fit font-[family-name:var(--font-italianno)] text-5xl border-t-2 border-black">
        Thư mời
      </div>

      <div className="text-[14px]">
        Tham dự lễ cưới của Ngọc Nghĩa và Kim Huyền
      </div>

      <div
        ref={imageEl}
        className="mx-auto relative w-[240px] h-[300px] mt-4 scale-75"
      >
        <Image
          className="object-cover rounded-md shadow-xl"
          src="/assets/invitation-1.jpg"
          fill
          alt="invitation"
        />
      </div>

      <div className="mt-5">
        <div className="text-xl font-medium">Thứ 7 | 11h00</div>
        <div className="text-xl font-medium">Tháng 03/2025</div>
        <div className={styles.calendar}>
          <div className={styles.weekdays}>
            <div>Sun</div>
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
          </div>

          <div className={styles.days}>
            <div className={clsx(styles.day, styles.empty)}></div>
            <div className={clsx(styles.day, styles.empty)}></div>
            <div className={clsx(styles.day, styles.empty)}></div>
            <div className={clsx(styles.day, styles.empty)}></div>
            <div className={clsx(styles.day, styles.empty)}></div>
            <div className={clsx(styles.day, styles.empty)}></div>
            <div className={clsx(styles.day, styles.weekend, styles.mark)}>
              1
            </div>
            <div className={clsx(styles.day, styles.weekend)}>2</div>
            <div className={styles.day}>3</div>
            <div className={styles.day}>4</div>
            <div className={styles.day}>5</div>
            <div className={styles.day}>6</div>
            <div className={styles.day}>7</div>
            <div className={clsx(styles.day, styles.weekend)}>8</div>
            <div className={clsx(styles.day, styles.weekend)}>9</div>
            <div className={styles.day}>10</div>
            <div className={styles.day}>11</div>
            <div className={styles.day}>12</div>
            <div className={styles.day}>13</div>
            <div className={styles.day}>14</div>
            <div className={clsx(styles.day, styles.weekend)}>15</div>
            <div className={clsx(styles.day, styles.weekend)}>16</div>
            <div className={styles.day}>17</div>
            <div className={styles.day}>18</div>
            <div className={styles.day}>19</div>
            <div className={styles.day}>20</div>
            <div className={styles.day}>21</div>
            <div className={clsx(styles.day, styles.weekend)}>22</div>
            <div className={clsx(styles.day, styles.weekend)}>23</div>
            <div className={styles.day}>24</div>
            <div className={styles.day}>25</div>
            <div className={styles.day}>26</div>
            <div className={styles.day}>27</div>
            <div className={styles.day}>28</div>
            <div className={clsx(styles.day, styles.weekend)}>29</div>
            <div className={clsx(styles.day, styles.weekend)}>30</div>
            <div className={styles.day}>31</div>
          </div>
        </div>
      </div>
    </div>
  );
};
