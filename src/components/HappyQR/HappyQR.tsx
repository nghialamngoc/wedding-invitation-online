import dynamic from "next/dynamic";
import { memo } from "react";

const HappyQRV1 = dynamic(() => import("./HappyQRV1"));

export interface HappyQRProps {
  design?: "v1" | "v2" | "v3";
}

export const HappyQR = memo<HappyQRProps>(({ design, ...props }) => {
  switch (design) {
    case "v1":
      return <HappyQRV1 {...props} />;

    default:
      return <HappyQRV1 {...props} />;
  }

  return null;
});

HappyQR.displayName = "HappyQR";
