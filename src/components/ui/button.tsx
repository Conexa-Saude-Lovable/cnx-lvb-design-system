import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Loader } from "@/components/feedback/Loader";
import { IconComponent } from "@/components/icons/Icon";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed active:scale-[0.96] rounded-lg border-2 h-10 sm:h-10 md:h-10",
  {
    variants: {
      mode: {
        solid: "",
        outline: "bg-transparent",
        text: "bg-transparent border-transparent",
        plain: "bg-transparent border-transparent p-0 h-auto hover:bg-transparent active:scale-100",
      },
      color: {
        primary: "",
        secondary: "",
        tertiary: "",
        error: "",
        warning: "",
        success: "",
        information: "",
        white: "",
      },
      fullWidth: {
        true: "w-full",
        false: "w-fit",
      },
      hasChildren: {
        true: "px-4",
        false: "px-2",
      },
    },
    compoundVariants: [
      // SOLID MODE VARIANTS
      {
        mode: "solid",
        color: "primary",
        className:
          "bg-[hsl(var(--brand-primary-300))] text-[hsl(var(--pure-white))] border-transparent hover:bg-[hsl(var(--brand-primary-400))] disabled:bg-[hsl(var(--neutral-100))] disabled:text-[hsl(var(--neutral-300))]",
      },
      {
        mode: "solid",
        color: "secondary",
        className:
          "bg-[hsl(var(--brand-secondary-300))] text-[hsl(var(--pure-white))] border-transparent hover:bg-[hsl(var(--brand-secondary-400))] disabled:bg-[hsl(var(--neutral-100))] disabled:text-[hsl(var(--neutral-300))]",
      },
      {
        mode: "solid",
        color: "tertiary",
        className:
          "bg-[hsl(var(--brand-tertiary-300))] text-[hsl(var(--pure-white))] border-transparent hover:bg-[hsl(var(--brand-tertiary-400))] disabled:bg-[hsl(var(--neutral-100))] disabled:text-[hsl(var(--neutral-300))]",
      },
      {
        mode: "solid",
        color: "error",
        className:
          "bg-[hsl(var(--feedback-error-300))] text-[hsl(var(--pure-white))] border-transparent hover:bg-[hsl(var(--feedback-error-400))] disabled:bg-[hsl(var(--neutral-100))] disabled:text-[hsl(var(--neutral-300))]",
      },
      {
        mode: "solid",
        color: "success",
        className:
          "bg-[hsl(var(--feedback-success-300))] text-[hsl(var(--pure-white))] border-transparent hover:bg-[hsl(var(--feedback-success-400))] disabled:bg-[hsl(var(--neutral-100))] disabled:text-[hsl(var(--neutral-300))]",
      },
      {
        mode: "solid",
        color: "warning",
        className:
          "bg-[hsl(var(--feedback-warning-300))] text-[hsl(var(--pure-white))] border-transparent hover:bg-[hsl(var(--feedback-warning-400))] disabled:bg-[hsl(var(--neutral-100))] disabled:text-[hsl(var(--neutral-300))]",
      },
      {
        mode: "solid",
        color: "information",
        className:
          "bg-[hsl(var(--feedback-info-300))] text-[hsl(var(--pure-white))] border-transparent hover:bg-[hsl(var(--feedback-info-400))] disabled:bg-[hsl(var(--neutral-100))] disabled:text-[hsl(var(--neutral-300))]",
      },
      {
        mode: "solid",
        color: "white",
        className:
          "bg-[hsl(var(--pure-white))] text-[hsl(var(--brand-primary-300))] border-transparent hover:bg-[hsl(var(--brand-primary-100))] disabled:bg-[hsl(var(--neutral-100))] disabled:text-[hsl(var(--neutral-300))]",
      },
      // OUTLINE MODE VARIANTS
      {
        mode: "outline",
        color: "primary",
        className:
          "border-[hsl(var(--brand-primary-300))] text-[hsl(var(--brand-primary-300))] hover:bg-[hsl(var(--brand-primary-100))] disabled:border-[hsl(var(--neutral-100))] disabled:text-[hsl(var(--neutral-300))]",
      },
      {
        mode: "outline",
        color: "secondary",
        className:
          "border-[hsl(var(--brand-secondary-300))] text-[hsl(var(--brand-secondary-300))] hover:bg-[hsl(var(--brand-secondary-100))] disabled:border-[hsl(var(--neutral-100))] disabled:text-[hsl(var(--neutral-300))]",
      },
      {
        mode: "outline",
        color: "tertiary",
        className:
          "border-[hsl(var(--brand-tertiary-300))] text-[hsl(var(--brand-tertiary-300))] hover:bg-[hsl(var(--brand-tertiary-100))] disabled:border-[hsl(var(--neutral-100))] disabled:text-[hsl(var(--neutral-300))]",
      },
      {
        mode: "outline",
        color: "error",
        className:
          "border-[hsl(var(--feedback-error-300))] text-[hsl(var(--feedback-error-300))] hover:bg-[hsl(var(--feedback-error-100))] disabled:border-[hsl(var(--neutral-100))] disabled:text-[hsl(var(--neutral-300))]",
      },
      {
        mode: "outline",
        color: "success",
        className:
          "border-[hsl(var(--feedback-success-300))] text-[hsl(var(--feedback-success-300))] hover:bg-[hsl(var(--feedback-success-100))] disabled:border-[hsl(var(--neutral-100))] disabled:text-[hsl(var(--neutral-300))]",
      },
      {
        mode: "outline",
        color: "warning",
        className:
          "border-[hsl(var(--feedback-warning-300))] text-[hsl(var(--feedback-warning-300))] hover:bg-[hsl(var(--feedback-warning-100))] disabled:border-[hsl(var(--neutral-100))] disabled:text-[hsl(var(--neutral-300))]",
      },
      {
        mode: "outline",
        color: "information",
        className:
          "border-[hsl(var(--feedback-info-300))] text-[hsl(var(--feedback-info-300))] hover:bg-[hsl(var(--feedback-info-100))] disabled:border-[hsl(var(--neutral-100))] disabled:text-[hsl(var(--neutral-300))]",
      },
      {
        mode: "outline",
        color: "white",
        className:
          "border-[hsl(var(--pure-white))] text-[hsl(var(--pure-white))] hover:bg-[hsl(var(--pure-white))]/10 disabled:border-[hsl(var(--neutral-100))] disabled:text-[hsl(var(--neutral-300))]",
      },
      // TEXT MODE VARIANTS
      {
        mode: "text",
        color: "primary",
        className:
          "text-[hsl(var(--brand-primary-300))] hover:bg-[hsl(var(--brand-primary-100))] disabled:text-[hsl(var(--neutral-300))]",
      },
      {
        mode: "text",
        color: "secondary",
        className:
          "text-[hsl(var(--brand-secondary-300))] hover:bg-[hsl(var(--brand-secondary-100))] disabled:text-[hsl(var(--neutral-300))]",
      },
      {
        mode: "text",
        color: "tertiary",
        className:
          "text-[hsl(var(--brand-tertiary-300))] hover:bg-[hsl(var(--brand-tertiary-100))] disabled:text-[hsl(var(--neutral-300))]",
      },
      {
        mode: "text",
        color: "error",
        className:
          "text-[hsl(var(--feedback-error-300))] hover:bg-[hsl(var(--feedback-error-100))] disabled:text-[hsl(var(--neutral-300))]",
      },
      {
        mode: "text",
        color: "success",
        className:
          "text-[hsl(var(--feedback-success-300))] hover:bg-[hsl(var(--feedback-success-100))] disabled:text-[hsl(var(--neutral-300))]",
      },
      {
        mode: "text",
        color: "warning",
        className:
          "text-[hsl(var(--feedback-warning-300))] hover:bg-[hsl(var(--feedback-warning-100))] disabled:text-[hsl(var(--neutral-300))]",
      },
      {
        mode: "text",
        color: "information",
        className:
          "text-[hsl(var(--feedback-info-300))] hover:bg-[hsl(var(--feedback-info-100))] disabled:text-[hsl(var(--neutral-300))]",
      },
      {
        mode: "text",
        color: "white",
        className:
          "text-[hsl(var(--pure-white))] hover:bg-[hsl(var(--pure-white))]/10 disabled:text-[hsl(var(--neutral-300))]",
      },
      // PLAIN MODE VARIANTS
      {
        mode: "plain",
        color: "primary",
        className:
          "text-[hsl(var(--brand-primary-300))] hover:text-[hsl(var(--brand-primary-400))] disabled:text-[hsl(var(--neutral-300))]",
      },
      {
        mode: "plain",
        color: "secondary",
        className:
          "text-[hsl(var(--brand-secondary-300))] hover:text-[hsl(var(--brand-secondary-400))] disabled:text-[hsl(var(--neutral-300))]",
      },
      {
        mode: "plain",
        color: "tertiary",
        className:
          "text-[hsl(var(--brand-tertiary-300))] hover:text-[hsl(var(--brand-tertiary-400))] disabled:text-[hsl(var(--neutral-300))]",
      },
      {
        mode: "plain",
        color: "error",
        className:
          "text-[hsl(var(--feedback-error-300))] hover:text-[hsl(var(--feedback-error-400))] disabled:text-[hsl(var(--neutral-300))]",
      },
      {
        mode: "plain",
        color: "success",
        className:
          "text-[hsl(var(--feedback-success-300))] hover:text-[hsl(var(--feedback-success-400))] disabled:text-[hsl(var(--neutral-300))]",
      },
      {
        mode: "plain",
        color: "warning",
        className:
          "text-[hsl(var(--feedback-warning-300))] hover:text-[hsl(var(--feedback-warning-400))] disabled:text-[hsl(var(--neutral-300))]",
      },
      {
        mode: "plain",
        color: "information",
        className:
          "text-[hsl(var(--feedback-info-300))] hover:text-[hsl(var(--feedback-info-400))] disabled:text-[hsl(var(--neutral-300))]",
      },
      {
        mode: "plain",
        color: "white",
        className:
          "text-[hsl(var(--pure-white))] hover:text-[hsl(var(--brand-primary-100))] disabled:text-[hsl(var(--neutral-300))]",
      },
    ],
    defaultVariants: {
      mode: "solid",
      color: "primary",
      fullWidth: false,
      hasChildren: true,
    },
  }
);

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  busy?: boolean;
  leftIcon?: React.ComponentType<any>;
  rightIcon?: React.ComponentType<any>;
  notification?: number;
  size?: "sm" | "default" | "lg" | "icon";
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      mode = "solid",
      color = "primary",
      fullWidth,
      size,
      variant,
      asChild = false,
      busy = false,
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      notification,
      children,
      disabled,
      onClick,
      ...props
    },
    ref
  ) => {
    // Map old variant/size to new mode/color for backwards compatibility
    const variantToMode: Record<string, typeof mode> = {
      default: "solid",
      outline: "outline",
      ghost: "text",
      link: "plain",
      secondary: "outline",
      destructive: "solid",
    };
    
    const effectiveMode = variant && !mode ? (variantToMode[variant] || "solid") : mode || "solid";
    const effectiveColor = variant === "destructive" ? "error" : (color || "primary");
    
    const Comp = asChild ? Slot : "button";
    const hasChildren = Boolean(children);

    // Loader colors based on mode and color
    const getLoaderColors = () => {
      if (effectiveMode === "solid") {
        return {
          ringColor: "hsl(var(--brand-primary-100))",
          spinColor: "hsl(var(--pure-white))",
        };
      }
      return {
        ringColor: `hsl(var(--brand-${effectiveColor}-200))`,
        spinColor: `hsl(var(--brand-${effectiveColor}-300))`,
      };
    };

    const loaderColors = getLoaderColors();

    return (
      <Comp
        className={cn(
          "relative", // for notification positioning
          buttonVariants({ mode: effectiveMode, color: effectiveColor, fullWidth, hasChildren, className }),
          busy && "cursor-not-allowed"
        )}
        ref={ref}
        disabled={disabled || busy}
        onClick={busy ? undefined : onClick}
        aria-busy={busy}
        {...props}
      >
        {LeftIcon && !busy && (
          <LeftIcon className="shrink-0 h-5 w-5" />
        )}

        {busy && (
          <Loader
            size="small"
            ringColor={loaderColors.ringColor}
            spinColor={loaderColors.spinColor}
            className="shrink-0"
          />
        )}

        {notification && notification > 0 && (
          <span className="absolute -right-3 -top-3 flex h-6 min-w-[24px] items-center justify-center rounded-full bg-[hsl(var(--brand-primary-300))] px-2 text-xs text-[hsl(var(--pure-white))] outline outline-2 outline-[hsl(var(--pure-white))]">
            {notification}
          </span>
        )}

        {children}

        {RightIcon && (
          <RightIcon className="shrink-0 h-5 w-5" />
        )}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
