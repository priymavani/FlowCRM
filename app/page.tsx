import Hero from "@/components/hero/Hero";
import Features from "@/components/features/Features";
import Benefits from "@/components/benefits/Benefits";
import Testimonials from "@/components/testimonials/Testimonials";
import Integrations from "@/components/integrations/Integrations";
import CTASection from "@/components/cta/CTASection";
import ContactSection from "@/components/contact/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />

      <Integrations />

      <Benefits />

      <Testimonials />

      <CTASection />

      <ContactSection />
    </>
  );
}
