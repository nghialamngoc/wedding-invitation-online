import Image from "next/image";
import * as motion from "motion/react-client";

export const HeadingSectionV1 = () => {
  return (
    <div className="text-center py-8 ">
      <motion.div
        className="text-4xl font-medium font-[family-name:var(--font-agbalumo)]"
        initial={{ y: -15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
      >
        Save Our Date
      </motion.div>
      <motion.div
        className="text-5xl font-[family-name:var(--font-italianno)] mt-6"
        initial={{ y: -15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
      >
        Ngọc Nghĩa - Kim Huyền
      </motion.div>

      <motion.div
        className="flex items-center justify-center"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
      >
        <Image
          className="px-4 mt-6"
          src={"/assets/17.jpg"}
          alt="banner-1"
          width={828}
          height={786}
          priority
        />
      </motion.div>

      <motion.div
        className="flex mt-6 justify-center items-center text-xl"
        initial={{ y: -15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
      >
        <div className="border-r-2 pr-4 border-[#690518]">
          <div>11:00</div>
          <div>Thứ 7</div>
        </div>
        <div className="flex gap-3 pl-4 items-center text-2xl italic">
          <div>01.03</div>
          <div className="flex flex-col leading-[30px]">
            <div>20</div>
            <div>25</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="mt-2"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
      >
        (Nhằm Ngày 2 Tháng 2 Năm Ất Tỵ)
      </motion.div>
    </div>
  );
};
