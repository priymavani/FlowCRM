import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-button text-sm font-medium whitespace-nowrap transition-all duration-300 outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary-hover hover:-translate-y-[3px] hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,138,29,0.3)]",
        outline:
          "border border-white/10 bg-transparent text-white hover:bg-white/5 hover:border-white/20 hover:-translate-y-[3px] hover:scale-[1.02]",
        secondary:
          "bg-surface text-white border border-white/5 hover:bg-surface-secondary hover:-translate-y-[3px] hover:scale-[1.02]",
        ghost:
          "text-body hover:bg-surface hover:text-white",
        destructive:
          "bg-destructive/15 text-destructive border border-destructive/20 hover:bg-destructive/20",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-7 gap-2",
        xs: "h-8 px-3 rounded-lg text-xs gap-1",
        sm: "h-10 px-5 text-[0.8rem] gap-1.5",
        lg: "h-14 px-8 text-base gap-2",
        icon: "size-12",
        "icon-xs": "size-8 rounded-lg",
        "icon-sm": "size-10",
        "icon-lg": "size-14",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
