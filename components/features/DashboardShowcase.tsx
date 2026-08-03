"use client";

import { useState, useEffect } from "react";
import CountUp from "react-countup";
import { Badge } from "@/components/ui/badge";
import {
  LayoutDashboard,
  TrendingUp,
  Users,
  DollarSign,
  FileText,
  Clock,
  Check,
  Settings,
  Bell,
  ArrowUpRight,
  ChevronRight,
} from "lucide-react";

export default function DashboardShowcase() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Send SLA proposal to ZenCorp", done: true },
    { id: 2, text: "Verify shift allowance audits", done: false },
    { id: 3, text: "Approve pending GST claims", done: false },
  ]);

  const [liveLog, setLiveLog] = useState([
    { id: 1, title: "Google Ads campaign synced", time: "Just now", desc: "+8 incoming leads score > 80", type: "success" },
    { id: 2, title: "HR clock-in trigger warning", time: "2m ago", desc: "Aman Sen late by 5m (Shift A)", type: "warning" },
    { id: 3, title: "Invoice #1098 generation", time: "5m ago", desc: "Vertex Group ($4,500) sent", type: "info" },
  ]);

  // Live simulation: dynamically add a log every 10 seconds to make the console feel active
  useEffect(() => {
    const logs = [
      { title: "Facebook Lead captured", desc: "Amit Roy (Vertex Dev)", type: "success" },
      { title: "Invoicing synced with Stripe", desc: "Cleared $1,200", type: "success" },
      { title: "WhatsApp auto-response sent", desc: "Standard intro template", type: "info" },
    ];

    const timer = setInterval(() => {
      const randomLog = logs[Math.floor(Math.random() * logs.length)];
      setLiveLog((prev) => [
        {
          id: Date.now(),
          title: randomLog.title,
          time: "Just now",
          desc: randomLog.desc,
          type: randomLog.type,
        },
        ...prev.slice(0, 2),
      ]);
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

  const navItems = [
    { label: "Dashboard", icon: LayoutDashboard, active: true },
    { label: "Leads", icon: TrendingUp },
    { label: "Customers", icon: Users },
    { label: "Sales & Deals", icon: DollarSign },
    { label: "HR Shift Logs", icon: Clock },
    { label: "Invoicing Module", icon: FileText },
  ];

  return (
    <div className="w-full bg-[#0A0D14]/90 border border-white/10 rounded-dashboard overflow-hidden shadow-2xl backdrop-blur-md">
      
      {/* Console Title Bar / Window Controls */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#111622] border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="size-2.5 rounded-full bg-[#FF5C7A]" />
          <div className="size-2.5 rounded-full bg-[#FFC857]" />
          <div className="size-2.5 rounded-full bg-[#42D392]" />
        </div>
        <div className="text-[10px] md:text-xs font-mono text-muted-foreground font-medium flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-primary/80 animate-pulse" />
          flowcrm-enterprise-core-showcase
        </div>
        <div className="flex items-center gap-3 text-muted-foreground">
          <Bell className="size-3.5 hover:text-white transition-colors duration-200 cursor-pointer" />
          <div className="size-5 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-[10px] font-bold text-primary font-mono">
            E
          </div>
        </div>
      </div>

      {/* Workspace Body Grid */}
      <div className="flex bg-[#0A0D14]/30">
        
        {/* Sidebar */}
        <aside className="hidden md:flex flex-col w-48 bg-[#111622] border-r border-white/5 p-4 justify-between shrink-0">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className={`flex items-center justify-between px-2.5 py-2 rounded-button text-xs font-medium cursor-pointer transition-all duration-200 ${
                    item.active
                      ? "bg-primary/10 text-primary border border-primary/20"
                      : "text-muted-foreground hover:text-white hover:bg-white/[0.02] border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <item.icon className="size-3.5" />
                    <span>{item.label}</span>
                  </div>
                  {item.active && <ChevronRight className="size-3" />}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2 border-t border-white/5 pt-4">
            <div className="flex items-center gap-2.5 px-2.5 py-2 text-xs text-muted-foreground hover:text-white cursor-pointer transition-colors duration-200">
              <Settings className="size-3.5" />
              <span>Console Settings</span>
            </div>
          </div>
        </aside>

        {/* Content Area */}
        <main className="flex-1 p-6 flex flex-col gap-6 overflow-hidden select-none">
          
          {/* Row 1: KPI Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Total Closed Deals */}
            <div className="bg-[#161C29] border border-white/5 rounded-card p-4 flex flex-col gap-1.5">
              <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Closed Deals</span>
              <div className="flex items-baseline justify-between">
                <span className="text-2xl font-bold text-white tracking-tight">
                  <CountUp end={142} duration={2} />
                </span>
                <span className="text-[9px] font-bold text-[#42D392] bg-[#42D392]/10 border border-[#42D392]/20 px-1 rounded">+22%</span>
              </div>
            </div>

            {/* Total Sales Revenue */}
            <div className="bg-[#161C29] border border-white/5 rounded-card p-4 flex flex-col gap-1.5">
              <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Total Revenue</span>
              <div className="flex items-baseline justify-between">
                <span className="text-2xl font-bold text-white tracking-tight">
                  $<CountUp end={142800} separator="," duration={2} />
                </span>
                <span className="text-[9px] font-bold text-[#42D392] bg-[#42D392]/10 border border-[#42D392]/20 px-1 rounded">+14%</span>
              </div>
            </div>

            {/* Active Shifts */}
            <div className="bg-[#161C29] border border-white/5 rounded-card p-4 flex flex-col gap-1.5">
              <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">HR Shift Sync</span>
              <div className="flex items-baseline justify-between">
                <span className="text-2xl font-bold text-white tracking-tight">
                  12/12
                </span>
                <span className="text-[9px] font-bold text-[#5DA8FF] bg-[#5DA8FF]/10 border border-[#5DA8FF]/20 px-1 rounded">100% active</span>
              </div>
            </div>

            {/* Invoices Balance */}
            <div className="bg-[#161C29] border border-white/5 rounded-card p-4 flex flex-col gap-1.5">
              <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Unpaid Balance</span>
              <div className="flex items-baseline justify-between">
                <span className="text-2xl font-bold text-white tracking-tight">
                  $<CountUp end={4820} separator="," duration={2} />
                </span>
                <span className="text-[9px] font-bold text-[#FFC857] bg-[#FFC857]/10 border border-[#FFC857]/20 px-1 rounded">3 pending</span>
              </div>
            </div>
          </div>

          {/* Row 2: Vector Charts (Sales Trends & Funnel) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Sales Trends Chart (8 Columns) */}
            <div className="lg:col-span-8 bg-[#161C29] border border-white/5 rounded-card p-5 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-0.5">
                  <h4 className="text-sm font-semibold text-white">Operational Cashflow Summary</h4>
                  <span className="text-xs text-muted-foreground">Historical collections & revenue trends</span>
                </div>
                <div className="flex gap-4 text-xs font-medium">
                  <span className="flex items-center gap-1.5 text-primary">
                    <span className="size-2 rounded-full bg-primary" /> Sales Revenue
                  </span>
                  <span className="flex items-center gap-1.5 text-[#42D392]">
                    <span className="size-2 rounded-full bg-[#42D392]" /> Collections
                  </span>
                </div>
              </div>

              {/* Chart SVG wrapper */}
              <div className="relative w-full h-[180px] bg-[#0A0D14]/30 rounded-lg p-2 overflow-hidden border border-white/5">
                <svg className="w-full h-full" viewBox="0 0 500 150" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="revenueGlow" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#FF8A1D" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#FF8A1D" stopOpacity="0.0" />
                    </linearGradient>
                    <linearGradient id="collectionsGlow" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#42D392" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#42D392" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  {/* Horizontal gridlines */}
                  <line x1="0" y1="30" x2="500" y2="30" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                  <line x1="0" y1="75" x2="500" y2="75" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                  <line x1="0" y1="120" x2="500" y2="120" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />

                  {/* SVG line 1: Sales Revenue */}
                  <path
                    d="M 0 120 Q 80 60 160 90 T 320 40 T 440 25 T 500 15 L 500 150 L 0 150 Z"
                    fill="url(#revenueGlow)"
                  />
                  <path
                    d="M 0 120 Q 80 60 160 90 T 320 40 T 440 25 T 500 15"
                    fill="none"
                    stroke="#FF8A1D"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />

                  {/* SVG line 2: Collections */}
                  <path
                    d="M 0 135 Q 75 105 150 115 T 300 70 T 430 45 T 500 35 L 500 150 L 0 150 Z"
                    fill="url(#collectionsGlow)"
                  />
                  <path
                    d="M 0 135 Q 75 105 150 115 T 300 70 T 430 45 T 500 35"
                    fill="none"
                    stroke="#42D392"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                {/* Labels */}
                <div className="flex justify-between text-[10px] text-muted-foreground font-mono mt-1 px-1">
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>May</span>
                  <span>Jun</span>
                  <span>Jul</span>
                  <span>Aug</span>
                </div>
              </div>
            </div>

            {/* Lead Stages Funnel Chart (4 Columns) */}
            <div className="lg:col-span-4 bg-[#161C29] border border-white/5 rounded-card p-5 flex flex-col gap-4 justify-between">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-semibold text-white">Lead Stages Funnel</h4>
                <ArrowUpRight className="size-4 text-muted-foreground" />
              </div>

              {/* Custom SVG Funnel */}
              <div className="flex flex-col gap-3 py-1">
                {/* Funnel Level 1: Discovery */}
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-3 bg-primary rounded-sm opacity-100" />
                    <span className="font-medium text-white">Discovery</span>
                  </div>
                  <span className="text-muted-foreground">1,240 Leads</span>
                </div>
                {/* Funnel Level 2: Proposal */}
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-3 bg-primary rounded-sm opacity-75" />
                    <span className="font-medium text-white">Proposal</span>
                  </div>
                  <span className="text-muted-foreground">420 Leads</span>
                </div>
                {/* Funnel Level 3: Negotiation */}
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-3 bg-primary rounded-sm opacity-50" />
                    <span className="font-medium text-white">Negotiations</span>
                  </div>
                  <span className="text-muted-foreground">185 Leads</span>
                </div>
                {/* Funnel Level 4: Won */}
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-3 bg-primary rounded-sm opacity-25" />
                    <span className="font-medium text-white">Deals Won</span>
                  </div>
                  <span className="text-muted-foreground">142 Leads</span>
                </div>
              </div>

              <div className="text-[11px] text-muted-foreground border-t border-white/5 pt-3 leading-relaxed">
                Conversion rate from inquiry to signed contract averages <span className="text-primary font-bold">11.4%</span> (exceeds sector baseline).
              </div>
            </div>
          </div>

          {/* Row 3: Action Task lists & Operations timelines */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Checklist */}
            <div className="bg-[#161C29] border border-white/5 rounded-card p-5 flex flex-col gap-4">
              <h4 className="text-sm font-semibold text-white">Action Items Checklist</h4>
              <div className="flex flex-col gap-2.5">
                {tasks.map((task) => (
                  <div
                    key={task.id}
                    onClick={() => toggleTask(task.id)}
                    className="flex items-start gap-3 p-3 rounded-lg bg-[#0A0D14]/40 hover:bg-[#0A0D14]/80 border border-white/[0.02] cursor-pointer transition-all duration-200"
                  >
                    <div className={`mt-0.5 size-4 rounded border border-white/10 flex items-center justify-center text-primary-foreground transition-colors duration-200 shrink-0 ${
                      task.done ? "bg-primary border-primary" : "bg-transparent"
                    }`}>
                      {task.done && <Check className="size-3 text-white" strokeWidth={3.5} />}
                    </div>
                    <span className={`text-xs leading-tight select-none ${
                      task.done ? "line-through text-muted-foreground animate-fade-out" : "text-body"
                    }`}>
                      {task.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Live Ticker Operations timeline */}
            <div className="bg-[#161C29] border border-white/5 rounded-card p-5 flex flex-col gap-4">
              <h4 className="text-sm font-semibold text-white">Operations Timeline</h4>
              <div className="flex flex-col gap-4 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-px before:bg-white/5 overflow-hidden">
                {liveLog.map((log) => (
                  <div key={log.id} className="flex gap-4.5 items-start relative animate-fade-in">
                    <span className={`size-6 rounded-full flex items-center justify-center shrink-0 z-10 text-[10px] font-semibold ${
                      log.type === "success" 
                        ? "bg-[#42D392]/10 border border-[#42D392]/20 text-[#42D392]" 
                        : log.type === "warning"
                        ? "bg-[#FFC857]/10 border border-[#FFC857]/20 text-[#FFC857]"
                        : "bg-[#5DA8FF]/10 border border-[#5DA8FF]/20 text-[#5DA8FF]"
                    }`}>
                      {log.type === "success" ? "✓" : log.type === "warning" ? "!" : "→"}
                    </span>
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-white font-semibold leading-none">{log.title}</span>
                        <span className="text-[8px] text-muted-foreground font-mono leading-none">{log.time}</span>
                      </div>
                      <span className="text-[10px] text-muted-foreground mt-1">{log.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* HR Attendance */}
            <div className="bg-[#161C29] border border-white/5 rounded-card p-5 flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <h4 className="text-sm font-semibold text-white">Shift Check-In Status</h4>
                <span className="text-[9px] text-[#42D392] font-mono flex items-center gap-1">
                  <span className="size-1.5 rounded-full bg-[#42D392] animate-pulse" /> Roster Sync Active
                </span>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between text-xs p-2 rounded bg-[#0A0D14]/40 border border-white/[0.02]">
                  <div className="flex items-center gap-2">
                    <div className="size-6 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-[10px] font-bold text-primary">A</div>
                    <span className="font-medium text-white">Amit Sharma</span>
                  </div>
                  <Badge variant="success" className="text-[9px] px-1.5 py-0.5">8:00 AM</Badge>
                </div>
                <div className="flex items-center justify-between text-xs p-2 rounded bg-[#0A0D14]/40 border border-white/[0.02]">
                  <div className="flex items-center gap-2">
                    <div className="size-6 rounded-full bg-[#5DA8FF]/10 border border-[#5DA8FF]/20 flex items-center justify-center text-[10px] font-bold text-[#5DA8FF]">P</div>
                    <span className="font-medium text-white">Priya Sen</span>
                  </div>
                  <Badge variant="success" className="text-[9px] px-1.5 py-0.5">9:02 AM</Badge>
                </div>
                <div className="flex items-center justify-between text-xs p-2 rounded bg-[#0A0D14]/40 border border-white/[0.02]">
                  <div className="flex items-center gap-2">
                    <div className="size-6 rounded-full bg-[#FF5C7A]/10 border border-[#FF5C7A]/20 flex items-center justify-center text-[10px] font-bold text-[#FF5C7A]">R</div>
                    <span className="font-medium text-white">Rahul Roy</span>
                  </div>
                  <Badge variant="outline" className="text-[9px] text-muted-foreground px-1.5 py-0.5">Shift B (3 PM)</Badge>
                </div>
              </div>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}
