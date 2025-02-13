import { FC, ReactNode } from "react";
import { DialogContext, DialogProvider } from "./DialogContext";
import { DialogRoot } from "./DialogRoot";

export type DialogRootProps = {
  id?: string;
  className?: string;
  children?: ReactNode;
};

export type DialogProps = DialogRootProps & DialogContext;

export const Dialog: FC<DialogProps> = (props) => {
  const { children, id, className, ...context } = props;

  return (
    <DialogProvider {...context}>
      <DialogRoot id={id} className={className}>
        {children}
      </DialogRoot>
    </DialogProvider>
  );
};
