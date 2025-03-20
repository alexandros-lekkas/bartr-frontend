import Image from "next/image";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const logoVariants = cva("flex items-center gap-2", {
  variants: {
    size: {
      default: "w-8 h-8",
      sm: "w-6 h-6",
      lg: "w-12 h-12",
      xl: "w-16 h-16 rounded-2xl",
    },
    showText: {
      true: "",
      false: "gap-0",
    },
    variant: {
      default: "bg-gradient-to-tr from-primary to-primary/80",
      secondary: "bg-secondary",
      white: "bg-white",
    },
  },
  defaultVariants: {
    size: "default",
    showText: true,
    variant: "default",
  },
});

export interface LogoProps extends VariantProps<typeof logoVariants> {
  className?: string;
  href?: string;
}

export function Logo({
  className,
  size,
  showText,
  variant,
  href = "/food",
}: LogoProps) {
  return (
    <Link href={href} className={cn("flex items-center", className)}>
      <div
        className={cn(
          "relative rounded-md overflow-hidden",
          logoVariants({ size, showText, variant })
        )}
      >
        <Image
          src={
            variant === "white" ? "/images/logo-white.png" : "/images/logo.png"
          }
          alt="BarterNow Logo"
          fill
          className={cn("object-contain", size === "xl" ? "p-2" : "p-1")}
        />
      </div>
      {showText && (
        <span
          className={cn(
            "font-semibold",
            size === "sm" && "text-sm",
            size === "default" && "text-lg",
            size === "lg" && "text-xl",
            size === "xl" && "text-2xl"
          )}
        >
          BarterNow
        </span>
      )}
    </Link>
  );
}
