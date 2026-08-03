import { Section } from "@/components/common/Section";
import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { BackgroundGrid, GradientBlob } from "@/components/common/Decorators";

export default function Home() {
  return (
    <>
      {/* Hero Section Placeholder */}
      <Section id="hero" className="flex items-center min-h-[80vh]">
        <BackgroundGrid />
        <GradientBlob className="top-10 left-1/4" />
        <Container className="flex flex-col items-center justify-center text-center">
          <SectionHeader
            label="Welcome to FlowCRM"
            title="The Next Generation SaaS Workspace"
            description="Manage your complete business pipeline, employee operations, and financial accounting from a unified, lightning-fast platform."
          />
          <div className="py-20 border border-dashed border-white/10 rounded-dashboard w-full max-w-4xl flex items-center justify-center bg-card/50">
            <span className="text-sm font-mono text-muted-foreground">[Hero Section Mockup/Dashboard Placeholder]</span>
          </div>
        </Container>
      </Section>

      {/* Features Section Placeholder */}
      <Section id="features" variant="surface">
        <Container>
          <SectionHeader
            label="Powerful Core Features"
            title="All the modules your company needs to grow"
            description="Explore our specialized modules for pipeline planning, human resource tracking, and smart billing."
          />
          <div className="py-20 border border-dashed border-white/10 rounded-dashboard w-full flex items-center justify-center bg-card/50">
            <span className="text-sm font-mono text-muted-foreground">[Features Section Cards Grid Placeholder]</span>
          </div>
        </Container>
      </Section>

      {/* Dashboard Showcase Section Placeholder */}
      <Section id="dashboard">
        <Container>
          <SectionHeader
            label="Visual Command Center"
            title="Get a 360° view of your business metrics"
            description="Monitor live lead conversions, revenue metrics, team schedules, and task boards."
          />
          <div className="py-20 border border-dashed border-white/10 rounded-dashboard w-full flex items-center justify-center bg-card/50">
            <span className="text-sm font-mono text-muted-foreground">[Large CRM Dashboard Mockup Showcase Placeholder]</span>
          </div>
        </Container>
      </Section>

      {/* Integrations Section Placeholder */}
      <Section id="integrations" variant="surface-secondary">
        <Container>
          <SectionHeader
            label="Universal Connectors"
            title="Plug directly into your operational stack"
            description="FlowCRM links with lead portals, communication channels, cloud spreadsheets, and webhooks."
          />
          <div className="py-20 border border-dashed border-white/10 rounded-dashboard w-full flex items-center justify-center bg-card/50">
            <span className="text-sm font-mono text-muted-foreground">[Integrations Connector Grid Placeholder]</span>
          </div>
        </Container>
      </Section>

      {/* Benefits (Why Us) Section Placeholder */}
      <Section id="benefits">
        <Container>
          <SectionHeader
            label="Why FlowCRM"
            title="The choice for high-velocity teams"
            description="Speed, automation, security, and scalability come standard out of the box."
          />
          <div className="py-20 border border-dashed border-white/10 rounded-dashboard w-full flex items-center justify-center bg-card/50">
            <span className="text-sm font-mono text-muted-foreground">[Why Choose Us Grid Placeholder]</span>
          </div>
        </Container>
      </Section>

      {/* Testimonials Section Placeholder */}
      <Section id="testimonials" variant="surface">
        <Container>
          <SectionHeader
            label="Customer Success"
            title="Trusted by scaling businesses globally"
            description="Read how teams use FlowCRM to optimize sales activities, accelerate collections, and boost alignment."
          />
          <div className="py-20 border border-dashed border-white/10 rounded-dashboard w-full flex items-center justify-center bg-card/50">
            <span className="text-sm font-mono text-muted-foreground">[Testimonials Carousel Placeholder]</span>
          </div>
        </Container>
      </Section>

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
