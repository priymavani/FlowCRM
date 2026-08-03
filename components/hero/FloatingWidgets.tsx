"use client";

import { useId } from "react";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Clock, MessageSquare } from "lucide-react";

export default function FloatingWidgets() {
  const widgetId1 = useId();
  const widgetId2 = useId();
  const widgetId3 = useId();
  const widgetId4 = useId();

  return (
    <div className="absolute inset-0 pointer-events-none z-20">
      {/* Widget 1: Facebook Lead (Top Left) */}
      <div
        id={widgetId1}
        className="hero-floating-widget absolute top-[15%] -left-6 md:-left-12 pointer-events-auto bg-[#1A2030]/95 border border-white/10 rounded-card p-3 flex items-center gap-3.5 shadow-premium hover:scale-[1.05] transition-transform duration-300 w-[220px]"
      >
        <div className="size-8 rounded-button bg-[#1877F2]/10 border border-[#1877F2]/20 flex items-center justify-center text-[#1877F2]">
          <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="text-[11px] font-semibold text-white">Facebook Lead</span>
          <span className="text-[9px] text-muted-foreground">New inquiry captured • 1m ago</span>
        </div>
      </div>

      {/* Widget 2: Invoice Paid (Bottom Left) */}
      <div
        id={widgetId2}
        className="hero-floating-widget absolute bottom-[22%] -left-4 md:-left-8 pointer-events-auto bg-[#1A2030]/95 border border-white/10 rounded-card p-3 flex items-center gap-3.5 shadow-premium hover:scale-[1.05] transition-transform duration-300 w-[200px]"
      >
        <div className="size-8 rounded-button bg-[#42D392]/10 border border-[#42D392]/20 flex items-center justify-center text-[#42D392]">
          <DollarSign className="size-4" />
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-semibold text-white">Invoice Paid</span>
            <Badge variant="success" className="text-[7px] px-1 py-0 h-3 flex items-center justify-center font-bold">+$2.4k</Badge>
          </div>
          <span className="text-[9px] text-muted-foreground">Client: Vertex Group • 5m ago</span>
        </div>
      </div>

      {/* Widget 3: Employee Shift Check (Top Right) */}
      <div
        id={widgetId3}
        className="hero-floating-widget absolute top-[28%] -right-6 md:-right-12 pointer-events-auto bg-[#1A2030]/95 border border-white/10 rounded-card p-3 flex items-center gap-3.5 shadow-premium hover:scale-[1.05] transition-transform duration-300 w-[210px]"
      >
        <div className="size-8 rounded-button bg-[#5DA8FF]/10 border border-[#5DA8FF]/20 flex items-center justify-center text-[#5DA8FF]">
          <Clock className="size-4" />
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="text-[11px] font-semibold text-white">HR Clock-In</span>
          <span className="text-[9px] text-muted-foreground">Amit Sharma Checked In • 8:00 AM</span>
        </div>
      </div>

      {/* Widget 4: WhatsApp Message (Bottom Right) */}
      <div
        id={widgetId4}
        className="hero-floating-widget absolute bottom-[18%] -right-4 md:-right-8 pointer-events-auto bg-[#1A2030]/95 border border-white/10 rounded-card p-3 flex items-center gap-3.5 shadow-premium hover:scale-[1.05] transition-transform duration-300 w-[200px]"
      >
        <div className="size-8 rounded-button bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center text-[#25D366]">
          <MessageSquare className="size-4" fill="currentColor" />
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="text-[11px] font-semibold text-white">WhatsApp Sync</span>
          <span className="text-[9px] text-muted-foreground">New lead conversation • Just now</span>
        </div>
      </div>
    </div>
  );
}
