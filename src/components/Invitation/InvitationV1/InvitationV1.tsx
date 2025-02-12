"use client";

import { FC } from "react";
import styles from "./InvitationV1.module.css";
import * as motion from "motion/react-client";
import { InvitationProps } from "../Invitation";
import clsx from "clsx";
import Image from "next/image";

export const InvitationV1: FC<InvitationProps> = (props) => {
  return (
    <div className="bg-white text-black text-center py-2">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="m-auto pt-4 px-3 w-fit font-[family-name:var(--font-italianno)] border-t-2 text-5xl border-black">
          Thư mời
        </div>
        <div className="text-[14px]">
          Tham dự lễ cưới của Ngọc Nghĩa và Kim Huyền
        </div>
      </motion.div>

      <motion.div
        className="mx-auto relative w-[240px] h-[300px] mt-6 scale-75"
        initial={{ scale: 0.7, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image
          className="object-cover rounded-md shadow-xl"
          src="/assets/invitation-1.jpg"
          fill
          alt="invitation"
        />
      </motion.div>

      <motion.div
        initial={{ scale: 1.3, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mt-6"
      >
        <div className="text-xl font-medium">
          <div>Thứ 7 | 11h00</div>
          <div>Tháng 03/2025</div>
        </div>

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
      </motion.div>
    </div>
  );
};
