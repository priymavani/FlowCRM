"use client";

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { gsap } from "@/lib/gsap";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BackgroundGrid, GradientBlob } from "@/components/common/Decorators";
import FAQAccordion from "./FAQAccordion";
import {
  Mail,
  Phone,
  Clock,
  MapPin,
  Calendar,
  CheckCircle,
  Loader2,
  Lock,
} from "lucide-react";

// Custom Zod schema for validation
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  companyName: z.string().min(2, "Company name must be at least 2 characters."),
  businessEmail: z.string().email("Please enter a valid business email address."),
  phoneNumber: z.string().regex(/^[+]?[0-9\s-]{10,20}$/, "Please enter a valid phone number (min 10 digits)."),
  companySize: z.string().min(1, "Please select your company size."),
  crmUsage: z.string().min(1, "Please select your primary CRM goal."),
  message: z.string().min(10, "Message must be at least 10 characters."),
  preferredDate: z.string().optional(),
  preferredTime: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

// Custom inline Zod resolver for React Hook Form to avoid importing external packages
const zodResolver = (schema: typeof contactSchema) => async (values: ContactFormValues) => {
  const result = schema.safeParse(values);
  if (result.success) {
    return { values: result.data, errors: {} };
  }
  const errors = result.error.issues.reduce((acc: Record<string, { type: string; message: string }>, issue) => {
    const fieldName = issue.path[0] as string;
    acc[fieldName] = {
      type: issue.code,
      message: issue.message,
    };
    return acc;
  }, {} as Record<string, { type: string; message: string }>);
  return { values: {}, errors };
};

export default function ContactSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState<Partial<ContactFormValues>>({});

  const sectionRef = useRef<HTMLDivElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      companyName: "",
      businessEmail: "",
      phoneNumber: "",
      companySize: "",
      crmUsage: "",
      message: "",
      preferredDate: "",
      preferredTime: "",
    },
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
        gsap.set(".contact-info-reveal, .contact-form-reveal", {
          opacity: 1,
          x: 0
        });
        return;
      }

      const xOffset = isMobile ? 15 : 40;

      // 1. Reveal Info Panel content on scroll
      gsap.from(".contact-info-reveal", {
        scrollTrigger: {
          trigger: ".contact-grid-trigger",
          start: "top 85%",
        },
        x: -xOffset,
        opacity: 0,
        stagger: isMobile ? 0.06 : 0.1,
        duration: 0.7,
        ease: "power2.out",
      });

      // 2. Reveal Form Card panel on scroll
      gsap.from(".contact-form-reveal", {
        scrollTrigger: {
          trigger: ".contact-grid-trigger",
          start: "top 85%",
        },
        x: xOffset,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => mm.revert();
  }, []);

  const onSubmit = async (data: ContactFormValues) => {
    setIsLoading(true);
    // Simulate submission latency
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    setIsSuccess(true);
    setSubmittedData(data);
    
    // Fire rich Sonner toast
    toast.success("Demo Request Submitted!", {
      description: "Check your business email for the confirmation link.",
      duration: 5000,
    });
  };

  const trustBadges = [
    "Free Product Demo",
    "No Credit Card Required",
    "24-Hour Response SLA",
    "Enterprise Support SLA",
  ];

  return (
    <Section id="contact" className="relative overflow-hidden py-24 lg:py-32 bg-[#0A0D14] border-t border-white/5">
      <BackgroundGrid />
      <div className="absolute top-1/4 right-1/4 -translate-y-1/2 -z-10">
        <GradientBlob color="bg-primary" size="w-[550px] h-[550px]" className="opacity-[0.04]" />
      </div>

      <div ref={sectionRef} className="relative z-10">
        <Container>
          {/* Header Block */}
          <SectionHeader
            label="Booking Portal"
            title="Book a Live CRM Walkthrough"
            description="Complete the consultation form below to schedule a direct system walkthrough with a workflow specialist."
          />

          <div className="contact-grid-trigger grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Contact Information (5 Columns) */}
            <div className="lg:col-span-5 flex flex-col gap-8 text-left">
              
              <div className="contact-info-reveal flex flex-col gap-3">
                <h3 className="text-xl font-bold text-white tracking-tight">Direct Consultation</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Have custom module requirements or integration requests? Connect directly with our design and development advisors.
                </p>
              </div>

              {/* Contact Cards List */}
              <div className="flex flex-col gap-4">
                
                {/* Email Support */}
                <div className="contact-info-reveal flex items-start gap-4 p-4 bg-[#161C29]/40 border border-white/5 rounded-xl hover:border-white/10 transition-colors duration-200">
                  <div className="size-9 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center text-primary shrink-0">
                    <Mail className="size-4.5" />
                  </div>
                  <div className="flex flex-col gap-0.5 min-w-0">
                    <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-mono">Mail Queries</span>
                    <a href="mailto:sales@flowcrm.com" className="text-xs font-semibold text-white hover:text-primary transition-colors truncate">sales@flowcrm.com</a>
                    <a href="mailto:support@flowcrm.com" className="text-[10px] text-muted-foreground hover:text-primary transition-colors truncate">support@flowcrm.com</a>
                  </div>
                </div>

                {/* Direct Line */}
                <div className="contact-info-reveal flex items-start gap-4 p-4 bg-[#161C29]/40 border border-white/5 rounded-xl hover:border-white/10 transition-colors duration-200">
                  <div className="size-9 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center text-primary shrink-0">
                    <Phone className="size-4.5" />
                  </div>
                  <div className="flex flex-col gap-0.5 min-w-0">
                    <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-mono">Direct Dial</span>
                    <a href="tel:+18005553569" className="text-xs font-semibold text-white hover:text-primary transition-colors truncate">+1 (800) 555-FLOW</a>
                    <span className="text-[10px] text-muted-foreground leading-none mt-0.5">Toll-free across North America</span>
                  </div>
                </div>

                {/* Office Location */}
                <div className="contact-info-reveal flex items-start gap-4 p-4 bg-[#161C29]/40 border border-white/5 rounded-xl hover:border-white/10 transition-colors duration-200">
                  <div className="size-9 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center text-primary shrink-0">
                    <MapPin className="size-4.5" />
                  </div>
                  <div className="flex flex-col gap-0.5 min-w-0">
                    <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-mono">Headquarters</span>
                    <span className="text-xs font-semibold text-white leading-normal">100 Pine Street, Suite 2400</span>
                    <span className="text-[10px] text-muted-foreground leading-normal">San Francisco, CA 94111</span>
                  </div>
                </div>

                {/* Availability info */}
                <div className="contact-info-reveal flex items-start gap-4 p-4 bg-[#161C29]/40 border border-white/5 rounded-xl hover:border-white/10 transition-colors duration-200">
                  <div className="size-9 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center text-primary shrink-0">
                    <Clock className="size-4.5" />
                  </div>
                  <div className="flex flex-col gap-0.5 min-w-0">
                    <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-mono">Business hours & SLAs</span>
                    <span className="text-xs font-semibold text-white">Mon – Fri, 9:00 AM – 6:00 PM EST</span>
                    <span className="text-[10px] text-[#42D392] flex items-center gap-1 font-bold mt-1 uppercase tracking-wider">
                      <span className="size-1 bg-[#42D392] rounded-full animate-pulse" /> Guaranteed response under 24 hours
                    </span>
                  </div>
                </div>

              </div>

              {/* Private Security Message */}
              <div className="contact-info-reveal bg-white/[0.01] border border-white/5 rounded-xl p-4 flex items-start gap-3 mt-1">
                <Lock className="size-4.5 text-muted-foreground shrink-0 mt-0.5" />
                <p className="text-[10px]/relaxed text-muted-foreground">
                  Your credentials and corporate staging details are protected. Staging sync pipelines operate over SOC2-compliant host servers using end-to-end TLS 1.3 encryption.
                </p>
              </div>

            </div>

            {/* Right Column: Book Demo Form Card (7 Columns) */}
            <div className="lg:col-span-7 contact-form-reveal w-full">
              <div className="bg-[#161C29]/30 border border-white/5 rounded-card p-6 md:p-8 shadow-premium relative min-h-[460px]">
                
                {isSuccess ? (
                  /* Success State Overlay */
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center p-4 md:p-8 min-h-[420px] gap-5"
                  >
                    <div className="size-16 bg-[#42D392]/10 border border-[#42D392]/20 text-[#42D392] rounded-full flex items-center justify-center shadow-[0_0_25px_rgba(66,211,146,0.15)]">
                      <CheckCircle className="size-8" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-xl font-bold text-white tracking-tight">Demo Slot Requested!</h3>
                      <p className="text-xs text-muted-foreground max-w-sm leading-relaxed mx-auto">
                        Thank you, <span className="text-white font-semibold">{submittedData.name}</span>. Your system consultation for <span className="text-white font-semibold">{submittedData.companyName}</span> has been logged.
                      </p>
                    </div>
                    
                    <div className="bg-[#0A0D14] border border-white/5 rounded-lg px-4 py-3.5 text-left text-[11px] font-mono text-muted-foreground max-w-sm w-full flex flex-col gap-1.5">
                      <div><span className="text-primary">EMAIL:</span> {submittedData.businessEmail}</div>
                      <div><span className="text-primary">CRM GOAL:</span> {submittedData.crmUsage}</div>
                      {submittedData.preferredDate && (
                        <div><span className="text-primary">SCHEDULED:</span> {submittedData.preferredDate} ({submittedData.preferredTime || "morning"})</div>
                      )}
                    </div>

                    <Button
                      variant="outline"
                      onClick={() => {
                        setIsSuccess(false);
                        reset();
                      }}
                      className="mt-2 hover:bg-white/5 border-white/10"
                    >
                      Request Another Slot
                    </Button>
                  </motion.div>
                ) : (
                  /* Standard Consultation Form */
                  <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                    
                    <div className="flex flex-col gap-1 mb-2">
                      <h3 className="text-lg font-bold text-white">Staging Details</h3>
                      <p className="text-xs text-muted-foreground">Submit your parameters to prepare a custom staging sandbox.</p>
                    </div>

                    {/* Row 1: Name and Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      {/* Name */}
                      <div className="relative w-full group/input pt-2 flex flex-col items-start">
                        <Input
                          id="name"
                          type="text"
                          placeholder=" "
                          className="peer h-11 w-full bg-[#0A0D14]/50 border-white/5 focus-visible:border-primary/50 focus-visible:ring-4 focus-visible:ring-primary/10 focus-visible:ring-offset-0 transition-all duration-300 placeholder:opacity-0"
                          {...register("name")}
                          aria-invalid={!!errors.name}
                        />
                        <label
                          htmlFor="name"
                          className="absolute left-3 top-[17px] text-[10px] text-muted-foreground font-mono uppercase tracking-wider transition-all duration-300 origin-[0] pointer-events-none peer-focus:text-primary peer-focus:-translate-y-6 peer-focus:scale-75 peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-75"
                        >
                          Your Name
                        </label>
                        {errors.name && (
                          <span className="text-[10px] text-destructive font-medium mt-0.5">{errors.name.message}</span>
                        )}
                      </div>

                      {/* Company Name */}
                      <div className="relative w-full group/input pt-2 flex flex-col items-start">
                        <Input
                          id="companyName"
                          type="text"
                          placeholder=" "
                          className="peer h-11 w-full bg-[#0A0D14]/50 border-white/5 focus-visible:border-primary/50 focus-visible:ring-4 focus-visible:ring-primary/10 focus-visible:ring-offset-0 transition-all duration-300 placeholder:opacity-0"
                          {...register("companyName")}
                          aria-invalid={!!errors.companyName}
                        />
                        <label
                          htmlFor="companyName"
                          className="absolute left-3 top-[17px] text-[10px] text-muted-foreground font-mono uppercase tracking-wider transition-all duration-300 origin-[0] pointer-events-none peer-focus:text-primary peer-focus:-translate-y-6 peer-focus:scale-75 peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-75"
                        >
                          Company Name
                        </label>
                        {errors.companyName && (
                          <span className="text-[10px] text-destructive font-medium mt-0.5">{errors.companyName.message}</span>
                        )}
                      </div>

                    </div>

                    {/* Row 2: Email and Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      {/* Email */}
                      <div className="relative w-full group/input pt-2 flex flex-col items-start">
                        <Input
                          id="businessEmail"
                          type="email"
                          placeholder=" "
                          className="peer h-11 w-full bg-[#0A0D14]/50 border-white/5 focus-visible:border-primary/50 focus-visible:ring-4 focus-visible:ring-primary/10 focus-visible:ring-offset-0 transition-all duration-300 placeholder:opacity-0"
                          {...register("businessEmail")}
                          aria-invalid={!!errors.businessEmail}
                        />
                        <label
                          htmlFor="businessEmail"
                          className="absolute left-3 top-[17px] text-[10px] text-muted-foreground font-mono uppercase tracking-wider transition-all duration-300 origin-[0] pointer-events-none peer-focus:text-primary peer-focus:-translate-y-6 peer-focus:scale-75 peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-75"
                        >
                          Business Email
                        </label>
                        {errors.businessEmail && (
                          <span className="text-[10px] text-destructive font-medium mt-0.5">{errors.businessEmail.message}</span>
                        )}
                      </div>

                      {/* Phone */}
                      <div className="relative w-full group/input pt-2 flex flex-col items-start">
                        <Input
                          id="phoneNumber"
                          type="text"
                          placeholder=" "
                          className="peer h-11 w-full bg-[#0A0D14]/50 border-white/5 focus-visible:border-primary/50 focus-visible:ring-4 focus-visible:ring-primary/10 focus-visible:ring-offset-0 transition-all duration-300 placeholder:opacity-0"
                          {...register("phoneNumber")}
                          aria-invalid={!!errors.phoneNumber}
                        />
                        <label
                          htmlFor="phoneNumber"
                          className="absolute left-3 top-[17px] text-[10px] text-muted-foreground font-mono uppercase tracking-wider transition-all duration-300 origin-[0] pointer-events-none peer-focus:text-primary peer-focus:-translate-y-6 peer-focus:scale-75 peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-75"
                        >
                          Phone Number
                        </label>
                        {errors.phoneNumber && (
                          <span className="text-[10px] text-destructive font-medium mt-0.5">{errors.phoneNumber.message}</span>
                        )}
                      </div>

                    </div>

                    {/* Row 3: Company Size and CRM Usage Dropdowns */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      {/* Company Size */}
                      <div className="flex flex-col items-start gap-1.5 w-full">
                        <label htmlFor="companySize" className="text-[11px] font-semibold text-white/80 font-mono uppercase tracking-wider">Company Size</label>
                        <select
                          id="companySize"
                          className="h-11 w-full min-w-0 rounded-lg border border-white/5 bg-[#0A0D14]/50 px-3 py-1 text-xs text-white transition-all duration-300 outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/10 appearance-none cursor-pointer"
                          {...register("companySize")}
                          aria-invalid={!!errors.companySize}
                        >
                          <option value="" className="bg-[#1A2030] text-muted-foreground">Select team size...</option>
                          <option value="1-10" className="bg-[#1A2030]">1 - 10 employees</option>
                          <option value="11-50" className="bg-[#1A2030]">11 - 50 employees</option>
                          <option value="51-200" className="bg-[#1A2030]">51 - 200 employees</option>
                          <option value="201+" className="bg-[#1A2030]">201+ employees</option>
                        </select>
                        {errors.companySize && (
                          <span className="text-[10px] text-destructive font-medium mt-0.5">{errors.companySize.message}</span>
                        )}
                      </div>

                      {/* CRM Goal */}
                      <div className="flex flex-col items-start gap-1.5 w-full">
                        <label htmlFor="crmUsage" className="text-[11px] font-semibold text-white/80 font-mono uppercase tracking-wider">Primary CRM Goal</label>
                        <select
                          id="crmUsage"
                          className="h-11 w-full min-w-0 rounded-lg border border-white/5 bg-[#0A0D14]/50 px-3 py-1 text-xs text-white transition-all duration-300 outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/10 appearance-none cursor-pointer"
                          {...register("crmUsage")}
                          aria-invalid={!!errors.crmUsage}
                        >
                          <option value="" className="bg-[#1A2030] text-muted-foreground">Select primary module...</option>
                          <option value="Sales Pipelines" className="bg-[#1A2030]">Manage sales pipelines</option>
                          <option value="HR & Attendance" className="bg-[#1A2030]">Track HR & attendance</option>
                          <option value="Auto Invoicing" className="bg-[#1A2030]">Automate business invoicing</option>
                          <option value="Omnichannel Integrations" className="bg-[#1A2030]">Connect lead channels</option>
                          <option value="Multi-module Workflows" className="bg-[#1A2030]">Other / Multi-module workflows</option>
                        </select>
                        {errors.crmUsage && (
                          <span className="text-[10px] text-destructive font-medium mt-0.5">{errors.crmUsage.message}</span>
                        )}
                      </div>

                    </div>

                    {/* Row 4: Preferred Date and Time Slot (Optional) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      {/* Date */}
                      <div className="flex flex-col items-start gap-1.5 w-full">
                        <label htmlFor="preferredDate" className="text-[11px] font-semibold text-white/80 font-mono uppercase tracking-wider flex items-center gap-1">
                          <Calendar className="size-3 text-primary" /> Date Slot <span className="text-[9px] text-muted-foreground lowercase font-normal">(optional)</span>
                        </label>
                        <input
                          id="preferredDate"
                          type="date"
                          className="h-11 w-full min-w-0 rounded-lg border border-white/5 bg-[#0A0D14]/50 px-3.5 py-1 text-xs text-white transition-all duration-300 outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/10 cursor-pointer"
                          {...register("preferredDate")}
                        />
                      </div>

                      {/* Time */}
                      <div className="flex flex-col items-start gap-1.5 w-full">
                        <label htmlFor="preferredTime" className="text-[11px] font-semibold text-white/80 font-mono uppercase tracking-wider flex items-center gap-1">
                          <Clock className="size-3 text-primary" /> Time Window <span className="text-[9px] text-muted-foreground lowercase font-normal">(optional)</span>
                        </label>
                        <select
                          id="preferredTime"
                          className="h-11 w-full min-w-0 rounded-lg border border-white/5 bg-[#0A0D14]/50 px-3 py-1 text-xs text-white transition-all duration-300 outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/10 appearance-none cursor-pointer"
                          {...register("preferredTime")}
                        >
                          <option value="" className="bg-[#1A2030] text-muted-foreground">Select window...</option>
                          <option value="Morning (9 AM - 12 PM)" className="bg-[#1A2030]">Morning (9:00 AM - 12:00 PM)</option>
                          <option value="Afternoon (12 PM - 3 PM)" className="bg-[#1A2030]">Afternoon (12:00 PM - 3:00 PM)</option>
                          <option value="Evening (3 PM - 6 PM)" className="bg-[#1A2030]">Evening (3:00 PM - 6:00 PM)</option>
                        </select>
                      </div>

                    </div>

                    {/* Row 5: Message */}
                    <div className="flex flex-col items-start gap-1.5 w-full">
                      <label htmlFor="message" className="text-[11px] font-semibold text-white/80 font-mono uppercase tracking-wider">Staging sandbox details</label>
                      <Textarea
                        id="message"
                        placeholder="Please detail your current system integrations and volume expectations..."
                        className="min-h-20 bg-[#0A0D14]/50 border-white/5 focus-visible:border-primary/50 focus-visible:ring-4 focus-visible:ring-primary/10 focus-visible:ring-offset-0 transition-all duration-300"
                        {...register("message")}
                        aria-invalid={!!errors.message}
                      />
                      {errors.message && (
                        <span className="text-[10px] text-destructive font-medium mt-0.5">{errors.message.message}</span>
                      )}
                    </div>

                    {/* Trust badging strip */}
                    <div className="grid grid-cols-2 gap-y-2 gap-x-4 border-t border-white/5 pt-4 text-[10px] font-medium text-muted-foreground">
                      {trustBadges.map((badge, idx) => (
                        <div key={idx} className="flex items-center gap-1.5">
                          <span className="text-primary font-bold">✓</span>
                          <span>{badge}</span>
                        </div>
                      ))}
                    </div>

                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full mt-2 h-12 uppercase font-bold tracking-wider"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="size-4 animate-spin mr-2" /> Booking Sandbox Slot...
                        </>
                      ) : (
                        "Request Sandbox Setup"
                      )}
                    </Button>

                  </form>
                )}

              </div>
            </div>

          </div>

          {/* Optional Accordion FAQs */}
          <FAQAccordion />

        </Container>
      </div>
    </Section>
  );
}
