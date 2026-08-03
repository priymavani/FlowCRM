"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { motion } from "framer-motion";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BackgroundGrid, GradientBlob } from "@/components/common/Decorators";
import {
  TrendingUp,
  ArrowRight,
  Play,
  CheckCircle,
  MessageSquare,
  Sparkles,
} from "lucide-react";

export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Reveal the CTA Banner content on scroll
      gsap.from(".cta-content-reveal", {
        scrollTrigger: {
          trigger: ".cta-container-trigger",
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
      });

      // Reveal the mockup widget layout
      gsap.from(".cta-widget-reveal", {
        scrollTrigger: {
          trigger: ".cta-container-trigger",
          start: "top 80%",
        },
        scale: 0.95,
        opacity: 0,
        duration: 0.9,
        ease: "power2.out",
        delay: 0.2,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section id="cta" className="relative overflow-hidden py-24 lg:py-32 bg-[#0A0D14] border-t border-white/5">
      <BackgroundGrid />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
        <GradientBlob color="bg-primary" size="w-[600px] h-[600px]" className="opacity-[0.06] blur-[120px]" />
      </div>

      <div ref={sectionRef} className="cta-container-trigger relative z-10">
        <Container>
          <div className="bg-[#161C29]/40 border border-white/5 rounded-cta p-8 md:p-12 lg:p-16 shadow-premium overflow-hidden relative">
            {/* Glossy inner glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.01] to-transparent pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Copy Panel (7 Columns) */}
              <div className="lg:col-span-7 flex flex-col items-start text-left gap-6">
                <Badge variant="outline" className="cta-content-reveal text-[9px] font-bold text-primary border-primary/20 bg-primary/5 uppercase tracking-widest px-3 py-0.5 rounded-full flex items-center gap-1.5">
                  <Sparkles className="size-3" /> Elevate Operations
                </Badge>
                
                <h2 className="cta-content-reveal text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                  Ready to unify your company workflows?
                </h2>
                
                <p className="cta-content-reveal text-sm md:text-base text-muted-foreground leading-relaxed max-w-xl">
                  Join hundreds of high-growth businesses simplifying their lead pipelines, staff rosters, and accounts billing in a single command workspace. Get started today.
                </p>

                <div className="cta-content-reveal flex flex-wrap gap-4 w-full sm:w-auto mt-2">
                  <Button
                    variant="default"
                    size="lg"
                    className="w-full sm:w-auto"
                    onClick={() => {
                      const contactSection = document.getElementById("contact");
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    Request Free Demo <ArrowRight className="size-4 ml-1" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto hover:bg-white/5 border-white/10"
                  >
                    Watch Product Tour <Play className="size-4 fill-white/10" />
                  </Button>
                </div>
              </div>

              {/* Graphic Mockup Panel (5 Columns) */}
              <div className="lg:col-span-5 relative w-full flex justify-center items-center h-[320px] lg:h-[350px] cta-widget-reveal">
                
                {/* 1. Primary Weekly Revenue Card */}
                <div className="w-[260px] bg-[#1A2030] border border-white/5 rounded-dashboard p-5 shadow-premium absolute left-[5%] top-[10%] z-20 hover:scale-[1.02] transition-transform duration-300 pointer-events-auto">
                  <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-3">
                    <div className="flex items-center gap-2">
                      <div className="size-7 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center text-primary">
                        <TrendingUp className="size-4" />
                      </div>
                      <span className="text-[11px] font-bold text-white uppercase tracking-wider font-mono">Weekly Conversion</span>
                    </div>
                    <Badge variant="success" className="text-[8px] h-4 font-bold px-1.5">
                      +14.8%
                    </Badge>
                  </div>

                  {/* SVG Drawing Line Chart */}
                  <div className="h-20 w-full relative mb-3">
                    <svg className="size-full overflow-visible" viewBox="0 0 100 50">
                      {/* Grid background lines */}
                      <line x1="0" y1="10" x2="100" y2="10" stroke="rgba(255,255,255,0.02)" strokeWidth="0.5" />
                      <line x1="0" y1="25" x2="100" y2="25" stroke="rgba(255,255,255,0.02)" strokeWidth="0.5" />
                      <line x1="0" y1="40" x2="100" y2="40" stroke="rgba(255,255,255,0.02)" strokeWidth="0.5" />

                      {/* Area gradient under path */}
                      <defs>
                        <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#FF8A1D" stopOpacity="0.25" />
                          <stop offset="100%" stopColor="#FF8A1D" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      <path d="M 0 45 L 0 35 Q 20 20, 35 30 T 70 15 T 100 5 L 100 45 Z" fill="url(#chartGlow)" />

                      {/* Line vector */}
                      <motion.path
                        d="M 0 35 Q 20 20, 35 30 T 70 15 T 100 5"
                        fill="none"
                        stroke="#FF8A1D"
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.8, ease: "easeInOut", delay: 0.4 }}
                      />
                      
                      {/* Glowing pointer circle */}
                      <circle cx="100" cy="5" r="3" fill="#FFC857" className="animate-pulse" />
                    </svg>
                  </div>

                  <div className="flex justify-between items-center text-[10px] text-muted-foreground font-mono">
                    <span>Active: 8,420 leads</span>
                    <span className="text-white font-bold">$148,250.00</span>
                  </div>
                </div>

                {/* 2. Floating Notification Badge 1 (IndiaMART Lead) */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute right-[5%] top-[5%] bg-[#1D2435]/95 border border-white/5 rounded-card p-3 shadow-premium flex items-center gap-2.5 z-30 w-[200px]"
                >
                  <div className="size-6 rounded-full bg-[#FF8A1D]/10 border border-[#FF8A1D]/20 flex items-center justify-center text-[#FF8A1D] shrink-0">
                    <CheckCircle className="size-3.5" />
                  </div>
                  <div className="flex flex-col gap-0.5 min-w-0">
                    <span className="text-[10px] font-bold text-white truncate leading-none">WhatsApp Ingested</span>
                    <span className="text-[8px] text-muted-foreground truncate leading-none mt-0.5">Rohan Verma (Score: 94)</span>
                  </div>
                </motion.div>

                {/* 3. Floating Notification Badge 2 (Invoice Logged) */}
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute right-[12%] bottom-[12%] bg-[#1D2435]/95 border border-white/5 rounded-card p-3 shadow-premium flex items-center gap-2.5 z-30 w-[200px]"
                >
                  <div className="size-6 rounded-full bg-[#42D392]/10 border border-[#42D392]/20 flex items-center justify-center text-[#42D392] shrink-0">
                    <MessageSquare className="size-3.5" />
                  </div>
                  <div className="flex flex-col gap-0.5 min-w-0">
                    <span className="text-[10px] font-bold text-white truncate leading-none">Invoice Logged</span>
                    <span className="text-[8px] text-muted-foreground truncate leading-none mt-0.5">+$12,500.00 via Stripe</span>
                  </div>
                </motion.div>

                {/* 4. Symmetrical backdrop ring */}
                <div className="absolute size-64 border border-white/5 rounded-full -z-10 animate-spin" style={{ animationDuration: "35s" }} />

              </div>
            </div>
          </div>
        </Container>
      </div>
    </Section>
  );
}
