"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import CountUp from "react-countup";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { SectionHeader } from "@/components/common/SectionHeader";
import { BackgroundGrid, GradientBlob } from "@/components/common/Decorators";
import { BenefitCard } from "@/components/common/Cards";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Zap,
  Activity,
  Users,
  Maximize,
  Sliders,
  CheckCircle,
  Server,
  Lock,
  ArrowRight,
} from "lucide-react";

export default function Benefits() {
  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Stagger animate benefits cards
      gsap.from(".benefit-card-item", {
        scrollTrigger: {
          trigger: ".benefits-grid-trigger",
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.7,
        ease: "power2.out",
      });

      // 2. ScrollTrigger to start numeric stats count-up
      gsap.from(".stats-grid-trigger", {
        scrollTrigger: {
          trigger: ".stats-grid-trigger",
          start: "top 85%",
          onEnter: () => setStartCount(true),
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });

      // 3. Reveal Security Console
      gsap.from(".security-panel-trigger", {
        scrollTrigger: {
          trigger: ".security-panel-trigger",
          start: "top 85%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });

      // 4. Stagger reveal automation pipeline nodes
      gsap.from(".workflow-step-node", {
        scrollTrigger: {
          trigger: ".workflow-container-trigger",
          start: "top 85%",
        },
        scale: 0.9,
        opacity: 0,
        stagger: 0.08,
        duration: 0.6,
        ease: "back.out(1.5)",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { value: 50, suffix: "K+", label: "Active Businesses" },
    { value: 1, suffix: "M+", label: "Leads Managed" },
    { value: 99.9, suffix: "%", decimals: 1, label: "Operational Uptime" },
    { value: 100, suffix: "+", label: "Workflows Configured" },
    { value: 10, suffix: "+", label: "Lead Integrations" },
    { value: 24, suffix: "/7", label: "Expert Support" },
  ];

  const workflowSteps = [
    { number: "01", title: "Lead Captured", desc: "Facebook/Ad portal syncs" },
    { number: "02", title: "Lead Assigned", desc: "Automatic routing criteria" },
    { number: "03", title: "Sales Follow-up", desc: "Scheduled alert checklist" },
    { number: "04", title: "Invoice Generated", desc: "Auto billing calculations" },
    { number: "05", title: "Converted", desc: "Revenue tracking report" },
    { number: "06", title: "Analytics", desc: "Monthly performance graphs" },
  ];

  return (
    <Section
      id="benefits"
      className="relative overflow-hidden py-24 lg:py-32 bg-[#0A0D14]"
    >
      {/* Background Decorators */}
      <BackgroundGrid />
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 -z-10">
        <GradientBlob color="bg-primary" size="w-[500px] h-[500px]" className="opacity-[0.04]" />
      </div>
      <div className="absolute bottom-1/3 right-1/4 -translate-x-1/2 -translate-y-1/2 -z-10">
        <GradientBlob color="bg-primary" size="w-[450px] h-[450px]" className="opacity-[0.03]" />
      </div>

      <div ref={sectionRef}>
        <Container>
        {/* Header Block */}
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <SectionHeader
            label="Why FlowCRM"
            title="Engineered for Speed. Secure by Design. Built to Scale."
            description="Accelerate your company operations, sync team tasks, and protect client records within a unified workspace built for high-velocity organizations."
          />
        </div>

        {/* 1. Interactive 3x2 Benefits Grid */}
        <div className="benefits-grid-trigger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 lg:mb-28">
          
          {/* Card 1: Automation */}
          <div className="benefit-card-item">
            <BenefitCard
              title="Autonomous Workflows"
              description="Eliminate mechanical data copy. Automatically route incoming portal leads and schedule alert actions."
              icon={<Zap className="size-5" />}
            >
              {/* Mini visual: Node flow */}
              <div className="bg-[#0A0D14]/40 border border-white/5 rounded-lg p-3.5 flex items-center justify-between text-[10px]">
                <span className="text-muted-foreground">FB Form Lead</span>
                <span className="text-primary font-bold">→</span>
                <Badge variant="success" className="text-[8px] h-4">Auto-Route Rep</Badge>
                <span className="text-primary font-bold">→</span>
                <span className="text-white font-mono">Alert Sent</span>
              </div>
            </BenefitCard>
          </div>

          {/* Card 2: Security */}
          <div className="benefit-card-item">
            <BenefitCard
              title="Compliant Security"
              description="Protect customer database records with multi-layered secure endpoints, access privileges, and automated backups."
              icon={<Shield className="size-5" />}
            >
              {/* Mini visual: Padlock check */}
              <div className="bg-[#0A0D14]/40 border border-white/5 rounded-lg p-3 flex items-center gap-3">
                <div className="size-7 rounded bg-[#42D392]/10 border border-[#42D392]/20 flex items-center justify-center text-[#42D392]">
                  <Lock className="size-3.5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-white font-semibold leading-none">AES-256 SSL Active</span>
                  <span className="text-[8px] text-muted-foreground mt-1 leading-none">Cloud database isolated</span>
                </div>
              </div>
            </BenefitCard>
          </div>

          {/* Card 3: Analytics */}
          <div className="benefit-card-item">
            <BenefitCard
              title="Granular Analytics"
              description="Monitor performance indexes, monthly operations billing, and deal close metrics on custom SVG diagrams."
              icon={<Activity className="size-5" />}
            >
              {/* Mini visual: Small chart */}
              <div className="bg-[#0A0D14]/40 border border-white/5 rounded-lg p-3 flex flex-col gap-1">
                <div className="flex justify-between text-[8px] text-muted-foreground font-mono">
                  <span>SALES RUN RATE</span>
                  <span className="text-[#42D392]">+14%</span>
                </div>
                <div className="h-6 overflow-hidden">
                  <svg className="w-full h-full" viewBox="0 0 180 30" preserveAspectRatio="none">
                    <path d="M 0 25 Q 40 10 80 18 T 140 5 T 180 2" fill="none" stroke="#FF8A1D" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
            </BenefitCard>
          </div>

          {/* Card 4: Collaboration */}
          <div className="benefit-card-item">
            <BenefitCard
              title="Instant Collaboration"
              description="Assign tasks, share pipeline milestones, leave checklist descriptions, and log shift operations in one stream."
              icon={<Users className="size-5" />}
            >
              {/* Mini visual: Avatar overlap */}
              <div className="bg-[#0A0D14]/40 border border-white/5 rounded-lg p-3.5 flex items-center justify-between text-[10px]">
                <div className="flex -space-x-2">
                  <div className="size-5.5 rounded-full bg-primary/20 border border-[#0A0D14] flex items-center justify-center font-bold text-[8px] text-primary">K</div>
                  <div className="size-5.5 rounded-full bg-[#5DA8FF]/20 border border-[#0A0D14] flex items-center justify-center font-bold text-[8px] text-[#5DA8FF]">P</div>
                  <div className="size-5.5 rounded-full bg-[#42D392]/20 border border-[#0A0D14] flex items-center justify-center font-bold text-[8px] text-[#42D392]">A</div>
                </div>
                <span className="text-muted-foreground text-[9px]">3 members editing A-Shift task</span>
              </div>
            </BenefitCard>
          </div>

          {/* Card 5: Scalability */}
          <div className="benefit-card-item">
            <BenefitCard
              title="Flexible Capacity"
              description="Scale capacities seamlessly. Adapt tools from growing startups to multi-branch enterprises without setup rewrites."
              icon={<Maximize className="size-5" />}
            >
              {/* Mini visual: Scale bar graph */}
              <div className="bg-[#0A0D14]/40 border border-white/5 rounded-lg p-3 flex flex-col gap-1.5">
                <div className="flex justify-between items-center text-[8px] text-muted-foreground font-mono">
                  <span>WORKSPACE NODE LIMITS</span>
                  <span>UNLIMITED</span>
                </div>
                <div className="flex gap-1 items-end h-5">
                  <div className="h-[30%] w-full bg-[#FF8A1D]/40 rounded-sm" />
                  <div className="h-[60%] w-full bg-[#FF8A1D]/60 rounded-sm" />
                  <div className="h-[100%] w-full bg-[#FF8A1D] rounded-sm animate-pulse" />
                </div>
              </div>
            </BenefitCard>
          </div>

          {/* Card 6: Easy Setup */}
          <div className="benefit-card-item">
            <BenefitCard
              title="Rapid Migration"
              description="Import data formats instantly, link lead channels, and invite manager staff to begin operations inside minutes."
              icon={<Sliders className="size-5" />}
            >
              {/* Mini visual: Step indicators */}
              <div className="bg-[#0A0D14]/40 border border-white/5 rounded-lg p-3 flex items-center justify-between text-[9px] font-mono text-muted-foreground">
                <span className="text-primary">1. Sync Sheets ✓</span>
                <span>2. Map CRM</span>
                <span className="text-[#42D392]">3. Live</span>
              </div>
            </BenefitCard>
          </div>

        </div>

        {/* 2. Interactive Statistics Grid */}
        <div className="stats-grid-trigger grid grid-cols-2 lg:grid-cols-6 gap-5 mb-20 lg:mb-28 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-[#161C29] border border-white/5 rounded-card p-5 flex flex-col gap-1 shadow-premium hover:border-white/10 transition-colors duration-200"
            >
              <span className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
                {startCount ? (
                  <CountUp
                    end={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals || 0}
                    duration={2}
                  />
                ) : (
                  `0${stat.suffix}`
                )}
              </span>
              <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider mt-1">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* 3. Security & Reliability Control Panel */}
        <div className="security-panel-trigger bg-[#161C29] border border-white/5 rounded-dashboard p-6 lg:p-8 flex flex-col lg:flex-row items-center gap-8 mb-20 lg:mb-28 relative">
          {/* Subtle Ambient lighting behind security card */}
          <div className="absolute inset-0 bg-primary/5 filter blur-[30px] rounded-dashboard -z-10" />

          {/* Left copy block */}
          <div className="flex-1 flex flex-col gap-4 text-left">
            <div className="size-10 rounded-button bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
              <Shield className="size-5" />
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">Enterprise Infrastructure & Compliance Console</h3>
            <p className="text-sm text-body-premium">
              Protect your business core. Our compliance console enables automated hourly audit backups, SSL AES keys, 
              and fine-grained role credentials (RBAC) to defend records from leakage.
            </p>
          </div>

          {/* Right security widget controls list */}
          <div className="w-full lg:w-96 bg-[#0A0D14]/80 border border-white/5 rounded-card p-5 flex flex-col gap-3 shrink-0">
            <div className="flex justify-between items-center text-xs border-b border-white/5 pb-2.5">
              <span className="font-semibold text-white font-mono flex items-center gap-1.5">
                <Server className="size-3.5 text-primary" /> compliance-security-check
              </span>
              <Badge variant="success" className="text-[8px] h-4">Certified GDPR</Badge>
            </div>
            
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center justify-between text-xs p-2 rounded bg-[#161C29]/40 border border-white/[0.02]">
                <span className="text-white font-medium flex items-center gap-2"><CheckCircle className="size-3.5 text-[#42D392]" /> SSL AES-256 Encryption</span>
                <span className="text-[9px] text-[#42D392] font-mono">ACTIVE</span>
              </div>
              <div className="flex items-center justify-between text-xs p-2 rounded bg-[#161C29]/40 border border-white/[0.02]">
                <span className="text-white font-medium flex items-center gap-2"><CheckCircle className="size-3.5 text-[#42D392]" /> Real-time Audit logs</span>
                <span className="text-[9px] text-[#42D392] font-mono">STREAMING</span>
              </div>
              <div className="flex items-center justify-between text-xs p-2 rounded bg-[#161C29]/40 border border-white/[0.02]">
                <span className="text-white font-medium flex items-center gap-2"><CheckCircle className="size-3.5 text-[#42D392]" /> Daily Auto Backup</span>
                <span className="text-[9px] text-[#42D392] font-mono">100% OK</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Automation Workflow Preview */}
        <div className="workflow-container-trigger text-center">
          <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto mb-10">
            <Badge variant="outline" className="text-[9px] font-semibold text-primary border-primary/20 bg-primary/5 uppercase tracking-widest px-3 py-0.5 rounded-full mb-3">Workflow Pathway</Badge>
            <h3 className="text-2xl font-bold text-white tracking-tight">Synchronized Lead Conversion Pipeline</h3>
            <p className="text-xs text-muted-foreground mt-2">Observe how FlowCRM auto-routes incoming inquiries to converted contracts within seconds.</p>
          </div>

          {/* Staggered Pathway Nodes Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 items-center justify-center relative">
            {workflowSteps.map((step, idx) => (
              <div key={idx} className="workflow-step-node flex flex-col items-center relative">
                {/* Node Box */}
                <div className="w-full bg-[#161C29] border border-white/5 rounded-card p-4 flex flex-col gap-1.5 text-center shadow-premium group hover:border-primary/20 transition-all duration-200">
                  <span className="text-[10px] font-bold text-primary font-mono">{step.number}</span>
                  <span className="text-xs font-bold text-white group-hover:text-primary transition-colors duration-200">{step.title}</span>
                  <span className="text-[9px] text-muted-foreground leading-tight mt-0.5">{step.desc}</span>
                </div>
                {/* Pathway Connective arrow indicator on desktop */}
                {idx < 5 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 text-white/10 select-none pointer-events-none">
                    <ArrowRight className="size-3.5" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* 5. Trust Badges underneath */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-12 border-t border-white/5 pt-8">
            <span className="text-xs text-muted-foreground mr-2 font-mono">COMPLIANCE SYNC:</span>
            <Badge variant="outline" className="text-[9px] font-semibold text-muted-foreground border-white/10 hover:border-white/20 transition-all duration-200 px-3 py-1 cursor-pointer">Enterprise Ready</Badge>
            <Badge variant="outline" className="text-[9px] font-semibold text-muted-foreground border-white/10 hover:border-white/20 transition-all duration-200 px-3 py-1 cursor-pointer">SSL Secure</Badge>
            <Badge variant="outline" className="text-[9px] font-semibold text-muted-foreground border-white/10 hover:border-white/20 transition-all duration-200 px-3 py-1 cursor-pointer">Cloud Hosted</Badge>
            <Badge variant="outline" className="text-[9px] font-semibold text-muted-foreground border-white/10 hover:border-white/20 transition-all duration-200 px-3 py-1 cursor-pointer">Scalable System</Badge>
            <Badge variant="outline" className="text-[9px] font-semibold text-muted-foreground border-white/10 hover:border-white/20 transition-all duration-200 px-3 py-1 cursor-pointer">Fast Support</Badge>
          </div>
        </div>

      </Container>
      </div>
    </Section>
  );
}
