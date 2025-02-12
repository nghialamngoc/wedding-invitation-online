import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export const autoScrollTop = () => {
  const pathname = usePathname();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    }, 100);
  }, [pathname]);

  return null;
};
