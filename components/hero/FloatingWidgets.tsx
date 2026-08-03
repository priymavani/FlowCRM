"use client";

import { useId } from "react";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Clock } from "lucide-react";

export default function FloatingWidgets() {
  const widgetId1 = useId();
  const widgetId2 = useId();
  const widgetId3 = useId();
  const widgetId4 = useId();
  const widgetId5 = useId();
  const widgetId6 = useId();

  return (
    <div className="absolute inset-0 pointer-events-none z-20">
      
      {/* 1. Facebook Lead Captured (Top Left) */}
      <div
        id={widgetId1}
        className="hero-floating-widget absolute top-[10%] -left-8 md:-left-16 pointer-events-auto bg-[#1A2030]/95 border border-white/10 rounded-card p-3 flex items-center gap-3.5 shadow-premium hover:scale-[1.05] transition-transform duration-300 w-[230px]"
      >
        <div className="size-8 rounded-button bg-[#1877F2]/10 border border-[#1877F2]/20 flex items-center justify-center text-[#1877F2] shrink-0">
          <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-semibold text-white">Facebook Lead</span>
            <Badge variant="success" className="text-[7px] px-1 py-0 h-3 font-bold">+$1.2k</Badge>
          </div>
          <span className="text-[9px] text-muted-foreground">New inquiry captured • Just now</span>
        </div>
      </div>

      {/* 2. WhatsApp Message from Rahul (Mid Left) */}
      <div
        id={widgetId2}
        className="hero-floating-widget absolute top-[40%] -left-12 md:-left-24 pointer-events-auto bg-[#1A2030]/95 border border-white/10 rounded-card p-3 flex items-center gap-3.5 shadow-premium hover:scale-[1.05] transition-transform duration-300 w-[240px]"
      >
        <div className="size-8 rounded-button bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center text-[#25D366] shrink-0">
          <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.16 1.453 4.85 1.454 5.532 0 10.033-4.502 10.035-10.037.002-2.68-1.038-5.198-2.929-7.09C16.716 1.589 14.195.55 11.517.55 5.98.55 1.48 5.05 1.477 10.587c-.001 1.776.47 3.5 1.36 5.02L1.87 20.39l4.777-1.236z"/>
          </svg>
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="text-[11px] font-semibold text-white">Rahul (WhatsApp)</span>
          <span className="text-[9px] text-muted-foreground">&ldquo;Interested in Bulk Plan&rdquo; • 2m ago</span>
        </div>
      </div>

      {/* 3. Invoice Paid (Bottom Left) */}
      <div
        id={widgetId3}
        className="hero-floating-widget absolute bottom-[12%] -left-8 md:-left-16 pointer-events-auto bg-[#1A2030]/95 border border-white/10 rounded-card p-3 flex items-center gap-3.5 shadow-premium hover:scale-[1.05] transition-transform duration-300 w-[210px]"
      >
        <div className="size-8 rounded-button bg-[#42D392]/10 border border-[#42D392]/20 flex items-center justify-center text-[#42D392] shrink-0">
          <DollarSign className="size-4" />
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-semibold text-white">Invoice #1094 Paid</span>
            <Badge variant="success" className="text-[7px] px-1 py-0 h-3 font-bold">$3,200</Badge>
          </div>
          <span className="text-[9px] text-muted-foreground">Client: Vertex Group • 5m ago</span>
        </div>
      </div>

      {/* 4. IndiaMART Inquiry (Top Right) */}
      <div
        id={widgetId4}
        className="hero-floating-widget absolute top-[8%] -right-8 md:-right-16 pointer-events-auto bg-[#1A2030]/95 border border-white/10 rounded-card p-3 flex items-center gap-3.5 shadow-premium hover:scale-[1.05] transition-transform duration-300 w-[240px]"
      >
        <div className="size-8 rounded-button bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-xs font-mono shrink-0">
          IM
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="text-[11px] font-semibold text-white">IndiaMART Lead</span>
          <span className="text-[9px] text-muted-foreground">Inquiry: &ldquo;Bulk CRM deployment&rdquo; • 8m ago</span>
        </div>
      </div>

      {/* 5. HR Clock-In (Mid Right) */}
      <div
        id={widgetId5}
        className="hero-floating-widget absolute top-[44%] -right-12 md:-right-24 pointer-events-auto bg-[#1A2030]/95 border border-white/10 rounded-card p-3 flex items-center gap-3.5 shadow-premium hover:scale-[1.05] transition-transform duration-300 w-[220px]"
      >
        <div className="size-8 rounded-button bg-[#5DA8FF]/10 border border-[#5DA8FF]/20 flex items-center justify-center text-[#5DA8FF] shrink-0">
          <Clock className="size-4" />
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="text-[11px] font-semibold text-white">HR Clock-In: Priya</span>
          <span className="text-[9px] text-muted-foreground">Priya checked in for morning shift • 9:02 AM</span>
        </div>
      </div>

      {/* 6. Website Lead (Bottom Right) */}
      <div
        id={widgetId6}
        className="hero-floating-widget absolute bottom-[10%] -right-8 md:-right-16 pointer-events-auto bg-[#1A2030]/95 border border-white/10 rounded-card p-3 flex items-center gap-3.5 shadow-premium hover:scale-[1.05] transition-transform duration-300 w-[210px]"
      >
        <div className="size-8 rounded-button bg-primary/15 border border-primary/30 flex items-center justify-center text-primary shrink-0">
          <svg viewBox="0 0 24 24" className="size-4 animate-pulse" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            <path d="M2 12h20" />
          </svg>
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="text-[11px] font-semibold text-white">New Web Registration</span>
          <span className="text-[9px] text-muted-foreground">Demo requested • 12m ago</span>
        </div>
      </div>

    </div>
  );
}
