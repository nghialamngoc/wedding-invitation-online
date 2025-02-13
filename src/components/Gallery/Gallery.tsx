import dynamic from "next/dynamic";
import { memo } from "react";

const GalleryV1 = dynamic(() => import("./GalleryV1"));

type Design = "v1" | "v2" | "v3";

export interface GalleryProps {
  className?: string;
}

export const Gallery = memo<GalleryProps & { design?: Design }>(
  ({ design, ...props }) => {
    switch (design) {
      case "v1":
        return <GalleryV1 {...props} />;

      default:
        return <GalleryV1 {...props} />;
    }

    return null;
  }
);

Gallery.displayName = "Gallery";
