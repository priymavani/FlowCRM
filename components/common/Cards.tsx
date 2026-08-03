import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

// DashboardCard Props
interface DashboardCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  icon?: React.ReactNode;
  badgeText?: string;
  badgeVariant?: "default" | "secondary" | "outline" | "success" | "warning" | "danger" | "info";
  children?: React.ReactNode;
}

export function DashboardCard({
  title,
  icon,
  badgeText,
  badgeVariant = "default",
  children,
  className,
  ...props
}: DashboardCardProps) {
  return (
    <div
      className={cn(
        "bg-card border border-white/5 rounded-dashboard p-7 shadow-premium flex flex-col gap-5",
        className
      )}
      {...props}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          {icon && <div className="text-primary group-hover/button:rotate-6 transition-transform duration-300">{icon}</div>}
          <h3 className="text-card-title text-lg font-semibold">{title}</h3>
        </div>
        {badgeText && <Badge variant={badgeVariant}>{badgeText}</Badge>}
      </div>
      <div className="flex-1 w-full">{children}</div>
    </div>
  );
}

// GlassPanel Props
interface GlassPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function GlassPanel({ children, className, ...props }: GlassPanelProps) {
  return (
    <div
      className={cn(
        "bg-white/[0.02] border border-white/10 backdrop-blur-md rounded-cta p-8 shadow-premium",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

// FeatureCard Props
interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  icon?: React.ReactNode;
  preview?: React.ReactNode;
  features?: string[];
  children?: React.ReactNode;
}

export function FeatureCard({
  title,
  description,
  icon,
  preview,
  features,
  children,
  className,
  ...props
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "bg-card border border-white/5 rounded-card p-7 shadow-premium flex flex-col gap-6 hover:scale-[1.01] hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_0_30px_rgba(255,138,29,0.04)] transition-all duration-300 ease-out group",
        className
      )}
      {...props}
    >
      {icon && (
        <div className="p-3 bg-surface rounded-button w-fit text-primary border border-white/5 group-hover:rotate-6 transition-transform duration-300 animate-hover-icon">
          {icon}
        </div>
      )}
      <div className="flex flex-col gap-2">
        <h3 className="text-card-title text-xl font-semibold">{title}</h3>
        <p className="text-body-premium text-sm/relaxed">{description}</p>
      </div>

      {features && (
        <ul className="flex flex-col gap-2.5 mt-1">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2.5 text-xs text-muted-foreground font-medium">
              <span className="text-primary font-bold">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}

      {children}
      {preview && <div className="mt-auto w-full bg-surface border border-white/5 rounded-dashboard p-4 overflow-hidden">{preview}</div>}
    </div>
  );
}

// BenefitCard Props
interface BenefitCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

export function BenefitCard({
  title,
  description,
  icon,
  children,
  className,
  ...props
}: BenefitCardProps) {
  return (
    <div
      className={cn(
        "bg-card border border-white/5 rounded-card p-7 shadow-premium flex flex-col gap-5 hover:scale-[1.01] hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_0_30px_rgba(255,138,29,0.04)] transition-all duration-300 ease-out group",
        className
      )}
      {...props}
    >
      <div className="flex gap-4 items-start">
        {icon && (
          <div className="p-3 bg-surface rounded-button shrink-0 h-fit text-primary border border-white/5 group-hover:rotate-6 transition-transform duration-300 animate-hover-icon">
            {icon}
          </div>
        )}
        <div className="flex flex-col gap-1.5">
          <h3 className="text-lg font-semibold text-heading">{title}</h3>
          <p className="text-body-premium text-sm/relaxed text-muted-foreground">{description}</p>
        </div>
      </div>
      {children && <div className="mt-auto w-full">{children}</div>}
    </div>
  );
}

// IntegrationCard Props
interface IntegrationCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  icon?: React.ReactNode;
  statusText?: string;
  connected?: boolean;
  description?: string;
  connectionType?: string;
}

export function IntegrationCard({
  name,
  icon,
  statusText = "Ready to connect",
  connected = false,
  description,
  connectionType,
  className,
  ...props
}: IntegrationCardProps) {
  return (
    <div
      className={cn(
        "bg-card border border-white/5 rounded-card p-6 shadow-premium flex flex-col gap-4 hover:scale-[1.01] hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_0_30px_rgba(255,138,29,0.05)] transition-all duration-300 ease-out group relative overflow-hidden",
        className
      )}
      {...props}
    >
      {/* Soft back glow on hover */}
      <div className="absolute inset-0 bg-primary/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-3.5">
          {/* Premium Icon Container */}
          <div className="p-3 bg-[#0A0D14] border border-white/5 rounded-xl shadow-[0_0_15px_rgba(255,255,255,0.02)] flex items-center justify-center group-hover:border-primary/20 group-hover:shadow-[0_0_20px_rgba(255,138,29,0.05)] transition-all duration-300 shrink-0">
            {icon || <div className="size-6 bg-muted-foreground/20 rounded-full" />}
          </div>
          <div className="flex flex-col gap-0.5">
            <h4 className="text-base font-bold text-heading group-hover:text-white transition-colors duration-200">{name}</h4>
            <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-mono">{connectionType || "Real-Time"}</span>
          </div>
        </div>
        <Badge variant={connected ? "success" : "outline"} className="shrink-0 text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
          {statusText}
        </Badge>
      </div>
      {description && <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>}
      
      {/* Hover Arrow and Strength indicator */}
      <div className="flex items-center justify-between mt-1 pt-2 border-t border-white/[0.02] text-[10px] font-mono text-muted-foreground group-hover:text-primary transition-colors duration-200">
        <span>STRENGTH: 100%</span>
        <ArrowRight className="size-3.5 translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
      </div>
    </div>
  );
}

// TestimonialCard Props
interface TestimonialCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  company: string;
  review: string;
  avatarSrc?: string;
  designation?: string;
  rating?: number;
}

export function TestimonialCard({
  name,
  company,
  review,
  avatarSrc,
  designation,
  rating = 5,
  className,
  ...props
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "bg-card border border-white/5 rounded-card p-7 shadow-premium flex flex-col gap-5 justify-between hover:scale-[1.01] hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_0_30px_rgba(255,138,29,0.04)] transition-all duration-300 ease-out group",
        className
      )}
      {...props}
    >
      <div className="flex flex-col gap-4">
        {rating > 0 && (
          <div className="flex gap-1 text-[#FFC857]" aria-label={`${rating} out of 5 stars`}>
            {Array.from({ length: rating }).map((_, i) => (
              <span key={i} className="text-sm">★</span>
            ))}
          </div>
        )}
        <p className="text-body-premium italic text-sm/relaxed">&ldquo;{review}&rdquo;</p>
      </div>

      <div className="flex items-center gap-4 border-t border-white/5 pt-4">
        <div className="size-10 rounded-full bg-surface border border-white/5 flex items-center justify-center overflow-hidden font-bold text-sm text-primary relative shrink-0">
          {avatarSrc ? (
            <Image
              src={avatarSrc}
              alt={name}
              width={40}
              height={40}
              className="size-full object-cover"
            />
          ) : (
            name.charAt(0)
          )}
        </div>
        <div className="flex flex-col">
          <cite className="not-italic text-sm font-semibold text-heading">{name}</cite>
          <span className="text-xs text-muted-foreground leading-normal">
            {designation ? `${designation}, ` : ""}{company}
          </span>
        </div>
      </div>
    </div>
  );
}
