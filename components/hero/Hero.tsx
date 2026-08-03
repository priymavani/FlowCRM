"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BackgroundGrid, GradientBlob } from "@/components/common/Decorators";
import DashboardMockup from "./DashboardMockup";
import FloatingWidgets from "./FloatingWidgets";
import { Check, ArrowRight, Calendar } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pulseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const mm = gsap.matchMedia();

    mm.add({
      isDesktop: "(min-width: 1024px)",
      isMobile: "(max-width: 1023px)",
      reduceMotion: "(prefers-reduced-motion: reduce)"
    }, (context) => {
      const { reduceMotion, isMobile } = context.conditions as { reduceMotion: boolean; isMobile: boolean };

      if (reduceMotion) {
        // Accessibility override: instantly display layout static
        gsap.set(".hero-badge, .hero-headline-line, .hero-description, .hero-cta-button, .hero-trust-item, .hero-dashboard-wrapper, .hero-floating-widget", {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1
        });
        return;
      }

      const yOffset = isMobile ? 30 : 80;
      const xOffset = isMobile ? 20 : 80;

      // 0. Badge scale-pop entrance
      gsap.from(".hero-badge", {
        scale: 0.95,
        opacity: 0,
        duration: 0.5,
        ease: "back.out(1.5)",
      });

      // 1. Text reveal timeline (Headline lines)
      gsap.from(".hero-headline-line", {
        y: yOffset,
        opacity: 0,
        stagger: 0.1,
        duration: 0.9,
        ease: "power4.out",
        delay: 0.05,
      });

      // 2. Paragraph description fade up
      gsap.from(".hero-description", {
        y: isMobile ? 15 : 30,
        opacity: 0,
        duration: 0.7,
        delay: 0.35,
        ease: "power3.out",
      });

      // 3. CTA buttons scale/pop
      gsap.from(".hero-cta-button", {
        scale: 0.95,
        opacity: 0,
        stagger: 0.08,
        duration: 0.5,
        delay: 0.6,
        ease: "back.out(1.5)",
      });

      // 4. Trust list items fade up
      gsap.from(".hero-trust-item", {
        y: 10,
        opacity: 0,
        stagger: 0.06,
        duration: 0.4,
        delay: 0.8,
        ease: "power2.out",
      });

      // 5. Dashboard container slide-in
      gsap.from(".hero-dashboard-wrapper", {
        x: xOffset,
        opacity: 0,
        duration: 1.0,
        delay: 0.3,
        ease: "power3.out",
      });

      // 6. Floating notification widgets scale-in
      gsap.from(".hero-floating-widget", {
        scale: 0.9,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        delay: 1.0,
        ease: "back.out(1.3)",
        onComplete: () => {
          // Initialize looping float animation after entrance completes
          const widgets = gsap.utils.toArray<HTMLElement>(".hero-floating-widget");
          widgets.forEach((widget, index) => {
            gsap.to(widget, {
              y: index % 2 === 0 ? "-=8px" : "+=8px",
              duration: 4 + index * 0.6,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
              delay: index * 0.1,
            });
          });
        }
      });

      // 7. Background pulsing glow
      if (pulseRef.current) {
        gsap.to(pulseRef.current, {
          scale: 1.05,
          opacity: 0.08,
          duration: 5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    }, containerRef);

    return () => mm.revert();
  }, []);

  return (
    <Section
      id="hero"
      className="flex items-center min-h-[90vh] pt-28 pb-16 lg:py-24 relative overflow-hidden"
    >
      {/* Background Decorators */}
      <BackgroundGrid />
      <div ref={pulseRef} className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 -z-10">
        <GradientBlob color="bg-primary" size="w-[600px] h-[600px]" className="opacity-[0.06]" />
      </div>

      <Container className="w-full">
        <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copywriting Content */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left z-30">
            
            {/* Redesigned Floating Badge */}
            <div className="hero-badge w-fit">
              <Badge variant="outline" className="text-[10px] font-semibold text-primary border-primary/20 bg-primary/5 uppercase tracking-widest px-3.5 py-1 rounded-full">
                Introducing FlowCRM 2.0
              </Badge>
            </div>

            {/* Large Bold Heading */}
            <h1 className="text-hero tracking-tight overflow-hidden">
              <span className="block hero-headline-line">One Workspace.</span>
              <span className="block hero-headline-line text-primary">
                Complete CRM & Ops.
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="hero-description text-body-premium max-w-xl opacity-100">
              FlowCRM converges lead pipelines, HR shift attendance, payroll billing, and 100+ native integrations. 
              Scale your business operations without the application clutter.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mt-2">
              <div className="hero-cta-button shrink-0">
                <Button size="lg" className="flex items-center gap-4 pr-2 bg-primary hover:bg-primary-hover text-white transition-all duration-300">
                  <span>Get Started Free</span>
                  <span className="size-8 rounded-full bg-white text-primary flex items-center justify-center transition-transform duration-300 group-hover/button:translate-x-0.5 shrink-0">
                    <ArrowRight className="size-4" />
                  </span>
                </Button>
              </div>
              <div className="hero-cta-button shrink-0">
                <Button variant="outline" size="lg" className="flex items-center gap-4 pr-2 border-white/10 hover:border-white/20 text-white transition-all duration-300">
                  <span>Book a Demo</span>
                  <span className="size-8 rounded-full bg-white/5 border border-white/10 text-muted-foreground flex items-center justify-center shrink-0">
                    <Calendar className="size-4" />
                  </span>
                </Button>
              </div>
            </div>

            {/* Subtly Cased Trust Indicators */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mt-4">
              <div className="hero-trust-item flex items-center gap-2 text-xs text-muted-foreground font-medium">
                <div className="size-4 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20 shrink-0">
                  <Check className="size-3" />
                </div>
                <span>Trusted by growing businesses</span>
              </div>
              <div className="hero-trust-item flex items-center gap-2 text-xs text-muted-foreground font-medium">
                <div className="size-4 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20 shrink-0">
                  <Check className="size-3" />
                </div>
                <span>Secure cloud platform</span>
              </div>
              <div className="hero-trust-item flex items-center gap-2 text-xs text-muted-foreground font-medium">
                <div className="size-4 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20 shrink-0">
                  <Check className="size-3" />
                </div>
                <span>Setup in minutes</span>
              </div>
            </div>
          </div>

          {/* Right Column: Redesigned Dashboard Mockup & Floating Cards */}
          <div className="lg:col-span-7 relative hero-dashboard-wrapper z-10 w-full select-none">
            {/* Ambient Background Glow behind Dashboard */}
            <div className="absolute inset-0 bg-primary/5 rounded-dashboard filter blur-[40px] -z-10" />
            
            {/* Redesigned Dashboard Mockup Component */}
            <DashboardMockup />

            {/* Redesigned Floating Overlay Widgets */}
            <FloatingWidgets />
          </div>

        </div>
      </Container>
    </Section>
  );
}
