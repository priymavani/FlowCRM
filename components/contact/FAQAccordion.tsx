"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

export default function FAQAccordion() {
  const faqRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!faqRef.current) return;

    const ctx = gsap.context(() => {
      // Reveal the FAQ header and accordion items sequentially
      gsap.from(".faq-reveal", {
        scrollTrigger: {
          trigger: ".faq-container-trigger",
          start: "top 85%",
        },
        y: 30,
        opacity: 0,
        stagger: 0.08,
        duration: 0.7,
        ease: "power2.out",
      });
    }, faqRef);

    return () => ctx.revert();
  }, []);

  const faqs = [
    {
      q: "How long does the initial onboarding and setup take?",
      a: "For most teams, setup takes under 5 minutes. Since FlowCRM utilizes native direct connectors (like Facebook API, Google, and Webhooks), you can link your lead channels and start routing leads immediately.",
    },
    {
      q: "Can we migrate active records from HubSpot, Salesforce, or Excel?",
      a: "Absolutely. FlowCRM offers full one-click data migration tools for CSV formats and direct API ingest tools. Your client records, conversation histories, and billing metrics will map cleanly to their new stages.",
    },
    {
      q: "Do you provide dedicated account setup assistance?",
      a: "Yes. Every workspace demo includes standard setup assistance. For teams with more than 50 members, we assign a dedicated Integration Architect to build custom automations and API routes.",
    },
    {
      q: "What security standards are applied to client data?",
      a: "We take data privacy extremely seriously. FlowCRM utilizes end-to-end TLS 1.3 encryption, SOC2-compliant host servers, and granular role-based permissions (RBAC) to ensure client data is fully secure.",
    },
  ];

  return (
    <div ref={faqRef} className="faq-container-trigger w-full max-w-3xl mx-auto mt-20 lg:mt-28 border-t border-white/5 pt-16">
      <div className="flex flex-col items-center text-center gap-3 mb-10 faq-reveal">
        <div className="size-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
          <HelpCircle className="size-4.5" />
        </div>
        <h3 className="text-2xl font-bold text-white tracking-tight">Frequently Asked Questions</h3>
        <p className="text-xs text-muted-foreground max-w-md mt-1">
          Quick answers to help you understand implementation timeline, data imports, and security.
        </p>
      </div>

      <div className="faq-reveal bg-[#161C29]/40 border border-white/5 rounded-card p-4 md:p-6 shadow-premium">
        <Accordion className="gap-2">
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-white/5 last:border-0 py-1">
              <AccordionTrigger className="text-sm font-semibold text-white hover:text-primary transition-colors duration-200 py-3.5 focus-visible:ring-0">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-xs text-muted-foreground leading-relaxed pb-4 pt-1">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
