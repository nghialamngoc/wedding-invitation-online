"use client";

import { useEffect, useRef, useState } from "react";

export const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Lắng nghe tương tác người dùng trên toàn document
  useEffect(() => {
    const handleInteraction = () => {
      setHasInteracted(true);
      // Xóa event listener sau lần tương tác đầu tiên
      document.removeEventListener("click", handleInteraction);
      document.removeEventListener("keydown", handleInteraction);
      document.removeEventListener("touchstart", handleInteraction);
      // document.removeEventListener("scroll", handleInteraction);
    };

    document.addEventListener("click", handleInteraction);
    document.addEventListener("keydown", handleInteraction);
    document.addEventListener("touchstart", handleInteraction);
    // document.addEventListener("scroll", handleInteraction);

    return () => {
      document.removeEventListener("click", handleInteraction);
      document.removeEventListener("keydown", handleInteraction);
      document.removeEventListener("touchstart", handleInteraction);
      // document.removeEventListener("scroll", handleInteraction);
    };
  }, []);

  // Xử lý autoplay sau khi có tương tác
  useEffect(() => {
    if (hasInteracted && audioRef.current) {
      const playAudio = async () => {
        try {
          await audioRef?.current?.play();
        } catch (error) {
          console.error("Lỗi phát audio:", error);
        }
      };

      playAudio();
    }
  }, [hasInteracted]);

  return (
    <div>
      <audio ref={audioRef} src={"/assets/audio-2.mp3"} preload="auto" loop />
    </div>
  );
};
