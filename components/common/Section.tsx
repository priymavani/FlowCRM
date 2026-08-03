import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  id?: string;
  variant?: "transparent" | "surface" | "surface-secondary";
}

export function Section({
  children,
  className,
  id,
  variant = "transparent",
  ...props
}: SectionProps) {
  const variantStyles = {
    transparent: "bg-transparent",
    surface: "bg-surface",
    "surface-secondary": "bg-surface-secondary",
  };

  return (
    <section
      id={id}
      className={cn("section-padding relative overflow-hidden", variantStyles[variant], className)}
      {...props}
    >
      {children}
    </section>
  );
}
