import { IllustrationProps } from "./Illustration";
import MedicAttendingSecondarySvg from "@/assets/illustrations/medic-attending-secondary.svg";

export const MedicAttendingSecondary: React.FC<IllustrationProps> = ({ 
  width = 213, 
  height = 240,
  className,
  ...props 
}) => {
  return (
    <img 
      src={MedicAttendingSecondarySvg} 
      alt="Medic Attending Secondary" 
      width={width} 
      height={height}
      className={className}
      {...props}
    />
  );
};

MedicAttendingSecondary.displayName = "MedicAttendingSecondary";
