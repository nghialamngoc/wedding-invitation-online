import Image from "next/image";
import * as motion from "motion/react-client";

export const MapV1 = () => {
  return (
    <div className="text-center bg-white text-black">
      <div className="m-auto pt-2 px-3 w-fit font-[family-name:var(--font-italianno)] text-4xl">
        Địa điểm tổ chức
      </div>

      <div className="mt-2">Tư gia nhà trai</div>
      <div>Nghĩa Điền, Tư Nghĩa, Quảng Ngãi</div>
      <div className="mt-2 px-4">
        <iframe
          className="w-full h-[300px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1046.9635757248186!2d108.78419546871142!3d15.095079124443284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3169ad0038db1e01%3A0x9ac43058619856dc!2sAnh%20Shiper%20vip!5e0!3m2!1svi!2s!4v1739027431590!5m2!1svi!2s"
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};
