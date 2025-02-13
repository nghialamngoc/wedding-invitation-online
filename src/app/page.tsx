import BackgroundAnimation from "@/components/BackgroundAnimation";
import HeadingSection from "@/components/HeadingSection";
import Openning from "@/components/Openning";
import dynamic from "next/dynamic";

const GroomBride = dynamic(() => import("../components/GroomBride"));
const Invitation = dynamic(() => import("../components/Invitation"));
const Map = dynamic(() => import("../components/Map"));
const Gallery = dynamic(() => import("../components/Gallery"));
const Thankyou = dynamic(() => import("../components/Thankyou"));
const AudioPlayer = dynamic(() => import("../components/AudioPlayer"));

export default function Home() {
  return (
    <div className="bg-white text-[#690518] font-[family-name:var(--font-andika)] max-w-screen-sm mx-auto">
      <Openning className="md:hidden" />
      <HeadingSection />
      <BackgroundAnimation />
      <GroomBride />
      <Invitation />
      <Map />
      <Gallery />
      <Thankyou />
      <AudioPlayer />
    </div>
  );
}
