import { IllustrationProps } from "./Illustration";
import MedicExplainingSvg from "@/assets/illustrations/medic-explaining.svg";

export const MedicExplaining: React.FC<IllustrationProps> = ({ 
  width = 211, 
  height = 240,
  className,
  ...props 
}) => {
  return (
    <img 
      src={MedicExplainingSvg} 
      alt="Medic Explaining" 
      width={width} 
      height={height}
      className={className}
      {...props}
    />
  );
};

MedicExplaining.displayName = "MedicExplaining";
