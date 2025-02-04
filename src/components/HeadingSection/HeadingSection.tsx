import dynamic from "next/dynamic";
import { memo } from "react";

const HeadingSectionV1 = dynamic(() => import("./HeadingSectionV1"));

export interface HeadingSectionProps {
  design?: "v1" | "v2" | "v3";
}

export const HeadingSection = memo<HeadingSectionProps>(
  ({ design, ...props }) => {
    switch (design) {
      case "v1":
        return <HeadingSectionV1 {...props} />;

      default:
        return <HeadingSectionV1 {...props} />;
    }

    return null;
  }
);

HeadingSection.displayName = "HeadingSection";
