import { IllustrationProps } from "./Illustration";
import MedicNegativeSvg from "../../../assets/illustrations/medic-negative.svg";

export const MedicNegative: React.FC<IllustrationProps> = ({ 
  width = 240, 
  height = 240,
  className,
  ...props 
}) => {
  return (
    <img 
      src={MedicNegativeSvg} 
      alt="Medic Negative" 
      width={width} 
      height={height}
      className={className}
      {...props}
    />
  );
};

MedicNegative.displayName = "MedicNegative";
