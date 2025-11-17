import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const chipVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all cursor-pointer border disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary: "",
        neutral: "",
      },
      size: {
        small: "h-6 px-3 text-xs",
        medium: "h-10 px-4 text-sm",
      },
      shape: {
        default: "rounded-[99999px]",
        square: "rounded-lg",
        circle: "rounded-full",
      },
      fullWidth: {
        true: "w-full",
        false: "w-fit",
      },
      checked: {
        true: "",
        false: "",
      },
      disabled: {
        true: "cursor-not-allowed",
        false: "",
      },
    },
    compoundVariants: [
      // SHAPE CIRCLE - SMALL SIZE
      {
        shape: "circle",
        size: "small",
        className: "w-6 h-6 p-0 aspect-square",
      },
      // SHAPE CIRCLE - MEDIUM SIZE
      {
        shape: "circle",
        size: "medium",
        className: "w-10 h-10 p-0 aspect-square",
      },
      // PRIMARY VARIANT - DEFAULT STATE
      {
        variant: "primary",
        checked: false,
        disabled: false,
        className:
          "bg-[hsl(var(--brand-primary-100))] text-[hsl(var(--neutral-500))] border-transparent hover:border-[hsl(var(--brand-primary-300))] hover:text-[hsl(var(--brand-primary-300))]",
      },
      // PRIMARY VARIANT - CHECKED STATE
      {
        variant: "primary",
        checked: true,
        disabled: false,
        className:
          "bg-[hsl(var(--brand-primary-300))] text-[hsl(var(--pure-white))] border-transparent",
      },
      // PRIMARY VARIANT - DISABLED STATE
      {
        variant: "primary",
        disabled: true,
        className:
          "bg-[hsl(var(--neutral-100))] text-[hsl(var(--neutral-300))] border-transparent",
      },
      // NEUTRAL VARIANT - DEFAULT STATE
      {
        variant: "neutral",
        checked: false,
        disabled: false,
        className:
          "bg-[hsl(var(--background-white))] text-[hsl(var(--neutral-500))] border-[hsl(var(--neutral-200))] hover:border-[hsl(var(--brand-primary-300))] hover:text-[hsl(var(--brand-primary-300))]",
      },
      // NEUTRAL VARIANT - CHECKED STATE
      {
        variant: "neutral",
        checked: true,
        disabled: false,
        className:
          "bg-[hsl(var(--brand-primary-100))] text-[hsl(var(--brand-primary-300))] border-[hsl(var(--brand-primary-300))]",
      },
      // NEUTRAL VARIANT - DISABLED STATE
      {
        variant: "neutral",
        disabled: true,
        className:
          "bg-[hsl(var(--neutral-100))] text-[hsl(var(--neutral-300))] border-transparent",
      },
    ],
    defaultVariants: {
      variant: "primary",
      size: "medium",
      shape: "default",
      fullWidth: false,
      checked: false,
      disabled: false,
    },
  }
);

export interface ChipProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof chipVariants> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Chip = React.forwardRef<HTMLButtonElement, ChipProps>(
  (
    {
      className,
      variant,
      size,
      shape,
      fullWidth,
      checked,
      disabled,
      leftIcon,
      rightIcon,
      children,
      ...props
    },
    ref
  ) => {
    // Determina a cor dos ícones baseado no estado
    const getIconColor = () => {
      // Sempre usar currentColor para herdar a cor do texto do chip
      return "currentColor";
    };

    const iconColor = getIconColor();

    // Clone icons com cor apropriada
    const renderIcon = (icon: React.ReactNode) => {
      if (!icon) return null;
      
      if (React.isValidElement(icon)) {
        return React.cloneElement(icon as React.ReactElement<any>, {
          size: size === "small" ? 16 : 20,
          color: iconColor,
          className: cn(
            (icon as React.ReactElement<any>).props?.className,
            "transition-colors"
          ),
        });
      }
      return icon;
    };

    return (
      <button
        className={cn(
          chipVariants({
            variant,
            size,
            shape,
            fullWidth,
            checked,
            disabled,
            className,
          })
        )}
        ref={ref}
        disabled={disabled}
        {...props}
      >
        {leftIcon && renderIcon(leftIcon)}
        {children}
        {rightIcon && renderIcon(rightIcon)}
      </button>
    );
  }
);

Chip.displayName = "Chip";

export { Chip, chipVariants };
