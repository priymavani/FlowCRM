"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "@/lib/gsap";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { BRAND_NAME } from "@/constants";
import { Input } from "@/components/ui/input";
import { GradientBlob } from "@/components/common/Decorators";
import {
  CheckCircle,
  MapPin,
  Clock,
  Send,
  Loader2,
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!footerRef.current) return;

    const ctx = gsap.context(() => {
      // Stagger reveal footer columns on viewport entry
      gsap.from(".footer-col-reveal", {
        scrollTrigger: {
          trigger: ".footer-container-trigger",
          start: "top 95%",
        },
        y: 20,
        opacity: 0,
        stagger: 0.06,
        duration: 0.6,
        ease: "power2.out",
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setError("Email address is required.");
      return;
    }
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setIsLoading(true);
    // Simulate submission delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    setIsSubscribed(true);
    setEmail("");

    // Trigger Rich Toast
    toast.success("Subscribed successfully!", {
      description: "You've been added to our system update updates catalog.",
      duration: 4000,
    });
  };

  const trustBadges = [
    "Enterprise Ready",
    "99.9% Uptime SLA",
    "SOC2 Compliant",
    "GDPR Compliant",
  ];

  const socialLinks = [
    {
      icon: (
        <svg viewBox="0 0 24 24" className="size-4 fill-current shrink-0">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      href: "https://github.com",
      label: "GitHub",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="size-4 fill-current shrink-0">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      href: "https://linkedin.com",
      label: "LinkedIn",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="size-4 fill-current shrink-0">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      href: "https://twitter.com",
      label: "Twitter",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="size-4 fill-current shrink-0">
          <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11c.502-1.87.502-5.837.502-5.837s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
      href: "https://youtube.com",
      label: "YouTube",
    },
  ];

  const productLinks = [
    { label: "Lead Ingestion", href: "#features" },
    { label: "HRMS Roster", href: "#features" },
    { label: "Billing Console", href: "#features" },
    { label: "Integrations Hub", href: "#integrations" },
    { label: "Benefit Modules", href: "#benefits" },
    { label: "Testimonials", href: "#testimonials" },
  ];

  const resourceLinks = [
    { label: "Documentation", href: "#" },
    { label: "API Reference", href: "#" },
    { label: "Help Desk", href: "#" },
    { label: "Staging sandbox", href: "#contact" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ];

  const companyLinks = [
    { label: "About Us", href: "#" },
    { label: "Careers (Hiring)", href: "#" },
    { label: "Press Room", href: "#" },
    { label: "System Status", href: "#" },
    { label: "Security Audits", href: "#" },
    { label: "Book Slot", href: "#contact" },
  ];

  return (
    <footer ref={footerRef} className="footer-container-trigger border-t border-white/5 bg-[#0A0D14] pt-20 pb-10 relative overflow-hidden mt-auto">
      {/* Symmetrical background mesh */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -z-10">
        <GradientBlob color="bg-primary" size="w-[400px] h-[400px]" className="opacity-[0.03] blur-[100px]" />
      </div>

      <div className="max-container px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16">
          
          {/* Column 1: Brand Narrative (4 Columns) */}
          <div className="footer-col-reveal lg:col-span-4 flex flex-col items-start gap-5">
            <Link href="/" className="flex items-center gap-2.5 group">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-primary group-hover:rotate-6 transition-transform duration-300"
              >
                <path
                  d="M12 2L2 7L12 12L22 7L12 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 17L12 22L22 17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 12L12 17L22 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-sans font-bold text-lg text-white tracking-tight">{BRAND_NAME}</span>
            </Link>

            <p className="text-xs text-muted-foreground leading-relaxed max-w-sm">
              The unified operational workspace built for modern organizations to ingest leads, manage workforce rosters, and automate billing.
            </p>

            {/* Social Icons row */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="size-8 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/20 transition-all duration-300"
                  whileHover={{ scale: 1.08, rotate: 6 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            {/* Trust Badging Strip */}
            <div className="flex flex-wrap gap-1.5 mt-2 max-w-sm">
              {trustBadges.map((badge, idx) => (
                <span
                  key={idx}
                  className="text-[9px] font-mono text-muted-foreground bg-white/[0.01] border border-white/5 px-2 py-0.5 rounded-full uppercase tracking-wider"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Column 2: Product Categories (2 Columns) */}
          <div className="footer-col-reveal lg:col-span-2 flex flex-col items-start gap-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">Product</h4>
            <ul className="flex flex-col gap-2.5 text-left w-full">
              {productLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-xs text-muted-foreground hover:text-white transition-colors duration-200 block py-0.5 relative group/link"
                  >
                    <span>{link.label}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover/link:w-1/3 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources (2 Columns) */}
          <div className="footer-col-reveal lg:col-span-2 flex flex-col items-start gap-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">Resources</h4>
            <ul className="flex flex-col gap-2.5 text-left w-full">
              {resourceLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-xs text-muted-foreground hover:text-white transition-colors duration-200 block py-0.5 relative group/link"
                  >
                    <span>{link.label}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover/link:w-1/3 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company (2 Columns) */}
          <div className="footer-col-reveal lg:col-span-2 flex flex-col items-start gap-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">Company</h4>
            <ul className="flex flex-col gap-2.5 text-left w-full">
              {companyLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-xs text-muted-foreground hover:text-white transition-colors duration-200 block py-0.5 relative group/link"
                  >
                    <span>{link.label}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover/link:w-1/3 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Newsletter & Contact (2 Columns) */}
          <div className="footer-col-reveal lg:col-span-2 flex flex-col items-start gap-4 text-left w-full">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">Keep Updated</h4>
            
            {/* Newsletter Input Block */}
            <div className="w-full relative min-h-[50px] mb-2">
              <AnimatePresence mode="wait">
                {isSubscribed ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2 p-2 bg-[#42D392]/10 border border-[#42D392]/20 rounded-lg text-[#42D392] text-[10px] font-semibold w-full"
                  >
                    <CheckCircle className="size-4 shrink-0" />
                    <span>Subscribed successfully!</span>
                  </motion.div>
                ) : (
                  <motion.form
                    onSubmit={handleSubscribe}
                    className="flex flex-col gap-2 w-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="relative flex items-center">
                      <Input
                        type="email"
                        placeholder="business@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={isLoading}
                        className="h-9 pr-9 bg-[#0A0D14]/80 border-white/5 text-xs text-white focus-visible:ring-primary/20 placeholder:text-muted-foreground"
                      />
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="absolute right-2 p-1 text-muted-foreground hover:text-primary disabled:opacity-50 transition-colors"
                        aria-label="Submit newsletter"
                      >
                        {isLoading ? (
                          <Loader2 className="size-3.5 animate-spin" />
                        ) : (
                          <Send className="size-3.5" />
                        )}
                      </button>
                    </div>
                    {error && (
                      <span className="text-[10px] text-destructive leading-tight font-medium">{error}</span>
                    )}
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

            {/* Quick Location info */}
            <div className="flex flex-col gap-2 border-t border-white/5 pt-3.5 w-full text-[10px]/relaxed text-muted-foreground font-mono">
              <div className="flex items-center gap-2">
                <MapPin className="size-3 text-primary shrink-0" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="size-3 text-primary shrink-0" />
                <span>Mon–Fri, 9am–6pm EST</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar Details */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px]/relaxed text-muted-foreground">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 justify-center sm:justify-start">
            <span>© {new Date().getFullYear()} {BRAND_NAME} Technologies Inc. All rights reserved.</span>
            <span className="hidden sm:inline text-white/10">•</span>
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="text-white/10">•</span>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
          <div className="flex items-center gap-1.5 font-mono text-[9px] bg-white/[0.02] border border-white/5 rounded px-2.5 py-1 uppercase tracking-wider text-muted-foreground">
            <span className="size-1.5 rounded-full bg-[#42D392] animate-pulse" />
            <span>Staging Stable v1.5.2</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
