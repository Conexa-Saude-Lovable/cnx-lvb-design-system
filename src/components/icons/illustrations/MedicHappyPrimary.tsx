import { IllustrationProps } from "./Illustration";
import MedicHappyPrimarySvg from "@/assets/illustrations/medic-happy-primary.svg";

export const MedicHappyPrimary: React.FC<IllustrationProps> = ({ 
  width = 201, 
  height = 240,
  className,
  ...props 
}) => {
  return (
    <img 
      src={MedicHappyPrimarySvg} 
      alt="Medic Happy Primary" 
      width={width} 
      height={height}
      className={className}
      {...props}
    />
  );
};

MedicHappyPrimary.displayName = "MedicHappyPrimary";
