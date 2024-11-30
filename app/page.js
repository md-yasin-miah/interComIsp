import AboutUsSection from "@/components/home/AboutUsSection";
import OffersSection from "@/components/home/OffersSection";
import SectionTitle from "@/components/shared/SectionTitle";

export default function Home() {

  return (
    <div className='space-y-14'>
      <AboutUsSection />
      <OffersSection />
    </div>
  );
}
