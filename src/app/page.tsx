import GroomBride from "@/components/GroomBride";
import HeadingSection from "@/components/HeadingSection";
import Openning from "@/components/Openning";

export default function Home() {
  return (
    <>
      <Openning className="md:hidden" />
      <HeadingSection />
      <GroomBride />
    </>
  );
}
