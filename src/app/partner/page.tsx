import AffiliateHeader from "@/components/affiliate/Header";
import AffiliateHero from "@/components/affiliate/HeroSection";
import AffiliateSteps from "@/components/affiliate/StepCards";
import AffiliateForm from "@/components/affiliate/ReferralForm";
import Footer from "@/components/Footer";

export default function PartnerPage() {
  return (
    <>
      <AffiliateHeader />
      <AffiliateHero />
      <AffiliateSteps />
      <AffiliateForm />
      <Footer />
    </>
  );
}
