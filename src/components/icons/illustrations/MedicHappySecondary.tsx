import { IllustrationProps } from "./Illustration";
import MedicHappySecondarySvg from "../../../assets/illustrations/medic-happy-secondary.svg";

export const MedicHappySecondary: React.FC<IllustrationProps> = ({ 
  width = 208, 
  height = 240,
  className,
  ...props 
}) => {
  return (
    <img 
      src={MedicHappySecondarySvg} 
      alt="Medic Happy Secondary" 
      width={width} 
      height={height}
      className={className}
      {...props}
    />
  );
};

MedicHappySecondary.displayName = "MedicHappySecondary";
