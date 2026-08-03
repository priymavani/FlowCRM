# FlowCRM — Unified Business Management Platform

FlowCRM is a premium, high-fidelity SaaS landing page built with **Next.js 15**, **Tailwind CSS**, **Framer Motion**, and **GSAP**. It represents a unified operations dashboard built for modern organizations to ingest customer leads, track employee shift rosters, and automate corporate invoicing inside a single interface.

**🔗 Live Deployment**: [FlowCRM on Vercel](https://vercel.com/priymavanis-projects/flow-crm)

---



## 🌟 Key Product Features

- **Hero Experience**: Premium entrance animations, interactive floating widgets, and a simulated CRM mockup showing visual dashboard depth.
- **Asymmetrical Feature Grid**: Visually stunning staggered layout showcasing the lead pipeline, shift roster widget, invoice tracking widget, and dynamic SVG analytics trendlines.
- **Interactive Integrations Hub**: Visual connection chart drawing connections from lead sources (WhatsApp, Gmail, IndiaMART, Webhooks) into the FlowCRM core with animated flow particles.
- **Benefit Matrices (Why Choose Us)**: Staggered columns presenting security indicators (SOC2, TLS 1.3), performance metrics, and a dynamic interactive workflow builder.
- **Customer Success Stories**: Interactive featured customer stories, metrics cards with dynamic number count-ups, and a looping monochrome logo grid.
- **CTA Banner**: Dual conversion buttons, weekly conversion line chart animations, and floating transaction widgets.
- **Staging Booking Portal**: Fully validated consultation booking form using **React Hook Form + Zod** validation schema and interactive CSS-based floating labels.
- **FAQ Accordion**: Pre-styled accordion answering setup queries, built using Radix `@base-ui/react/accordion` primitives.
- **Dynamic Footer**: 5-column layout with social icons, SOC2/GDPR compliance chips, and a validated newsletter sign-up container with live feedback states.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**:
  - [GSAP (GreenSock)](https://greensock.com/gsap/) with `ScrollTrigger` and `gsap.matchMedia()`
  - [Framer Motion](https://www.framer.com/motion/) for micro-interactions
- **Form Management**: [React Hook Form](https://react-hook-form.com/) & [Zod Schema Validation](https://zod.dev/)
- **Primitives**: [Base UI Accordion](https://base-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/) & Inline custom brand SVGs

---

## ⚡ Getting Started (Local Development)

Follow these instructions to set up the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/priymavani/FlowCRM
   cd flow-crm
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

4. **Verify production compilation**:
   ```bash
   npm run build
   ```

---

## 🚀 Deployment to Vercel

The application is completely optimized for production and can be deployed directly with default Next.js build parameters:

### GitHub Link 
1. Push your repository to GitHub.
2. Go to [Vercel Dashboard](https://vercel.com/dashboard) and import your repository.
3. Click **Deploy**. Vercel will automatically host the Next.js workspace and generate a live URL.
