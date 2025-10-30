import { IllustrationProps } from "./Illustration";
import ManHoldingPhoneSvg from "../../../assets/illustrations/man-holding-phone.svg";

export const ManHoldingPhone: React.FC<IllustrationProps> = ({ 
  width = 218, 
  height = 240,
  className,
  ...props 
}) => {
  return (
    <img 
      src={ManHoldingPhoneSvg} 
      alt="Man Holding Phone" 
      width={width} 
      height={height}
      className={className}
      {...props}
    />
  );
};

ManHoldingPhone.displayName = "ManHoldingPhone";
