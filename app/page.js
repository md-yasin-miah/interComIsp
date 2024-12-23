import AboutUsSection from "@/components/home/AboutUsSection";
import ExcitingFeaturesSection from "@/components/home/ExcitingFeaturesSection";
import FAQ from "@/components/home/FAQ";
import HeroSection from "@/components/home/HeroSection";
import LeadCaptureForm from "@/components/home/LeadCaptureForm";
import OffersSection from "@/components/home/OffersSection";
import PricingSection from "@/components/home/PricingSection";
import ReviewSection from "@/components/home/ReviewSection";
import TestimonialSection from "@/components/home/TestimonialSection";

export default function Home() {

  return (
    <div className="space-y-20">
      <HeroSection />
      <AboutUsSection />
      <OffersSection />
      <ExcitingFeaturesSection />
      <PricingSection />
      <TestimonialSection />
      <ReviewSection />
      <FAQ />
      <LeadCaptureForm />
    </div>
  );
}
