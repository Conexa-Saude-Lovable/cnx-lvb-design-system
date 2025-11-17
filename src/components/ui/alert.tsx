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
        default: "bg-brand-primary-100 border-brand-primary-300",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const iconMap = {
  success: Check,
  information: Bulb,
  warning: Ring,
  error: DoubleCheck,
  default: Bulb,
};

const iconColorMap = {
  success: "hsl(var(--feedback-success-400))",
  information: "hsl(var(--feedback-info-400))",
  warning: "hsl(var(--feedback-warning-400))",
  error: "hsl(var(--feedback-error-400))",
  default: "hsl(var(--brand-primary-400))",
};

const titleColorMap = {
  success: "text-feedback-success-500",
  information: "text-feedback-info-500",
  warning: "text-feedback-warning-500",
  error: "text-feedback-error-500",
  default: "text-brand-primary-500",
};

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  title: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
  onClose?: () => void;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant = "default", title, description, actionLabel, onAction, onClose, ...props }, ref) => {
    const [isVisible, setIsVisible] = React.useState(true);
    const IconComponent = iconMap[variant || "default"];
    const iconColor = iconColorMap[variant || "default"];

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
        <div className="flex-shrink-0 pt-0.5">
          <IconComponent size={20} color={iconColor} />
        </div>

        {/* Content */}
        <div className="flex-1 space-y-2">
          <AlertTitle variant={variant}>{title}</AlertTitle>
          {description && <AlertDescription>{description}</AlertDescription>}
          {actionLabel && onAction && (
            <div className="pt-1">
              <Button
                mode="plain"
                onClick={onAction}
                className="p-0 h-auto font-medium underline decoration-2 underline-offset-4 hover:no-underline transition-all"
              >
                {actionLabel}
              </Button>
            </div>
          )}
        </div>

        {/* Divider + Close Button */}
        {onClose && (
          <div className="flex items-start gap-3 ml-3 pl-3 border-l border-neutral-300">
            <button
              onClick={handleClose}
              className="flex-shrink-0 text-neutral-500 hover:text-neutral-700 transition-colors"
              aria-label="Fechar alerta"
            >
              <X size={18} />
            </button>
          </div>
        )}
      </div>
    );
  }
);
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement> & { variant?: string }
>(({ className, variant = "default", ...props }, ref) => {
  const titleColor = titleColorMap[variant as keyof typeof titleColorMap];
  
  return (
    <h5
      ref={ref}
      className={cn("font-semibold leading-tight tracking-tight", titleColor, className)}
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
