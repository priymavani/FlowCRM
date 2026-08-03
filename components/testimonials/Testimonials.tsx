"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import CountUp from "react-countup";
import useEmblaCarousel from "embla-carousel-react";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { SectionHeader } from "@/components/common/SectionHeader";
import { BackgroundGrid, GradientBlob } from "@/components/common/Decorators";
import { TestimonialCard } from "@/components/common/Cards";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function Testimonials() {
  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Embla setup for mobile carousel
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

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
        gsap.set(".featured-story-trigger, .testimonial-grid-item, .success-metrics-trigger, .client-logo-item", {
          opacity: 1,
          y: 0
        });
        setStartCount(true);
        return;
      }

      const featuredY = isMobile ? 20 : 40;
      const gridY = isMobile ? 15 : 35;
      const statsY = isMobile ? 15 : 30;

      // 1. Reveal Featured Story
      gsap.from(".featured-story-trigger", {
        scrollTrigger: {
          trigger: ".featured-story-trigger",
          start: "top 85%",
        },
        y: featuredY,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
      });

      // 2. Stagger reveal Testimonials Grid (Desktop)
      gsap.from(".testimonial-grid-item", {
        scrollTrigger: {
          trigger: ".testimonials-grid-trigger",
          start: "top 85%",
        },
        y: gridY,
        opacity: 0,
        stagger: isMobile ? 0.05 : 0.08,
        duration: 0.5,
        ease: "power2.out",
      });

      // 3. ScrollTrigger to start success metrics CountUp
      gsap.from(".success-metrics-trigger", {
        scrollTrigger: {
          trigger: ".success-metrics-trigger",
          start: "top 85%",
          onEnter: () => setStartCount(true),
        },
        y: statsY,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
      });

      // 4. Stagger reveal monochrome company logos
      gsap.from(".client-logo-item", {
        scrollTrigger: {
          trigger: ".client-logos-trigger",
          start: "top 95%",
        },
        y: isMobile ? 8 : 15,
        opacity: 0,
        stagger: isMobile ? 0.04 : 0.06,
        duration: 0.4,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => mm.revert();
  }, []);

  const [isPlaying, setIsPlaying] = useState(true);

  // Autoplay loop setup for Embla on hover
  useEffect(() => {
    if (!emblaApi || !isPlaying) return;

    const intervalId = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, 3500);

    return () => clearInterval(intervalId);
  }, [emblaApi, isPlaying]);

  const testimonials = [
    {
      name: "Priya Sen",
      designation: "HR Director",
      company: "Zenith Systems",
      review: "Shift clock-ins and payroll reconciliations are completely hands-free now. Our managers save 15+ hours weekly on shift check rosters.",
      rating: 5,
    },
    {
      name: "Rahul Roy",
      designation: "Marketing Lead",
      company: "Apex Group",
      review: "The lead triggers and workflow routing are a game-changer. We captured 5x more inquiries from Facebook ads without adding staff.",
      rating: 5,
    },
    {
      name: "Sneha Gupta",
      designation: "VP of Operations",
      company: "Nova Retail",
      review: "The operations timeline and tasks sync up keep our customer support teams aligned in real time. Resolution times dropped by 45%.",
      rating: 5,
    },
    {
      name: "Aman Sharma",
      designation: "Founder",
      company: "Vertex Web",
      review: "Linking Stripe billing and WhatsApp campaigns took under 5 minutes. The unified console is exactly what we needed.",
      rating: 5,
    },
    {
      name: "Divya Das",
      designation: "Operations Manager",
      company: "Core Logistics",
      review: "Zero-code migration was seamless. We imported 12,000 lead sheets and synced emails in a single afternoon.",
      rating: 5,
    },
    {
      name: "Amit Patel",
      designation: "Head of Operations",
      company: "Global Trade Inc.",
      review: "FlowCRM has transformed how we execute client delivery. Staging tasks and automatic alerts halved our operational delays.",
      rating: 5,
    },
  ];

  const metrics = [
    { value: 50, suffix: "K+", label: "Active Businesses" },
    { value: 3, suffix: "M+", label: "Leads Captured" },
    { value: 98, suffix: "%", label: "Customer Satisfaction" },
    { value: 120, suffix: "+", label: "Countries Reached" },
    { value: 1, suffix: "M+", label: "Invoices Generated" },
    { value: 99.9, suffix: "%", decimals: 1, label: "Platform Uptime" },
  ];

  return (
    <Section
      id="testimonials"
      className="relative overflow-hidden py-24 lg:py-32 bg-[#0A0D14]"
    >
      {/* Background Decorators */}
      <BackgroundGrid />
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 -z-10">
        <GradientBlob color="bg-primary" size="w-[500px] h-[500px]" className="opacity-[0.04]" />
      </div>
      <div className="absolute bottom-1/3 right-1/4 -translate-x-1/2 -translate-y-1/2 -z-10">
        <GradientBlob color="bg-[#42D392]" size="w-[450px] h-[450px]" className="opacity-[0.03]" />
      </div>

      <div ref={sectionRef}>
        <Container>
        {/* Header Block */}
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <SectionHeader
            label="Customer Success"
            title="Helping Businesses Grow Faster. Trusted by Modern Teams."
            description="Read how scaling companies automate pipelines, simplify payroll schedules, and visualizes financial transactions inside FlowCRM."
          />
        </div>

        {/* 1. Large Featured Customer Story */}
        <div className="featured-story-trigger bg-[#161C29] border border-white/5 rounded-dashboard p-6 lg:p-8 flex flex-col lg:flex-row items-center gap-8 mb-20 relative">
          <div className="absolute inset-0 bg-primary/5 filter blur-[30px] rounded-dashboard -z-10" />

          {/* Left copy blocks */}
          <div className="flex-1 flex flex-col gap-5 text-left">
            {/* Fictional Company Branding */}
            <div className="flex items-center gap-2 font-mono text-xs text-primary font-bold">
              <span className="size-6 rounded bg-primary/10 border border-primary/20 flex items-center justify-center">AR</span>
              <span>AURA RETAIL NETWORK</span>
            </div>
            
            <div className="relative">
              <Quote className="absolute -top-3 -left-3 size-8 text-primary/10 -z-10" />
              <p className="text-base lg:text-lg italic text-white leading-relaxed">
                &ldquo;FlowCRM transformed our sales execution. Lead routing automated 90% of our daily calls, 
                allowing our reps to focus purely on negotiations. It converged our entire operations.&rdquo;
              </p>
            </div>

            <div className="flex items-center gap-3.5 border-t border-white/5 pt-4">
              <div className="size-10 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-sm font-bold text-primary font-mono">
                K
              </div>
              <div className="flex flex-col">
                <cite className="not-italic text-xs font-semibold text-heading">Karan Johar</cite>
                <span className="text-[10px] text-muted-foreground">Head of Sales, Aura Retail</span>
              </div>
            </div>
          </div>

          {/* Right Metrics Panel */}
          <div className="w-full lg:w-80 bg-[#0A0D14]/80 border border-white/5 rounded-card p-5 flex flex-col gap-4 shrink-0">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono border-b border-white/5 pb-2">Measurable Aura Impact</h4>
            
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Lead Conversion</span>
                <span className="font-extrabold text-[#42D392] bg-[#42D392]/10 border border-[#42D392]/20 px-2 py-0.5 rounded">+42%</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Manual Copy Work</span>
                <span className="font-extrabold text-[#42D392] bg-[#42D392]/10 border border-[#42D392]/20 px-2 py-0.5 rounded">-60%</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Sales Productivity</span>
                <span className="font-extrabold text-[#42D392] bg-[#42D392]/10 border border-[#42D392]/20 px-2 py-0.5 rounded">2x Increase</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Responsive Grid / Carousel */}
        <div className="mb-20 lg:mb-28">
          
          {/* Desktop Masonry/Grid Layout */}
          <div className="testimonials-grid-trigger hidden md:grid grid-cols-3 gap-6">
            {testimonials.map((test, index) => (
              <div key={index} className="testimonial-grid-item">
                <TestimonialCard
                  name={test.name}
                  designation={test.designation}
                  company={test.company}
                  review={test.review}
                  rating={test.rating}
                />
              </div>
            ))}
          </div>

          {/* Mobile Embla Auto-sliding Carousel */}
          <div
            className="block md:hidden overflow-hidden"
            ref={emblaRef}
            onMouseEnter={() => setIsPlaying(false)}
            onMouseLeave={() => setIsPlaying(true)}
          >
            <div className="flex">
              {testimonials.map((test, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 pr-4">
                  <TestimonialCard
                    name={test.name}
                    designation={test.designation}
                    company={test.company}
                    review={test.review}
                    rating={test.rating}
                  />
                </div>
              ))}
            </div>
            
            {/* Carousel navigation controls */}
            <div className="flex justify-center gap-3 mt-6">
              <button
                onClick={() => emblaApi && emblaApi.scrollPrev()}
                className="size-8 rounded-full border border-white/10 hover:border-white/20 flex items-center justify-center text-white"
                aria-label="Previous slide"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                onClick={() => emblaApi && emblaApi.scrollNext()}
                className="size-8 rounded-full border border-white/10 hover:border-white/20 flex items-center justify-center text-white"
                aria-label="Next slide"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 3. Business Impact Metrics Grid */}
        <div className="success-metrics-trigger grid grid-cols-2 lg:grid-cols-6 gap-5 mb-20 lg:mb-28 text-center">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-[#161C29] border border-white/5 rounded-card p-5 flex flex-col gap-1 shadow-premium"
            >
              <span className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
                {startCount ? (
                  <CountUp
                    end={metric.value}
                    suffix={metric.suffix}
                    decimals={metric.decimals || 0}
                    duration={2}
                  />
                ) : (
                  `0${metric.suffix}`
                )}
              </span>
              <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider mt-1">{metric.label}</span>
            </div>
          ))}
        </div>

        {/* 4. Customer Logos Strip (Monochrome) */}
        <div className="client-logos-trigger border-t border-white/5 pt-12 text-center">
          <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest block mb-8 font-mono">POWERING HIGH-VELOCITY OPERATIONS AT</span>
          
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center justify-center px-4">
            {/* Logo 1: Zenith */}
            <div className="client-logo-item flex justify-center opacity-30 hover:opacity-100 hover:scale-[1.05] transition-all duration-300 select-none text-white font-mono text-sm font-semibold tracking-wider">
              <span>ZENITH</span>
            </div>
            
            {/* Logo 2: Apex */}
            <div className="client-logo-item flex justify-center opacity-30 hover:opacity-100 hover:scale-[1.05] transition-all duration-300 select-none text-white font-mono text-sm font-semibold tracking-wider">
              <span>APEX GROUP</span>
            </div>

            {/* Logo 3: Vertex */}
            <div className="client-logo-item flex justify-center opacity-30 hover:opacity-100 hover:scale-[1.05] transition-all duration-300 select-none text-white font-mono text-sm font-semibold tracking-wider">
              <span>VERTEX WEB</span>
            </div>

            {/* Logo 4: Nova */}
            <div className="client-logo-item flex justify-center opacity-30 hover:opacity-100 hover:scale-[1.05] transition-all duration-300 select-none text-white font-mono text-sm font-semibold tracking-wider">
              <span>NOVA CORP</span>
            </div>

            {/* Logo 5: Core */}
            <div className="client-logo-item flex justify-center opacity-30 hover:opacity-100 hover:scale-[1.05] transition-all duration-300 select-none text-white font-mono text-sm font-semibold tracking-wider">
              <span>CORE LOGISTICS</span>
            </div>

            {/* Logo 6: Aura */}
            <div className="client-logo-item flex justify-center opacity-30 hover:opacity-100 hover:scale-[1.05] transition-all duration-300 select-none text-white font-mono text-sm font-semibold tracking-wider">
              <span>AURA NET</span>
            </div>
          </div>
        </div>

        </Container>
      </div>
    </Section>
  );
}
