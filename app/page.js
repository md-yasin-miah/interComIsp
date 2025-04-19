import AboutUsSection from "@/components/home/AboutUsSection";
import BlogSection from "@/components/home/BlogSection";
import FAQ from "@/components/home/FAQ";
import HeroSection from "@/components/home/HeroSection";
import LeadCaptureForm from "@/components/home/LeadCaptureForm";
import OffersSection from "@/components/home/OffersSection";
import PricingSection from "@/components/home/PricingSection";
import ReviewSection from "@/components/home/ReviewSection";
import SupportSection from "@/components/home/SupportSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import { getHomePageData } from "@/lib/getStaticData";

// Enable static generation
export const revalidate = 3600; // Revalidate every hour

export default async function Home() {
  // Fetch data at build time
  const data = await getHomePageData();

  return (
    <div>
      <HeroSection data={data.heroSlides} />
      <AboutUsSection data={data.about} />
      <OffersSection data={data.offers} />
      <PricingSection data={data.packages} />
      <SupportSection />
      <TestimonialSection data={data.testimonials} />
      <ReviewSection data={data.clientReviews} />
      <BlogSection />
      <FAQ data={data.faqs} />
      <LeadCaptureForm />
    </div>
  );
}
