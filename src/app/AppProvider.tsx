"use client";

import { Provider as NiceModalProvider } from "@ebay/nice-modal-react";
import { FC, PropsWithChildren } from "react";

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  return <NiceModalProvider>{children}</NiceModalProvider>;
};
