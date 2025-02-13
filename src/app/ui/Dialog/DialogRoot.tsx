import { ReactNode } from "react";
import { AnimatePresence } from "framer-motion";
import { useDialogContext } from "./DialogContext";
import { Portal } from "../Portal";
import clsx from "clsx";

export interface DialogRootProps {
  id?: string;
  className?: string;
  children?: ReactNode;
}

export const DialogRoot = ({ id, className, children }: DialogRootProps) => {
  const { isOpen, onExitComplete } = useDialogContext();

  console.log("isOpen", isOpen);

  return (
    <AnimatePresence onExitComplete={onExitComplete}>
      {isOpen && (
        <Portal>
          <div
            id={id}
            data-part="dialog-root"
            className={clsx(
              "fixed inset-0 w-screen h-dvh z-40 overflow-auto overscroll-y-none flex items-center justify-center",
              className
            )}
          >
            {children}
          </div>
        </Portal>
      )}
    </AnimatePresence>
  );
};
