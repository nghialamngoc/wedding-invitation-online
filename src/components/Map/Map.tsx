import dynamic from "next/dynamic";
import { memo } from "react";

const MapV1 = dynamic(() => import("./MapV1"));

export interface MapProps {
  design?: "v1" | "v2" | "v3";
}

export const Map = memo<MapProps>(({ design, ...props }) => {
  switch (design) {
    case "v1":
      return <MapV1 {...props} />;

    default:
      return <MapV1 {...props} />;
  }

  return null;
});

Map.displayName = "Map";
