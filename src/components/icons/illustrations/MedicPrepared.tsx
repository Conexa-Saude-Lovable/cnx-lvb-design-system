import { IllustrationProps } from "./Illustration";
import MedicPreparedSvg from "@/assets/illustrations/medic-prepared.svg";

export const MedicPrepared: React.FC<IllustrationProps> = ({ 
  width = 201, 
  height = 240,
  className,
  ...props 
}) => {
  return (
    <img 
      src={MedicPreparedSvg} 
      alt="Medic Prepared" 
      width={width} 
      height={height}
      className={className}
      {...props}
    />
  );
};

MedicPrepared.displayName = "MedicPrepared";
