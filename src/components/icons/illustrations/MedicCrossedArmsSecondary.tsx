import { IllustrationProps } from "./Illustration";
import MedicCrossedArmsSecondarySvg from "@/assets/illustrations/medic-crossed-arms-secondary.svg";

export const MedicCrossedArmsSecondary: React.FC<IllustrationProps> = ({ 
  width = 209, 
  height = 240,
  className,
  ...props 
}) => {
  return (
    <img 
      src={MedicCrossedArmsSecondarySvg} 
      alt="Medic Crossed Arms Secondary" 
      width={width} 
      height={height}
      className={className}
      {...props}
    />
  );
};

MedicCrossedArmsSecondary.displayName = "MedicCrossedArmsSecondary";
