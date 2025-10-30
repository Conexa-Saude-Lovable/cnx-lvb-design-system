import { IllustrationProps } from "./Illustration";
import MedicAccompanyingSecondarySvg from "../../../assets/illustrations/medic-accompanying-secondary.svg";

export const MedicAccompanyingSecondary: React.FC<IllustrationProps> = ({ 
  width = 209, 
  height = 240,
  className,
  ...props 
}) => {
  return (
    <img 
      src={MedicAccompanyingSecondarySvg} 
      alt="Medic Accompanying Secondary" 
      width={width} 
      height={height}
      className={className}
      {...props}
    />
  );
};

MedicAccompanyingSecondary.displayName = "MedicAccompanyingSecondary";
