import { useToast } from "../../hooks/use-toast";
import { 
  Toast, 
  ToastClose, 
  ToastDescription, 
  ToastProvider, 
  ToastTitle, 
  ToastViewport,
  iconMap,
  iconColorMap,
  borderColorMap,
} from "./toast";
import { cn } from "../../lib/utils";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, variant = "primary", ...props }) {
        const IconComponent = iconMap[variant];
        const iconColor = iconColorMap[variant];
        const borderColor = borderColorMap[variant];

        return (
          <Toast key={id} variant={variant} {...props}>
            {/* Icon */}
            <div className="flex-shrink-0 pt-0.5">
              <IconComponent size={20} color={iconColor} />
            </div>

            {/* Content */}
            <div className="flex-1 space-y-1">
              {title && <ToastTitle variant={variant}>{title}</ToastTitle>}
              
              {/* Description + Action (responsive layout) */}
              <div className="flex flex-col md:flex-row md:items-center md:gap-2">
                {description && (
                  <ToastDescription className="flex-1">
                    {description}
                  </ToastDescription>
                )}
                {action}
              </div>
            </div>

            {/* Divider + Close Button */}
            <div className={cn("self-stretch border-l -my-4 ml-3 mr-[2px]", borderColor)} />
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
