import { Section } from "@/components/common/Section";
import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import Hero from "@/components/hero/Hero";
import Features from "@/components/features/Features";
import Benefits from "@/components/benefits/Benefits";
import Testimonials from "@/components/testimonials/Testimonials";
import Integrations from "@/components/integrations/Integrations";
import { GradientBlob } from "@/components/common/Decorators";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />

      <Integrations />

      <Benefits />

      <Testimonials />

      {/* CTA Section Placeholder */}
      <Section id="cta">
        <GradientBlob className="bottom-0 right-1/4" color="bg-primary-hover" />
        <Container>
          <div className="py-20 border border-dashed border-white/10 rounded-dashboard w-full flex flex-col items-center justify-center text-center bg-card/50 gap-4">
            <h3 className="text-2xl font-bold text-white">Ready to elevate your operational efficiency?</h3>
            <p className="text-sm text-body max-w-md">Join hundreds of growing organizations and simplify your company workflows.</p>
            <span className="text-sm font-mono text-muted-foreground">[CTA Button Banner Placeholder]</span>
          </div>
        </Container>
      </Section>

      {/* Contact Section Placeholder */}
      <Section id="contact" variant="surface-secondary">
        <Container>
          <SectionHeader
            label="Get in touch"
            title="Start your trial or book a custom demo"
            description="Fill out the contact form below and a CRM advisor will schedule an alignment call within 24 hours."
          />
          <div className="py-20 border border-dashed border-white/10 rounded-dashboard w-full flex items-center justify-center bg-card/50">
            <span className="text-sm font-mono text-muted-foreground">[Contact Form Component Placeholder]</span>
          </div>
        </Container>
      </Section>
    </>
  );
}
