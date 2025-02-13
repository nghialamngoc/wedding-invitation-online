import { HTMLAttributes, forwardRef } from "react";
export const DialogHeader = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLElement>
>(function DialogHeader(props, ref) {
  const { className, children, ...rest } = props;

  return (
    <header ref={ref} data-part="dialog-header" className={className} {...rest}>
      {children}
    </header>
  );
});
