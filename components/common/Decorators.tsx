import { cn } from "@/lib/utils";

interface GradientBlobProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: string;
  size?: string;
}

export function GradientBlob({
  color = "bg-primary",
  size = "w-[500px] h-[500px]",
  className,
  ...props
}: GradientBlobProps) {
  return (
    <div
      className={cn(
        "absolute rounded-full filter blur-[120px] opacity-[0.07] pointer-events-none -z-10",
        color,
        size,
        className
      )}
      {...props}
    />
  );
}

export function BackgroundGrid({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none -z-10",
        className
      )}
      {...props}
    />
  );
}

export function SectionGlow({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent pointer-events-none",
        className
      )}
      {...props}
    />
  );
}

export function NoiseOverlay({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')] opacity-[0.015] mix-blend-overlay pointer-events-none -z-10",
        className
      )}
      {...props}
    />
  );
}
