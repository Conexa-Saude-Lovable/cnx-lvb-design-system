import { IllustrationProps } from "./Illustration";
import ManAdvocateSvg from "../../../assets/illustrations/man-advocate.svg";

export const ManAdvocate: React.FC<IllustrationProps> = ({ 
  width = 241, 
  height = 240,
  className,
  ...props 
}) => {
  return (
    <img 
      src={ManAdvocateSvg} 
      alt="Man Advocate" 
      width={width} 
      height={height}
      className={className}
      {...props}
    />
  );
};

ManAdvocate.displayName = "ManAdvocate";
