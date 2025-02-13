import { FC } from "react";
import styles from "./OpenningV1.module.css";
import * as motion from "motion/react-client";
import { OpenningProps } from "../Openning";
import clsx from "clsx";

export const OpenningV1: FC<OpenningProps> = (props) => {
  return (
    <motion.div
      animate={{ display: "none" }}
      transition={{
        duration: 2.1,
        ease: "easeOut",
      }}
      className={clsx(styles.root, props.className)}
    >
      <motion.div
        className={styles.left}
        // initial={{ scale: 1 }}
        animate={{ x: "-120%" }}
        transition={{
          duration: 2,
          ease: "easeOut",
        }}
      ></motion.div>
      <motion.div
        className={styles.right}
        // initial={{ scale: 1 }}
        animate={{ x: "120%" }}
        transition={{
          duration: 2,
          ease: "easeOut",
        }}
      ></motion.div>
    </motion.div>
  );
};
