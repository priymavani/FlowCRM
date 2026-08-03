import { cn } from "@/lib/utils";

interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  title: string;
  description?: string;
  alignment?: "left" | "center";
}

export function SectionHeader({
  label,
  title,
  description,
  alignment = "center",
  className,
  ...props
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 max-w-3xl mb-12 md:mb-16",
        alignment === "center" ? "items-center text-center mx-auto" : "items-start text-left",
        className
      )}
      {...props}
    >
      {label && (
        <span className="text-small-premium font-semibold tracking-wider uppercase text-primary bg-primary/10 px-3.5 py-1 rounded-full border border-primary/20">
          {label}
        </span>
      )}
      <h2 className="text-section font-bold tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="text-body-premium">
          {description}
        </p>
      )}
    </div>
  );
}
