"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { BackgroundGrid, GradientBlob } from "@/components/common/Decorators";
import DashboardMockup from "./DashboardMockup";
import FloatingWidgets from "./FloatingWidgets";
import { Check } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pulseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Text reveal timeline (Headline lines)
      gsap.from(".hero-headline-line", {
        y: 80,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power4.out",
      });

      // 2. Paragraph description fade up
      gsap.from(".hero-description", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.4,
        ease: "power3.out",
      });

      // 3. CTA buttons scale/pop
      gsap.from(".hero-cta-button", {
        scale: 0.9,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        delay: 0.7,
        ease: "back.out(1.7)",
      });

      // 4. Trust list items fade up
      gsap.from(".hero-trust-item", {
        y: 15,
        opacity: 0,
        stagger: 0.08,
        duration: 0.5,
        delay: 0.9,
        ease: "power2.out",
      });

      // 5. Dashboard container slide-in
      gsap.from(".hero-dashboard-wrapper", {
        x: 80,
        opacity: 0,
        duration: 1.2,
        delay: 0.3,
        ease: "power3.out",
      });

      // 6. Floating notification widgets scale-in
      gsap.from(".hero-floating-widget", {
        scale: 0.8,
        opacity: 0,
        stagger: 0.12,
        duration: 0.7,
        delay: 1.1,
        ease: "back.out(1.5)",
        onComplete: () => {
          // Initialize looping float animation after entrance completes
          const widgets = gsap.utils.toArray<HTMLElement>(".hero-floating-widget");
          widgets.forEach((widget, index) => {
            gsap.to(widget, {
              y: index % 2 === 0 ? "-=12px" : "+=12px",
              duration: 3 + index * 0.5,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
              delay: index * 0.15,
            });
          });
        }
      });

      // 7. Background pulsing glow
      if (pulseRef.current) {
        gsap.to(pulseRef.current, {
          scale: 1.08,
          opacity: 0.09,
          duration: 6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    }, containerRef);

    return () => ctx.revert();
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
            <h1 className="text-hero tracking-tight overflow-hidden">
              <span className="block hero-headline-line">One Workspace.</span>
              <span className="block hero-headline-line text-primary">
                Complete Operations.
              </span>
            </h1>

            <p className="hero-description text-body-premium max-w-xl opacity-100">
              Everything your business needs to manage sales pipelines, HR operations, 
              billing workflows, and customer relationships in a single, secure CRM platform.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mt-2">
              <Button size="lg" className="hero-cta-button">
                Book Demo
              </Button>
              <Button variant="outline" size="lg" className="hero-cta-button">
                Watch Overview
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mt-4">
              <div className="hero-trust-item flex items-center gap-2 text-xs text-muted-foreground font-medium">
                <div className="size-4 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20 shrink-0">
                  <Check className="size-3" />
                </div>
                <span>Trusted by Growing Businesses</span>
              </div>
              <div className="hero-trust-item flex items-center gap-2 text-xs text-muted-foreground font-medium">
                <div className="size-4 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20 shrink-0">
                  <Check className="size-3" />
                </div>
                <span>Secure Cloud Platform</span>
              </div>
              <div className="hero-trust-item flex items-center gap-2 text-xs text-muted-foreground font-medium">
                <div className="size-4 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20 shrink-0">
                  <Check className="size-3" />
                </div>
                <span>Setup in Minutes</span>
              </div>
            </div>
          </div>

          {/* Right Column: Dashboard Mockup & Floating Cards */}
          <div className="lg:col-span-7 relative hero-dashboard-wrapper z-10 w-full select-none">
            {/* Ambient Background Glow behind Dashboard */}
            <div className="absolute inset-0 bg-primary/5 rounded-dashboard filter blur-[40px] -z-10" />
            
            {/* Dashboard Mockup Component */}
            <DashboardMockup />

            {/* Floating Overlay Widgets */}
            <FloatingWidgets />
          </div>

        </div>
      </Container>
    </Section>
  );
}
