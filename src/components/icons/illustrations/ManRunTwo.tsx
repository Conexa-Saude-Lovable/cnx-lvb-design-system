import { IllustrationProps } from "./Illustration";
import ManRunTwoSvg from "@/assets/illustrations/man-run-2.svg";

export const ManRunTwo: React.FC<IllustrationProps> = ({ 
  width = 205, 
  height = 242,
  className,
  ...props 
}) => {
  return (
    <img 
      src={ManRunTwoSvg} 
      alt="Man Running Two" 
      width={width} 
      height={height}
      className={className}
      {...props}
    />
  );
};

ManRunTwo.displayName = "ManRunTwo";
