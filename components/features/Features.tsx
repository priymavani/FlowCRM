"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { SectionHeader } from "@/components/common/SectionHeader";
import { BackgroundGrid, GradientBlob } from "@/components/common/Decorators";
import { FeatureCard } from "@/components/common/Cards";
import DashboardShowcase from "./DashboardShowcase";
import { TrendingUp, Clock, FileText, Activity } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Features() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const mm = gsap.matchMedia();

    mm.add({
      isDesktop: "(min-width: 1024px)",
      isMobile: "(max-width: 1023px)",
      reduceMotion: "(prefers-reduced-motion: reduce)"
    }, (context) => {
      const { reduceMotion, isMobile } = context.conditions as { reduceMotion: boolean; isMobile: boolean };

      if (reduceMotion) {
        gsap.set(".feature-card-item, .features-showcase-wrapper", {
          opacity: 1,
          y: 0
        });
        return;
      }

      const cardY = isMobile ? 25 : 50;
      const showcaseY = isMobile ? 30 : 60;

      // 1. Stagger animate the 4 feature cards
      gsap.from(".feature-card-item", {
        scrollTrigger: {
          trigger: ".features-grid",
          start: "top 85%",
        },
        y: cardY,
        opacity: 0,
        stagger: isMobile ? 0.08 : 0.15,
        duration: 0.7,
        ease: "power3.out",
      });

      // 2. Animate the large dashboard showcase
      gsap.from(".features-showcase-wrapper", {
        scrollTrigger: {
          trigger: ".features-showcase-wrapper",
          start: "top 85%",
        },
        y: showcaseY,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => mm.revert();
  }, []);

  return (
    <Section
      id="features"
      variant="surface"
      className="relative overflow-hidden py-24 lg:py-32"
    >
      {/* Background Decorators */}
      <BackgroundGrid />
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 -z-10">
        <GradientBlob color="bg-primary" size="w-[500px] h-[500px]" className="opacity-[0.04]" />
      </div>
      <div className="absolute bottom-1/4 left-1/4 -translate-y-1/2 -z-10">
        <GradientBlob color="bg-[#42D392]" size="w-[450px] h-[450px]" className="opacity-[0.03]" />
      </div>

      <div ref={sectionRef}>
        <Container>
        {/* Header Block */}
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <SectionHeader
            label="Core Modules"
            title="All Business Operations. Connected in One Workspace."
            description="Ditch the fragmented subscription stack. FlowCRM unites your lead management, HR check-in schedules, automated billing, and live performance reports."
          />
        </div>

        {/* 2x2 Feature Cards Grid */}
        <div className="features-grid grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 lg:mb-28">
          
          {/* Module 1: Lead Management */}
          <div className="feature-card-item">
            <FeatureCard
              title="Lead Management"
              description="Capture leads at high velocity, monitor pipeline distributions, and establish automatic checklists to convert prospects."
              icon={<TrendingUp className="size-5" />}
              features={["Lead scoring engine", "Custom stages pipelines", "Follow-up schedule lists"]}
            >
              {/* Mini UI: Pipeline tracker */}
              <div className="mt-4 w-full bg-[#0A0D14]/40 border border-white/5 rounded-dashboard p-4 flex flex-col gap-3">
                <div className="flex justify-between items-center text-[10px] text-muted-foreground uppercase font-semibold font-mono tracking-wider">
                  <span>Lead Pipeline</span>
                  <span className="text-[#42D392]">+18% MoM</span>
                </div>
                <div className="flex gap-2">
                  <div className="flex-1 flex flex-col gap-1">
                    <span className="text-[9px] text-muted-foreground">Inquiry</span>
                    <div className="h-6 w-full bg-[#FF8A1D]/80 rounded border border-[#FF8A1D]/25 flex items-center justify-center text-[9px] font-bold text-white">45</div>
                  </div>
                  <div className="flex-1 flex flex-col gap-1">
                    <span className="text-[9px] text-muted-foreground">Proposal</span>
                    <div className="h-6 w-full bg-[#FF8A1D]/60 rounded border border-[#FF8A1D]/20 flex items-center justify-center text-[9px] font-bold text-white">22</div>
                  </div>
                  <div className="flex-1 flex flex-col gap-1">
                    <span className="text-[9px] text-muted-foreground">Won</span>
                    <div className="h-6 w-full bg-[#FF8A1D]/40 rounded border border-[#FF8A1D]/15 flex items-center justify-center text-[9px] font-bold text-white">12</div>
                  </div>
                </div>
              </div>
            </FeatureCard>
          </div>

          {/* Module 2: HRMS */}
          <div className="feature-card-item">
            <FeatureCard
              title="HRMS Console"
              description="Synchronize team shifts, oversee attendance status rosters, and manage shift checklists inside a single manager terminal."
              icon={<Clock className="size-5" />}
              features={["Shift schedule calendars", "Live shift check-in logs", "Team attendance rosters"]}
            >
              {/* Mini UI: Attendance Widget */}
              <div className="mt-4 w-full bg-[#0A0D14]/40 border border-white/5 rounded-dashboard p-4 flex flex-col gap-2.5">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-muted-foreground uppercase font-semibold font-mono tracking-wider">Active Shift Roster</span>
                  <Badge variant="success" className="text-[8px] h-3 px-1 py-0 font-bold">12 Active</Badge>
                </div>
                <div className="flex items-center justify-between text-[10px] p-1.5 rounded bg-[#0A0D14]/40 border border-white/[0.02]">
                  <div className="flex items-center gap-1.5">
                    <div className="size-5 rounded-full bg-[#5DA8FF]/10 border border-[#5DA8FF]/20 flex items-center justify-center text-[8px] font-bold text-[#5DA8FF]">P</div>
                    <span className="font-medium text-white">Priya Sen</span>
                  </div>
                  <span className="text-[9px] text-[#42D392] font-semibold">9:02 AM</span>
                </div>
                <div className="flex items-center justify-between text-[10px] p-1.5 rounded bg-[#0A0D14]/40 border border-white/[0.02]">
                  <div className="flex items-center gap-1.5">
                    <div className="size-5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-[8px] font-bold text-primary">A</div>
                    <span className="font-medium text-white">Amit S.</span>
                  </div>
                  <span className="text-[9px] text-[#42D392] font-semibold">8:00 AM</span>
                </div>
              </div>
            </FeatureCard>
          </div>

          {/* Module 3: Automated Invoicing */}
          <div className="feature-card-item">
            <FeatureCard
              title="Automated Invoicing"
              description="Deploy professional invoices, automate billing logs, track client payments, and generate monthly tax declarations."
              icon={<FileText className="size-5" />}
              features={["GST tax summaries", "Client auto-reminders", "Outstanding balances tracking"]}
            >
              {/* Mini UI: Invoice Status */}
              <div className="mt-4 w-full bg-[#0A0D14]/40 border border-white/5 rounded-dashboard p-4 flex flex-col gap-2">
                <div className="flex justify-between items-center text-[10px] text-muted-foreground uppercase font-semibold font-mono tracking-wider border-b border-white/5 pb-1.5">
                  <span>Pending Invoices</span>
                  <span className="text-[#FF5C7A] font-bold">5 Overdue</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <div className="flex flex-col">
                    <span className="font-semibold text-white">Invoice #1094</span>
                    <span className="text-[8px] text-muted-foreground">Vertex Group</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-white font-mono font-bold">$3,200</span>
                    <Badge variant="warning" className="text-[8px] h-3.5 px-1 py-0">Pending</Badge>
                  </div>
                </div>
              </div>
            </FeatureCard>
          </div>

          {/* Module 4: Analytics & Reports */}
          <div className="feature-card-item">
            <FeatureCard
              title="Analytics & Reports"
              description="Review operational cashflows, track team conversion rates, and build custom performance graphs with SVG vectors."
              icon={<Activity className="size-5" />}
              features={["Sales trendlines", "Team performance KPIs", "Lead conversion reports"]}
            >
              {/* Mini UI: Custom wave SVG */}
              <div className="mt-4 w-full bg-[#0A0D14]/40 border border-white/5 rounded-dashboard p-4 flex flex-col gap-2.5">
                <div className="flex justify-between items-center text-[10px] text-muted-foreground uppercase font-semibold font-mono tracking-wider">
                  <span>Monthly Analytics</span>
                  <span className="text-primary font-bold">+$48.2k</span>
                </div>
                <div className="h-10 w-full overflow-hidden">
                  <svg className="w-full h-full" viewBox="0 0 200 40" preserveAspectRatio="none">
                    <path
                      d="M 0 30 Q 30 15 60 20 T 120 5 T 170 10 T 200 2"
                      fill="none"
                      stroke="#FF8A1D"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M 0 35 Q 25 25 50 30 T 100 15 T 150 20 T 200 12"
                      fill="none"
                      stroke="#42D392"
                      strokeWidth="1"
                    />
                  </svg>
                </div>
              </div>
            </FeatureCard>
          </div>

        </div>

        {/* Large CRM Dashboard Preview Showcase */}
        <div className="features-showcase-wrapper relative select-none">
          {/* Subtle Ambient Glow behind Showcase */}
          <div className="absolute inset-0 bg-primary/5 rounded-dashboard filter blur-[50px] -z-10" />
          
          <DashboardShowcase />
        </div>

      </Container>
      </div>
    </Section>
  );
}
