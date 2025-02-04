import dynamic from "next/dynamic";
import { memo } from "react";

const OpenningV1 = dynamic(() => import("./OpenningV1"));

type Design = "v1" | "v2" | "v3";

export interface OpenningProps {
  className?: string;
}

export const Openning = memo<OpenningProps & { design?: Design }>(
  ({ design, ...props }) => {
    switch (design) {
      case "v1":
        return <OpenningV1 {...props} />;

      default:
        return <OpenningV1 {...props} />;
    }

    return null;
  }
);

Openning.displayName = "Openning";
