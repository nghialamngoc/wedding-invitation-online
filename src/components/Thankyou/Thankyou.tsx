import dynamic from "next/dynamic";
import { memo } from "react";

const ThankyouV1 = dynamic(() => import("./ThankyouV1"));

type Design = "v1" | "v2" | "v3";

export interface ThankyouProps {
  className?: string;
}

export const Thankyou = memo<ThankyouProps & { design?: Design }>(
  ({ design, ...props }) => {
    switch (design) {
      case "v1":
        return <ThankyouV1 {...props} />;

      default:
        return <ThankyouV1 {...props} />;
    }

    return null;
  }
);

Thankyou.displayName = "Thankyou";
