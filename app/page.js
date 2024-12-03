import AboutUsSection from "@/components/home/AboutUsSection";
import ExcitingFeaturesSection from "@/components/home/ExcitingFeaturesSection";
import FAQ from "@/components/home/FAQ";
import OffersSection from "@/components/home/OffersSection";
import PricingSection from "@/components/home/PricingSection";
import ReviewSection from "@/components/home/ReviewSection";

export default function Home() {

  return (
    <div className='space-y-14'>
      <AboutUsSection />
      <OffersSection />
      <ExcitingFeaturesSection />
      <PricingSection />
      <FAQ />
      <ReviewSection />
    </div>
  );
}
