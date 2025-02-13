import { forwardRef, HTMLAttributes } from "react";

export const DialogFooter = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLElement>
>(function DialogFooter(props, ref) {
  const { className, children, ...rest } = props;

  return (
    <footer ref={ref} data-part="dialog-footer" className={className} {...rest}>
      {children}
    </footer>
  );
});
