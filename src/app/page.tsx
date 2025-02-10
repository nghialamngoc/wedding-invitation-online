import HeadingSection from "@/components/HeadingSection";
import Openning from "@/components/Openning";
import dynamic from "next/dynamic";

const GroomBride = dynamic(() => import("../components/GroomBride"));
const Invitation = dynamic(() => import("../components/Invitation"));
const Map = dynamic(() => import("../components/Map"));
const Gallery = dynamic(() => import("../components/Gallery"));
const Thankyou = dynamic(() => import("../components/Thankyou"));

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-roboto)] max-w-screen-sm mx-auto">
      {/* <Openning className="md:hidden" /> */}
      <HeadingSection />
      <GroomBride />
      <Invitation />
      <Map />
      <Gallery />
      <Thankyou />
    </div>
  );
}
