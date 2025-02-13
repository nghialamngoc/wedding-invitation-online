import { HTMLMotionProps, motion } from "framer-motion";
import { MouseEventHandler, forwardRef } from "react";
import { useDialogContext } from "./DialogContext";
import clsx from "clsx";

export const DialogOverlay = forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(
  function DialogOverlay(props, ref) {
    const { className, onClick, ...rest } = props;
    const { closeOnOverlayClick, setOpen } = useDialogContext();

    const onOverlayClick: MouseEventHandler<HTMLDivElement> = (e) => {
      if (closeOnOverlayClick) {
        setOpen(false);
      }

      onClick?.(e);
    };

    return (
      <motion.div
        ref={ref}
        data-part="dialog-overlay"
        className={clsx("fixed inset-0 bg-black opacity-90", className)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.1 }}
        {...rest}
        onClick={onOverlayClick}
      />
    );
  }
);
