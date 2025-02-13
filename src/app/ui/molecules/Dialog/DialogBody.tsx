import clsx from "clsx";
import { forwardRef, HTMLProps } from "react";

export const DialogBody = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(
  function DialogBody(props, ref) {
    const { children, className, ...rest } = props;

    return (
      <div
        ref={ref}
        data-part="dialog-body"
        className={clsx("overflow-auto", className)}
        {...rest}
      >
        {children}
      </div>
    );
  }
);
