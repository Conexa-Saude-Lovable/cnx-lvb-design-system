import { IllustrationProps } from "./Illustration";
import DoctorsSvg from "../../../assets/illustrations/doctors.svg";

export const Doctors: React.FC<IllustrationProps> = ({ 
  width = 399, 
  height = 240,
  className,
  ...props 
}) => {
  return (
    <img 
      src={DoctorsSvg} 
      alt="Doctors" 
      width={width} 
      height={height}
      className={className}
      {...props}
    />
  );
};

Doctors.displayName = "Doctors";
