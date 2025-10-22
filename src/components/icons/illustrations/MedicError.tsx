import { IllustrationProps } from "./Illustration";
import MedicErrorSvg from "@/assets/illustrations/medic-error.svg";

export const MedicError: React.FC<IllustrationProps> = ({ 
  width = 241, 
  height = 240,
  className,
  ...props 
}) => {
  return (
    <img 
      src={MedicErrorSvg} 
      alt="Medic Error" 
      width={width} 
      height={height}
      className={className}
      {...props}
    />
  );
};

MedicError.displayName = "MedicError";
