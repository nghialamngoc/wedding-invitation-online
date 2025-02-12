import dynamic from "next/dynamic";
import { memo } from "react";

const BackgroundAnimationV1 = dynamic(() => import("./BackgroundAnimationV1"));

export interface BackgroundAnimationProps {
  design?: "v1" | "v2" | "v3";
}

export const BackgroundAnimation = memo<BackgroundAnimationProps>(
  ({ design, ...props }) => {
    switch (design) {
      case "v1":
        return <BackgroundAnimationV1 {...props} />;

      default:
        return <BackgroundAnimationV1 {...props} />;
    }

    return null;
  }
);

BackgroundAnimation.displayName = "BackgroundAnimation";
