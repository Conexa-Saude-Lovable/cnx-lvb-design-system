import { IllustrationProps } from "./Illustration";
import MedicAccompanyingPrimarySvg from "@/assets/illustrations/medic-accompanying-primary.svg";

export const MedicAccompanyingPrimary: React.FC<IllustrationProps> = ({ 
  width = 201, 
  height = 240,
  className,
  ...props 
}) => {
  return (
    <img 
      src={MedicAccompanyingPrimarySvg} 
      alt="Medic Accompanying Primary" 
      width={width} 
      height={height}
      className={className}
      {...props}
    />
  );
};

MedicAccompanyingPrimary.displayName = "MedicAccompanyingPrimary";
