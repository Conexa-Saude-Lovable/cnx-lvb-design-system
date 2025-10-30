import { IllustrationProps } from "./Illustration";
import MedicCalendarSvg from "../../../assets/illustrations/medic-calendar.svg";

export const MedicCalendar: React.FC<IllustrationProps> = ({ 
  width = 240, 
  height = 240,
  className,
  ...props 
}) => {
  return (
    <img 
      src={MedicCalendarSvg} 
      alt="Medic Calendar" 
      width={width} 
      height={height}
      className={className}
      {...props}
    />
  );
};

MedicCalendar.displayName = "MedicCalendar";
