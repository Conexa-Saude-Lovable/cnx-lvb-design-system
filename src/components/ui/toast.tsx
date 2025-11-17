import * as React from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cva, type VariantProps } from "class-variance-authority";
import { X, CheckCircle2, AlertCircle, AlertTriangle, Info } from "lucide-react";
import { Check, Bulb, Ring, DoubleCheck } from "../icons";
import { cn } from "../../lib/utils";

const ToastProvider = ToastPrimitives.Provider;

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "fixed top-4 right-4 z-[100] flex max-h-screen w-full flex-col gap-2 p-4 md:max-w-[420px]",
      className,
    )}
    {...props}
  />
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

const iconMap = {
  success: Check,
  information: Bulb,
  warning: Ring,
  error: DoubleCheck,
  primary: Check,
};

const iconColorMap = {
  success: "#10B981",
  information: "#3B82F6",
  warning: "#F59E0B",
  error: "#EF4444",
  primary: "#8B5CF6",
};

const borderColorMap = {
  success: "border-feedback-success-300",
  information: "border-feedback-info-300",
  warning: "border-feedback-warning-300",
  error: "border-feedback-error-300",
  primary: "border-brand-primary-300",
};

const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-start gap-3 overflow-hidden rounded-lg border p-4 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full",
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
  },
);

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> & 
    VariantProps<typeof toastVariants> & {
      onClose?: () => void;
    }
>(({ className, variant = "primary", onClose, children, ...props }, ref) => {
  return (
    <ToastPrimitives.Root 
      ref={ref} 
      className={cn(toastVariants({ variant }), className)} 
      {...props}
    >
      {children}
    </ToastPrimitives.Root>
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      "inline-flex shrink-0 items-center justify-center rounded-md p-0 h-auto font-medium text-sm text-neutral-500 hover:text-neutral-700 underline decoration-2 underline-offset-4 transition-colors mt-2 md:mt-0",
      className,
    )}
    {...props}
  />
));
ToastAction.displayName = ToastPrimitives.Action.displayName;

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      "flex-shrink-0 self-center ml-[2px] text-neutral-300 hover:text-neutral-500 transition-colors",
      className,
    )}
    toast-close=""
    {...props}
  >
    <X size={18} />
  </ToastPrimitives.Close>
));
ToastClose.displayName = ToastPrimitives.Close.displayName;

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description 
    ref={ref} 
    className={cn("text-sm text-neutral-500", className)} 
    {...props} 
  />
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;

type ToastActionElement = React.ReactElement<typeof ToastAction>;

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastDescription,
  ToastClose,
  ToastAction,
  iconMap,
  iconColorMap,
  borderColorMap,
};
