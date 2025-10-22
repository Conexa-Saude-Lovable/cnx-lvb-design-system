import { IllustrationProps } from "./Illustration";
import MedicScreeningPrimarySvg from "@/assets/illustrations/medic-screening-primary.svg";

export const MedicScreeningPrimary: React.FC<IllustrationProps> = ({ 
  width = 201, 
  height = 240,
  className,
  ...props 
}) => {
  return (
    <img 
      src={MedicScreeningPrimarySvg} 
      alt="Medic Screening Primary" 
      width={width} 
      height={height}
      className={className}
      {...props}
    />
  );
};

MedicScreeningPrimary.displayName = "MedicScreeningPrimary";
