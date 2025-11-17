import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { Check, Bulb, Ring, DoubleCheck } from "@/components/icons";

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 flex items-start gap-3 animate-fade-in",
  {
    variants: {
      variant: {
        success: "bg-feedback-success-100 border-feedback-success-300",
        information: "bg-feedback-info-100 border-feedback-info-300",
        warning: "bg-feedback-warning-100 border-feedback-warning-300",
        error: "bg-feedback-error-100 border-feedback-error-300",
        primary: "bg-brand-primary-100 border-brand-primary-300",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

const iconMap = {
  success: Check,
  information: Bulb,
  warning: Ring,
  error: DoubleCheck,
  primary: Bulb,
};

const iconColorMap = {
  success: "hsl(var(--feedback-success-400))",
  information: "hsl(var(--feedback-info-400))",
  warning: "hsl(var(--feedback-warning-400))",
  error: "hsl(var(--feedback-error-400))",
  primary: "hsl(var(--brand-primary-400))",
};

const titleColorMap = {
  success: "text-feedback-success-500",
  information: "text-feedback-info-500",
  warning: "text-feedback-warning-500",
  error: "text-feedback-error-500",
  primary: "text-brand-primary-500",
};

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  title: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
  onClose?: () => void;
  icon?: React.ComponentType<{ size?: number; color?: string }>;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant = "primary", title, description, actionLabel, onAction, onClose, icon, ...props }, ref) => {
    const [isVisible, setIsVisible] = React.useState(true);
    const IconComponent = icon || iconMap[variant || "primary"];
    const iconColor = iconColorMap[variant || "primary"];

    const handleClose = () => {
      setIsVisible(false);
      setTimeout(() => {
        onClose?.();
      }, 300);
    };

    if (!isVisible) return null;

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(alertVariants({ variant }), className)}
        {...props}
      >
        {/* Icon */}
        <div className="flex-shrink-0">
          <IconComponent size={20} color={iconColor} />
        </div>

        {/* Content */}
        <div className="flex-1 space-y-2">
          <AlertTitle variant={variant}>{title}</AlertTitle>
          {description && <AlertDescription>{description}</AlertDescription>}
          {actionLabel && onAction && (
            <div className="pt-0.5">
              <Button
                mode="plain"
                onClick={onAction}
                className="p-0 h-auto font-medium text-neutral-500 hover:text-neutral-700 underline decoration-2 underline-offset-4 transition-colors"
              >
                {actionLabel}
              </Button>
            </div>
          )}
        </div>

        {/* Divider + Close Button */}
        {onClose && (
          <>
            <div className="self-stretch border-l border-neutral-300 -my-4 mx-3" />
            <button
              onClick={handleClose}
              className="flex-shrink-0 text-neutral-500 hover:text-neutral-700 transition-colors"
              aria-label="Fechar alerta"
            >
              <X size={18} />
            </button>
          </>
        )}
      </div>
    );
  }
);
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement> & { variant?: string }
>(({ className, variant = "primary", ...props }, ref) => {
  const titleColor = titleColorMap[variant as keyof typeof titleColorMap];
  
  return (
    <h5
      ref={ref}
      className={cn("font-medium leading-tight tracking-tight", titleColor, className)}
      {...props}
    />
  );
});
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm leading-relaxed text-neutral-500", className)}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };
