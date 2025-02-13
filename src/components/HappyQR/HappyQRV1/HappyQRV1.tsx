"use client";

import { QRBank } from "@/app/ui/Modals/QRBank/QRBank";
import NiceModal from "@ebay/nice-modal-react";
import Image from "next/image";
import { motion } from "framer-motion";

export const HappyQRV1 = () => {
  const onClick = () => {
    console.log("hể");

    NiceModal.show(QRBank);
  };

  return (
    <div className="text-center mt-4 flex items-center justify-center">
      <button onClick={onClick} className="py-2 px-4">
        Gửi Mừng Cưới
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
    </div>
  );
};
