import dynamic from "next/dynamic";
import Hero from "@/components/hero/Hero";
import Features from "@/components/features/Features";

// Lazy load below-the-fold components to optimize first-load bundle size
const Integrations = dynamic(() => import("@/components/integrations/Integrations"));
const Benefits = dynamic(() => import("@/components/benefits/Benefits"));
const Testimonials = dynamic(() => import("@/components/testimonials/Testimonials"));
const CTASection = dynamic(() => import("@/components/cta/CTASection"));
const ContactSection = dynamic(() => import("@/components/contact/ContactSection"));

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "FlowCRM",
    "url": "https://flow-crm.vercel.app",
    "logo": "https://flow-crm.vercel.app/favicon.ico",
    "description": "Unified operations workspace built for modern businesses to manage leads, track workforce attendance shifts, and automate invoices.",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <>
      {/* Structured Schema Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
