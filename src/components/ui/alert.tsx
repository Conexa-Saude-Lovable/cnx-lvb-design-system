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
        success: "bg-feedback-success-100 border-feedback-success-300 text-feedback-success-400",
        information: "bg-feedback-info-100 border-feedback-info-300 text-feedback-info-400",
        warning: "bg-feedback-warning-100 border-feedback-warning-300 text-feedback-warning-400",
        error: "bg-feedback-error-100 border-feedback-error-300 text-feedback-error-400",
        default: "bg-neutral-200 border-neutral-300 text-neutral-700",
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
  success: "hsl(var(--feedback-success-300))",
  information: "hsl(var(--feedback-info-300))",
  warning: "hsl(var(--feedback-warning-300))",
  error: "hsl(var(--feedback-error-300))",
  default: "hsl(var(--neutral-400))",
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
          <AlertTitle>{title}</AlertTitle>
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

        {/* Close Button */}
        {onClose && (
          <button
            onClick={handleClose}
            className="flex-shrink-0 text-current opacity-70 hover:opacity-100 hover:scale-110 transition-all"
            aria-label="Fechar alerta"
          >
            <X size={18} />
          </button>
        )}
      </div>
    );
  }
);
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("font-semibold leading-tight tracking-tight", className)}
    {...props}
  />
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm leading-relaxed opacity-90", className)}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };
