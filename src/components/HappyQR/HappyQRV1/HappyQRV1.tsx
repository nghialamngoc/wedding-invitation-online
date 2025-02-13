"use client";

import { QRBank } from "@/app/ui/molecules/Modals/QRBank/QRBank";
import NiceModal from "@ebay/nice-modal-react";
import Image from "next/image";
import { motion } from "framer-motion";
import IconArrowRight from "@/app/ui/icons/IconArrowRight";
import IconArrowLeft from "@/app/ui/icons/IconArrowLeft";

export const HappyQRV1 = () => {
  const onClick = () => {
    NiceModal.show(QRBank);
  };

  return (
    <div className="text-center mt-4 flex items-center justify-center font-[family-name:var(--font-italianno)]">
      <motion.div
        initial={{
          x: -50,
          opacity: 0,
        }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", repeat: 20000 }}
      >
        <IconArrowLeft
          width={32}
          height={32}
          style={{
            transform: "rotate(180deg)",
          }}
        />
      </motion.div>

      <button onClick={onClick} className="py-2 px-4">
        <div className="text-2xl">Gửi Mừng Cưới Chúng Mình</div>
        <div className="flex items-center justify-center mt-2">
          <motion.div
            initial={{
              x: -50,
              opacity: 0,
            }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Image
              src="/assets/cute-icon-1.png"
              width={40}
              height={30}
              alt="icon"
            />
          </motion.div>
          <motion.div
            initial={{
              x: 50,
              opacity: 0,
            }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Image
              src="/assets/cute-icon-2.png"
              width={40}
              height={30}
              alt="icon"
            />
          </motion.div>
        </div>
      </button>

      <motion.div
        initial={{
          x: 50,
          opacity: 0,
        }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", repeat: 20000 }}
      >
        <IconArrowLeft width={32} height={32} />
      </motion.div>
    </div>
  );
};
