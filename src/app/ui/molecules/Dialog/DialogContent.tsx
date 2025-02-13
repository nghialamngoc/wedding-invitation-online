import clsx from "clsx";
import { HTMLMotionProps, motion } from "framer-motion";
import { forwardRef } from "react";

export const DialogContent = forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(
  function DialogContent(props, ref) {
    const { children, className, ...rest } = props;

    return (
      <motion.div
        ref={ref}
        data-part="dialog-content"
        className={clsx(
          "relative z-10 flex flex-col bg-white rounded-md mx-8",
          className
        )}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
        {...rest}
      >
        {children}
      </motion.div>
    );
  }
);
