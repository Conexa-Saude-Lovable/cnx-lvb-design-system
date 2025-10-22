import { IllustrationProps } from "./Illustration";
import MedicClockSvg from "@/assets/illustrations/medic-clock.svg";

export const MedicClock: React.FC<IllustrationProps> = ({ 
  width = 212, 
  height = 240,
  className,
  ...props 
}) => {
  return (
    <img 
      src={MedicClockSvg} 
      alt="Medic Clock" 
      width={width} 
      height={height}
      className={className}
      {...props}
    />
  );
};

MedicClock.displayName = "MedicClock";
