import dynamic from "next/dynamic";
import { memo } from "react";

const InvitationV1 = dynamic(() => import("./InvitationV1"));

type Design = "v1" | "v2" | "v3";

export interface InvitationProps {
  className?: string;
}

export const Invitation = memo<InvitationProps & { design?: Design }>(
  ({ design, ...props }) => {
    switch (design) {
      case "v1":
        return <InvitationV1 {...props} />;

      default:
        return <InvitationV1 {...props} />;
    }

    return null;
  }
);

Invitation.displayName = "Invitation";
