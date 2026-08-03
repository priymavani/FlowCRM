"use client";

import { useState } from "react";
import CountUp from "react-countup";
import { Badge } from "@/components/ui/badge";
import {
  LayoutDashboard,
  TrendingUp,
  Users,
  DollarSign,
  FileText,
  Check,
  Settings,
  Clock,
  LogOut,
  Bell,
  ArrowUpRight,
} from "lucide-react";

export default function DashboardMockup() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Follow up with enterprise lead (Google)", done: true },
    { id: 2, text: "Verify API integration with MagicBricks", done: false },
    { id: 3, text: "Release payroll invoice for July", done: false },
  ]);

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

  const navItems = [
    { label: "Dashboard", icon: LayoutDashboard, active: true },
    { label: "Leads", icon: TrendingUp },
    { label: "Customers", icon: Users },
    { label: "Sales", icon: DollarSign },
    { label: "HRMS", icon: Clock },
    { label: "Invoices", icon: FileText },
  ];

  return (
    <div className="w-full bg-[#0A0D14]/95 border border-white/10 rounded-dashboard overflow-hidden shadow-2xl backdrop-blur-md">
      {/* Console Title Bar / Window Controls */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#111622] border-b border-white/5">
        {/* Left Window Traffic Lights */}
        <div className="flex items-center gap-2">
          <div className="size-2.5 rounded-full bg-[#FF5C7A]" />
          <div className="size-2.5 rounded-full bg-[#FFC857]" />
          <div className="size-2.5 rounded-full bg-[#42D392]" />
        </div>
        
        {/* Console Title */}
        <div className="text-[10px] md:text-xs font-mono text-muted-foreground font-medium flex items-center gap-1.5">
          <span className="size-1.5 rounded-full bg-primary/80 animate-pulse" />
          flowcrm-dashboard-v2.0
        </div>
        
        {/* Right Header Icons */}
        <div className="flex items-center gap-3 text-muted-foreground">
          <Bell className="size-3.5 hover:text-white transition-colors duration-200 cursor-pointer" />
          <div className="size-5 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-[10px] font-bold text-primary font-mono cursor-pointer">
            A
          </div>
        </div>
      </div>

      {/* Main Console Body Grid */}
      <div className="flex bg-[#0A0D14]/50">
        
        {/* 1. Left Sidebar Console */}
        <aside className="hidden sm:flex flex-col w-40 bg-[#111622] border-r border-white/5 p-3.5 justify-between shrink-0">
          <div className="flex flex-col gap-5">
            {/* Nav items list */}
            <div className="flex flex-col gap-1.5">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className={`flex items-center gap-2.5 px-2.5 py-1.5 rounded-button text-xs font-medium cursor-pointer transition-all duration-200 ${
                    item.active
                      ? "bg-primary/10 text-primary border border-primary/20"
                      : "text-muted-foreground hover:text-white hover:bg-white/[0.02] border border-transparent"
                  }`}
                >
                  <item.icon className="size-3.5" />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Settings / Log out */}
          <div className="flex flex-col gap-1.5 border-t border-white/5 pt-3">
            <div className="flex items-center gap-2.5 px-2.5 py-1.5 text-xs text-muted-foreground hover:text-white cursor-pointer transition-colors duration-200">
              <Settings className="size-3.5" />
              <span>Settings</span>
            </div>
            <div className="flex items-center gap-2.5 px-2.5 py-1.5 text-xs text-[#FF5C7A] hover:bg-[#FF5C7A]/5 rounded-button cursor-pointer transition-colors duration-200">
              <LogOut className="size-3.5" />
              <span>Log out</span>
            </div>
          </div>
        </aside>

        {/* 2. Main Content Dashboard Panel */}
        <main className="flex-1 p-5 flex flex-col gap-5 select-none overflow-hidden">
          
          {/* Row 1: KPI Cards Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
            {/* Leads */}
            <div className="bg-[#161C29] border border-white/5 rounded-card p-3.5 flex flex-col gap-1">
              <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Total Leads</span>
              <div className="flex items-baseline justify-between">
                <span className="text-xl font-bold text-white tracking-tight">
                  <CountUp end={12840} separator="," duration={1.5} />
                </span>
                <span className="text-[9px] font-bold text-[#42D392] bg-[#42D392]/10 border border-[#42D392]/20 px-1 rounded">+18%</span>
              </div>
            </div>

            {/* Revenue */}
            <div className="bg-[#161C29] border border-white/5 rounded-card p-3.5 flex flex-col gap-1">
              <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Revenue</span>
              <div className="flex items-baseline justify-between">
                <span className="text-xl font-bold text-white tracking-tight">
                  $<CountUp end={48250} separator="," duration={1.5} />
                </span>
                <span className="text-[9px] font-bold text-[#42D392] bg-[#42D392]/10 border border-[#42D392]/20 px-1 rounded">+12%</span>
              </div>
            </div>

            {/* Employees */}
            <div className="bg-[#161C29] border border-white/5 rounded-card p-3.5 flex flex-col gap-1">
              <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Employees</span>
              <div className="flex items-baseline justify-between">
                <span className="text-xl font-bold text-white tracking-tight">
                  <CountUp end={84} duration={1.5} />
                </span>
                <span className="text-[9px] font-bold text-[#42D392] bg-[#42D392]/10 border border-[#42D392]/20 px-1 rounded">+4%</span>
              </div>
            </div>

            {/* Invoices */}
            <div className="bg-[#161C29] border border-white/5 rounded-card p-3.5 flex flex-col gap-1">
              <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Invoices</span>
              <div className="flex items-baseline justify-between">
                <span className="text-xl font-bold text-white tracking-tight">
                  <CountUp end={15} duration={1.5} />
                </span>
                <span className="text-[9px] font-bold text-[#FF5C7A] bg-[#FF5C7A]/10 border border-[#FF5C7A]/20 px-1 rounded">5 overdue</span>
              </div>
            </div>
          </div>

          {/* Row 2: Sales Charts & Pipeline */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* Sales Overview Line Chart (8 columns) */}
            <div className="lg:col-span-8 bg-[#161C29] border border-white/5 rounded-card p-4 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-0.5">
                  <h4 className="text-xs font-semibold text-white">Sales & Collections</h4>
                  <span className="text-[10px] text-muted-foreground">Monthly analytics summary</span>
                </div>
                <div className="flex gap-3 text-[10px] font-medium">
                  <span className="flex items-center gap-1 text-primary">
                    <span className="size-1.5 rounded-full bg-primary" /> Sales
                  </span>
                  <span className="flex items-center gap-1 text-[#42D392]">
                    <span className="size-1.5 rounded-full bg-[#42D392]" /> Invoiced
                  </span>
                </div>
              </div>

              {/* Vector SVG Line Chart */}
              <div className="relative w-full h-[140px] bg-[#0A0D14]/30 rounded-lg p-1.5 overflow-hidden border border-white/5">
                <svg className="w-full h-full" viewBox="0 0 500 130" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="glowSales" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#FF8A1D" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#FF8A1D" stopOpacity="0.0" />
                    </linearGradient>
                    <linearGradient id="glowInvoiced" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#42D392" stopOpacity="0.15" />
                      <stop offset="100%" stopColor="#42D392" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  {/* Horizontal Gridlines */}
                  <line x1="0" y1="20" x2="500" y2="20" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
                  <line x1="0" y1="65" x2="500" y2="65" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
                  <line x1="0" y1="110" x2="500" y2="110" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />

                  {/* Sales Gradient Area & Line */}
                  <path
                    d="M 0 100 Q 75 55 150 75 T 300 35 T 450 20 T 500 15 L 500 130 L 0 130 Z"
                    fill="url(#glowSales)"
                  />
                  <path
                    d="M 0 100 Q 75 55 150 75 T 300 35 T 450 20 T 500 15"
                    fill="none"
                    stroke="#FF8A1D"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />

                  {/* Invoiced Gradient Area & Line */}
                  <path
                    d="M 0 115 Q 70 85 140 95 T 280 65 T 420 40 T 500 30 L 500 130 L 0 130 Z"
                    fill="url(#glowInvoiced)"
                  />
                  <path
                    d="M 0 115 Q 70 85 140 95 T 280 65 T 420 40 T 500 30"
                    fill="none"
                    stroke="#42D392"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                {/* Labels */}
                <div className="flex justify-between text-[8px] text-muted-foreground font-mono mt-1 px-1">
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>May</span>
                  <span>Jun</span>
                  <span>Jul</span>
                </div>
              </div>
            </div>

            {/* Sales Pipeline Widget (4 columns) */}
            <div className="lg:col-span-4 bg-[#161C29] border border-white/5 rounded-card p-4 flex flex-col justify-between gap-3">
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <h4 className="text-xs font-semibold text-white">Lead Stages</h4>
                <ArrowUpRight className="size-3 text-muted-foreground" />
              </div>
              
              <div className="flex flex-col gap-2">
                {/* Stage: New */}
                <div className="flex flex-col gap-0.5">
                  <div className="flex justify-between text-[10px] text-muted-foreground">
                    <span>Discovery</span>
                    <span className="font-semibold text-white">80%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[80%] rounded-full" />
                  </div>
                </div>
                {/* Stage: Proposal */}
                <div className="flex flex-col gap-0.5">
                  <div className="flex justify-between text-[10px] text-muted-foreground">
                    <span>Proposal</span>
                    <span className="font-semibold text-white">55%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-primary/80 w-[55%] rounded-full" />
                  </div>
                </div>
                {/* Stage: Closed */}
                <div className="flex flex-col gap-0.5">
                  <div className="flex justify-between text-[10px] text-muted-foreground">
                    <span>Negotiation</span>
                    <span className="font-semibold text-white">30%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-[#FFC857] w-[30%] rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 3: Action checklists & Operations timeline */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Task list panel */}
            <div className="bg-[#161C29] border border-white/5 rounded-card p-4 flex flex-col gap-3">
              <h4 className="text-xs font-semibold text-white">Task Tracker</h4>
              <div className="flex flex-col gap-2">
                {tasks.map((task) => (
                  <div
                    key={task.id}
                    onClick={() => toggleTask(task.id)}
                    className="flex items-start gap-2.5 p-2 rounded bg-[#0A0D14]/40 hover:bg-[#0A0D14]/80 border border-white/[0.02] cursor-pointer transition-all duration-200"
                  >
                    <div className={`mt-0.5 size-3.5 rounded border border-white/10 flex items-center justify-center text-primary-foreground transition-colors duration-200 ${
                      task.done ? "bg-primary border-primary" : "bg-transparent"
                    }`}>
                      {task.done && <Check className="size-2.5 text-white" strokeWidth={3} />}
                    </div>
                    <span className={`text-[10px] leading-tight select-none ${
                      task.done ? "line-through text-muted-foreground" : "text-body"
                    }`}>
                      {task.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Operations Log */}
            <div className="bg-[#161C29] border border-white/5 rounded-card p-4 flex flex-col gap-3">
              <h4 className="text-xs font-semibold text-white">Operations Timeline</h4>
              <div className="flex flex-col gap-2 relative before:absolute before:left-[9px] before:top-2 before:bottom-2 before:w-px before:bg-white/5">
                <div className="flex gap-3.5 items-start relative">
                  <span className="size-5 rounded-full bg-[#42D392]/10 border border-[#42D392]/20 flex items-center justify-center shrink-0 z-10 text-[9px] text-[#42D392] font-semibold">✓</span>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-white font-medium">Invoice #1094 Paid</span>
                    <span className="text-[8px] text-muted-foreground">Sales Ops | $3,200</span>
                  </div>
                </div>
                <div className="flex gap-3.5 items-start relative">
                  <span className="size-5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 z-10 text-[9px] text-primary font-semibold">+</span>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-white font-medium">Lead captured from FB</span>
                    <span className="text-[8px] text-muted-foreground">Facebook Lead Ads | 1m ago</span>
                  </div>
                </div>
              </div>
            </div>

            {/* HR Attendance */}
            <div className="bg-[#161C29] border border-white/5 rounded-card p-4 flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <h4 className="text-xs font-semibold text-white">Shift Check-In</h4>
                <span className="text-[8px] text-[#42D392] font-mono flex items-center gap-1">
                  <span className="size-1 rounded-full bg-[#42D392] animate-pulse" /> Live
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between text-[10px] p-1.5 rounded bg-[#0A0D14]/40 border border-white/[0.02]">
                  <div className="flex items-center gap-1.5">
                    <div className="size-5 rounded-full bg-[#5DA8FF]/10 border border-[#5DA8FF]/20 flex items-center justify-center text-[8px] font-bold text-[#5DA8FF]">P</div>
                    <span className="font-medium text-white">Priya Sen</span>
                  </div>
                  <Badge variant="success" className="text-[8px] px-1 py-0 h-3.5">9:02 AM</Badge>
                </div>
                <div className="flex items-center justify-between text-[10px] p-1.5 rounded bg-[#0A0D14]/40 border border-white/[0.02]">
                  <div className="flex items-center gap-1.5">
                    <div className="size-5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-[8px] font-bold text-primary">A</div>
                    <span className="font-medium text-white">Amit S.</span>
                  </div>
                  <Badge variant="success" className="text-[8px] px-1 py-0 h-3.5">8:00 AM</Badge>
                </div>
              </div>
            </div>

          </div>

        </main>
      </div>
    </div>
  );
}
