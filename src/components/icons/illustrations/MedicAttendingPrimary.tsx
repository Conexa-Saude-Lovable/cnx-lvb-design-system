import { IllustrationProps } from "./Illustration";
import MedicAttendingPrimarySvg from "@/assets/illustrations/medic-attending-primary.svg";

export const MedicAttendingPrimary: React.FC<IllustrationProps> = ({ 
  width = 213, 
  height = 240,
  className,
  ...props 
}) => {
  return (
    <img 
      src={MedicAttendingPrimarySvg} 
      alt="Medic Attending Primary" 
      width={width} 
      height={height}
      className={className}
      {...props}
    />
  );
};

MedicAttendingPrimary.displayName = "MedicAttendingPrimary";
