export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-background">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex flex-col gap-6 text-center">
        <h1 className="text-hero tracking-tight">FlowCRM</h1>
        <p className="text-body-premium max-w-md">
          Premium marketing website project foundation is successfully initialized. Next step: building modular UI components and sections.
        </p>
        <div className="flex gap-4">
          <span className="px-3 py-1 text-xs rounded-full border border-border bg-surface text-primary-light">
            Next.js 15
          </span>
          <span className="px-3 py-1 text-xs rounded-full border border-border bg-surface text-primary-light">
            React 19
          </span>
          <span className="px-3 py-1 text-xs rounded-full border border-border bg-surface text-primary-light">
            Tailwind v4
          </span>
          <span className="px-3 py-1 text-xs rounded-full border border-border bg-surface text-primary-light">
            GSAP & Lenis
          </span>
        </div>
      </div>
    </main>
  );
}
