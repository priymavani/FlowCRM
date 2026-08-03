"use client";

import { useState } from "react";
import CountUp from "react-countup";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  DollarSign,
  Users,
  FileText,
} from "lucide-react";

export default function DashboardMockup() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Follow up with enterprise lead (Google)", done: true },
    { id: 2, text: "Release payroll invoice for July", done: false },
    { id: 3, text: "Verify API integration with MagicBricks", done: false },
  ]);

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

  return (
    <div className="w-full bg-[#0A0D14]/90 border border-white/10 rounded-dashboard overflow-hidden shadow-2xl backdrop-blur-md">
      {/* Console Title Bar / Window Controls */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#111622] border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="size-3 rounded-full bg-[#FF5C7A]" />
          <div className="size-3 rounded-full bg-[#FFC857]" />
          <div className="size-3 rounded-full bg-[#42D392]" />
        </div>
        <div className="text-xs font-mono text-muted-foreground font-medium">
          flowcrm-operational-console
        </div>
        <div className="size-4" /> {/* Spacer */}
      </div>

      {/* Main Console Content */}
      <div className="p-6 flex flex-col gap-6">
        {/* Top 4 KPI Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: Leads */}
          <div className="bg-[#161C29] border border-white/5 rounded-card p-4 flex flex-col gap-1.5">
            <div className="flex justify-between items-center text-muted-foreground">
              <span className="text-xs font-medium uppercase tracking-wider">Total Leads</span>
              <TrendingUp className="size-4 text-primary" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-white tracking-tight">
                <CountUp end={12840} separator="," duration={2} />
              </span>
              <Badge variant="success">+18%</Badge>
            </div>
          </div>

          {/* Card 2: Revenue */}
          <div className="bg-[#161C29] border border-white/5 rounded-card p-4 flex flex-col gap-1.5">
            <div className="flex justify-between items-center text-muted-foreground">
              <span className="text-xs font-medium uppercase tracking-wider">Revenue</span>
              <DollarSign className="size-4 text-[#42D392]" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-white tracking-tight">
                $<CountUp end={48250} separator="," duration={2} />
              </span>
              <Badge variant="success">+12%</Badge>
            </div>
          </div>

          {/* Card 3: Employees */}
          <div className="bg-[#161C29] border border-white/5 rounded-card p-4 flex flex-col gap-1.5">
            <div className="flex justify-between items-center text-muted-foreground">
              <span className="text-xs font-medium uppercase tracking-wider">Employees</span>
              <Users className="size-4 text-[#5DA8FF]" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-white tracking-tight">
                <CountUp end={84} duration={2} />
              </span>
              <Badge variant="success">+4%</Badge>
            </div>
          </div>

          {/* Card 4: Invoices */}
          <div className="bg-[#161C29] border border-white/5 rounded-card p-4 flex flex-col gap-1.5">
            <div className="flex justify-between items-center text-muted-foreground">
              <span className="text-xs font-medium uppercase tracking-wider">Pending Invoices</span>
              <FileText className="size-4 text-[#FFC857]" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-white tracking-tight">
                <CountUp end={15} duration={2} />
              </span>
              <Badge variant="warning">5 Overdue</Badge>
            </div>
          </div>
        </div>

        {/* Middle Section: Chart & Pipeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Revenue Chart (8 Columns on Large Screen) */}
          <div className="lg:col-span-8 bg-[#161C29] border border-white/5 rounded-card p-5 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-semibold text-white">Monthly Analytics Summary</h4>
              <div className="flex gap-4 text-xs font-medium">
                <span className="flex items-center gap-1.5 text-primary">
                  <span className="size-2 rounded-full bg-primary" /> Sales
                </span>
                <span className="flex items-center gap-1.5 text-[#42D392]">
                  <span className="size-2 rounded-full bg-[#42D392]" /> Collections
                </span>
              </div>
            </div>

            {/* Custom SVG Line Chart */}
            <div className="relative w-full h-[180px] bg-[#0A0D14]/30 rounded-lg p-2 overflow-hidden border border-white/5">
              <svg className="w-full h-full" viewBox="0 0 500 150" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="gradientSales" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#FF8A1D" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#FF8A1D" stopOpacity="0.0" />
                  </linearGradient>
                  <linearGradient id="gradientCollections" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#42D392" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#42D392" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Gridlines */}
                <line x1="0" y1="30" x2="500" y2="30" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                <line x1="0" y1="75" x2="500" y2="75" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                <line x1="0" y1="120" x2="500" y2="120" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />

                {/* Sales Gradient Fill & Line */}
                <path
                  d="M 0 110 Q 75 70 150 90 T 300 45 T 450 30 T 500 20 L 500 150 L 0 150 Z"
                  fill="url(#gradientSales)"
                />
                <path
                  d="M 0 110 Q 75 70 150 90 T 300 45 T 450 30 T 500 20"
                  fill="none"
                  stroke="#FF8A1D"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />

                {/* Collections Gradient Fill & Line */}
                <path
                  d="M 0 130 Q 70 100 140 110 T 280 80 T 420 50 T 500 40 L 500 150 L 0 150 Z"
                  fill="url(#gradientCollections)"
                />
                <path
                  d="M 0 130 Q 70 100 140 110 T 280 80 T 420 50 T 500 40"
                  fill="none"
                  stroke="#42D392"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              {/* X Axis Labels */}
              <div className="flex justify-between text-[10px] text-muted-foreground font-mono mt-1 px-1">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
                <span>Jul</span>
              </div>
            </div>
          </div>

          {/* Sales Pipeline (4 Columns on Large Screen) */}
          <div className="lg:col-span-4 bg-[#161C29] border border-white/5 rounded-card p-5 flex flex-col gap-4">
            <h4 className="text-sm font-semibold text-white">Sales Pipeline</h4>
            <div className="flex flex-col gap-3">
              {/* Stage 1: Discovery */}
              <div className="flex flex-col gap-1">
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>1. Discovery</span>
                  <span className="font-semibold text-white">45 Leads</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[80%] rounded-full" />
                </div>
              </div>
              {/* Stage 2: Proposal */}
              <div className="flex flex-col gap-1">
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>2. Proposal</span>
                  <span className="font-semibold text-white">22 Leads</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-primary/80 w-[55%] rounded-full" />
                </div>
              </div>
              {/* Stage 3: Negotiation */}
              <div className="flex flex-col gap-1">
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>3. Negotiation</span>
                  <span className="font-semibold text-white">12 Leads</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-[#FFC857] w-[30%] rounded-full" />
                </div>
              </div>
              {/* Stage 4: Closed */}
              <div className="flex flex-col gap-1">
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>4. Contract Sent</span>
                  <span className="font-semibold text-white">8 Leads</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-[#42D392] w-[18%] rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Tasks, Timeline & Employees */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Tasks checklist panel */}
          <div className="bg-[#161C29] border border-white/5 rounded-card p-5 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-semibold text-white">Action Checklists</h4>
              <Badge variant="outline" className="text-[10px]">Pending</Badge>
            </div>
            <div className="flex flex-col gap-2">
              {tasks.map((task) => {
                const taskId = `task-${task.id}`;
                return (
                  <div
                    key={task.id}
                    onClick={() => toggleTask(task.id)}
                    className="flex items-start gap-3 p-2.5 rounded-lg bg-[#0A0D14]/40 hover:bg-[#0A0D14]/80 border border-white/[0.02] cursor-pointer transition-colors duration-200"
                  >
                    <input
                      type="checkbox"
                      id={taskId}
                      checked={task.done}
                      onChange={() => {}}
                      className="mt-0.5 rounded border-white/10 text-primary focus:ring-primary size-3.5 bg-transparent"
                    />
                    <label
                      htmlFor={taskId}
                      className={`text-xs select-none cursor-pointer ${
                        task.done ? "line-through text-muted-foreground" : "text-body"
                      }`}
                    >
                      {task.text}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Recent Operations Log */}
          <div className="bg-[#161C29] border border-white/5 rounded-card p-5 flex flex-col gap-4">
            <h4 className="text-sm font-semibold text-white">Operations Timeline</h4>
            <div className="flex flex-col gap-3 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-px before:bg-white/5">
              {/* Event 1 */}
              <div className="flex gap-4 items-start relative">
                <span className="size-6 rounded-full bg-[#42D392]/10 border border-[#42D392]/20 flex items-center justify-center shrink-0 z-10 text-[10px] text-[#42D392] font-semibold">✓</span>
                <div className="flex flex-col">
                  <span className="text-xs text-white font-medium">Invoice #1048 cleared</span>
                  <span className="text-[10px] text-muted-foreground">Amit S. | $1,280</span>
                </div>
              </div>
              {/* Event 2 */}
              <div className="flex gap-4 items-start relative">
                <span className="size-6 rounded-full bg-[#5DA8FF]/10 border border-[#5DA8FF]/20 flex items-center justify-center shrink-0 z-10 text-[10px] text-[#5DA8FF] font-semibold">→</span>
                <div className="flex flex-col">
                  <span className="text-xs text-white font-medium">IndiaMART integration synced</span>
                  <span className="text-[10px] text-muted-foreground">System | 42 leads loaded</span>
                </div>
              </div>
              {/* Event 3 */}
              <div className="flex gap-4 items-start relative">
                <span className="size-6 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 z-10 text-[10px] text-primary font-semibold">+</span>
                <div className="flex flex-col">
                  <span className="text-xs text-white font-medium">New meeting scheduled</span>
                  <span className="text-[10px] text-muted-foreground">Sales Dept. | 3.00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Employee Checked In / Attendance Panel */}
          <div className="bg-[#161C29] border border-white/5 rounded-card p-5 flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <h4 className="text-sm font-semibold text-white">HR Shift Check</h4>
              <span className="text-[10px] text-[#42D392] font-mono flex items-center gap-1">
                <span className="size-1.5 rounded-full bg-[#42D392] animate-pulse" /> Active
              </span>
            </div>
            <div className="flex flex-col gap-3">
              {/* Employee 1 */}
              <div className="flex items-center justify-between text-xs p-2 rounded bg-[#0A0D14]/40 border border-white/[0.02]">
                <div className="flex items-center gap-2">
                  <div className="size-6 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-[10px] font-bold text-primary">K</div>
                  <span className="font-medium text-white">Karan Johar</span>
                </div>
                <Badge variant="success">8:50 AM</Badge>
              </div>
              {/* Employee 2 */}
              <div className="flex items-center justify-between text-xs p-2 rounded bg-[#0A0D14]/40 border border-white/[0.02]">
                <div className="flex items-center gap-2">
                  <div className="size-6 rounded-full bg-[#5DA8FF]/10 border border-[#5DA8FF]/20 flex items-center justify-center text-[10px] font-bold text-[#5DA8FF]">P</div>
                  <span className="font-medium text-white">Priya Sen</span>
                </div>
                <Badge variant="success">9:05 AM</Badge>
              </div>
              {/* Employee 3 */}
              <div className="flex items-center justify-between text-xs p-2 rounded bg-[#0A0D14]/40 border border-white/[0.02]">
                <div className="flex items-center gap-2">
                  <div className="size-6 rounded-full bg-[#FF5C7A]/10 border border-[#FF5C7A]/20 flex items-center justify-center text-[10px] font-bold text-[#FF5C7A]">R</div>
                  <span className="font-medium text-white">Rahul Roy</span>
                </div>
                <Badge variant="outline" className="text-muted-foreground">On Leave</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
