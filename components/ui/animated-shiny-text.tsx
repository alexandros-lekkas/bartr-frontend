import { ComponentPropsWithoutRef, CSSProperties, FC } from "react"

import { cn } from "@/lib/utils"

export interface AnimatedShinyTextProps
  extends ComponentPropsWithoutRef<"span"> {
  shimmerWidth?: number
}

export const AnimatedShinyText: FC<AnimatedShinyTextProps> = ({
  children,
  className,
  shimmerWidth = 100,
  ...props
}) => {
  return (
    <span
      style={
        {
          "--shiny-width": `${shimmerWidth}px`,
        } as CSSProperties
      }
      className={cn(
        "mx-auto max-w-md relative inline-block",
        // Base text color - always visible (can be overridden by className prop)
        "text-neutral-700 dark:text-neutral-300",
        className
      )}
      {...props}
    >
      {/* Base text - always visible */}
      <span className="relative">{children}</span>
      {/* Shimmer overlay - creates highlight effect */}
      <span
        className={cn(
          "absolute inset-0 pointer-events-none overflow-hidden",
          // Shine effect
          "animate-shiny-text [background-size:var(--shiny-width)_100%] [background-position:0_0] bg-no-repeat [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]",
          // Shine gradient
          "bg-gradient-to-r from-transparent via-white/80 via-50% to-transparent dark:via-white/60",
          // Clip to text shape
          "bg-clip-text text-transparent"
        )}
        aria-hidden="true"
      >
        {children}
      </span>
    </span>
  )
}

