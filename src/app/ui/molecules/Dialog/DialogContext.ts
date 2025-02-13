import { useEffect } from "react";
import { createContext } from "@/app/utils/create-context";
import { useControllableState } from "@/app/hooks/use-controllable-state";
import { useLockedBody } from "@/app/hooks/use-locked-body";

export interface DialogContext {
  blockScrollOnMount?: boolean;
  closeOnOverlayClick?: boolean;
  defaultOpen?: boolean;
  isOpen?: boolean;
  onOpen?: () => void;
  onHide?: () => void;
  onChange?: (isOpen: boolean) => void;
}

export const [DialogProvider, useDialogContext] = createContext(
  (props: DialogContext) => {
    const {
      isOpen: isOpenProp,
      defaultOpen,
      onHide,
      onOpen,
      onChange,
      blockScrollOnMount = true,
      closeOnOverlayClick = true,
      ...rest
    } = props;

    const { setLocked } = useLockedBody(blockScrollOnMount);

    const [isOpen, setOpen] = useControllableState({
      defaultValue: defaultOpen,
      value: isOpenProp,
      onChange: (value) => {
        onChange?.(value);
        if (value) {
          onOpen?.();
        } else {
          onHide?.();
        }
      },
    });

    const onExitComplete = () => {
      setLocked(false);
    };

    useEffect(() => {
      if (blockScrollOnMount && isOpen) {
        setLocked(true);
      }
    }, [blockScrollOnMount, isOpen, setLocked]);

    return {
      defaultOpen,
      isOpen,
      setOpen,
      closeOnOverlayClick,
      onExitComplete,
      ...rest,
    };
  }
);
