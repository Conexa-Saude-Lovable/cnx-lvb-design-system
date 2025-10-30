import { IllustrationProps } from "./Illustration";
import MedicCrossedArmsPrimarySvg from "../../../assets/illustrations/medic-crossed-arms-primary.svg";

export const MedicCrossedArmsPrimary: React.FC<IllustrationProps> = ({ 
  width = 201, 
  height = 241,
  className,
  ...props 
}) => {
  return (
    <img 
      src={MedicCrossedArmsPrimarySvg} 
      alt="Medic Crossed Arms Primary" 
      width={width} 
      height={height}
      className={className}
      {...props}
    />
  );
};

MedicCrossedArmsPrimary.displayName = "MedicCrossedArmsPrimary";
