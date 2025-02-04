import dynamic from "next/dynamic";
import { memo } from "react";

const GroomBrideV1 = dynamic(() => import("./GroomBrideV1"));

export interface GroomBrideProps {
  design?: "v1" | "v2" | "v3";
}

export const GroomBride = memo<GroomBrideProps>(({ design, ...props }) => {
  switch (design) {
    case "v1":
      return <GroomBrideV1 {...props} />;

    default:
      return <GroomBrideV1 {...props} />;
  }

  return null;
});

GroomBride.displayName = "GroomBride";
