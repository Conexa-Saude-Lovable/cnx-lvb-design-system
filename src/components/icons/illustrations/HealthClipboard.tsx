import { IllustrationProps } from "./Illustration";
import HealthClipboardSvg from "@/assets/illustrations/health-clipboard.svg";

export const HealthClipboard: React.FC<IllustrationProps> = ({ 
  width = 241, 
  height = 297,
  className,
  ...props 
}) => {
  return (
    <img 
      src={HealthClipboardSvg} 
      alt="Health Clipboard" 
      width={width} 
      height={height}
      className={className}
      {...props}
    />
  );
};

HealthClipboard.displayName = "HealthClipboard";
