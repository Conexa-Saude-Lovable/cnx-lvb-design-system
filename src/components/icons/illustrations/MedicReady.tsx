import { IllustrationProps } from "./Illustration";
import MedicReadySvg from "../../../assets/illustrations/medic-ready.svg";

export const MedicReady: React.FC<IllustrationProps> = ({ 
  width = 201, 
  height = 240,
  className,
  ...props 
}) => {
  return (
    <img 
      src={MedicReadySvg} 
      alt="Medic Ready" 
      width={width} 
      height={height}
      className={className}
      {...props}
    />
  );
};

MedicReady.displayName = "MedicReady";
