import { IllustrationProps } from "./Illustration";
import HealthSearchSvg from "@/assets/illustrations/health-search.svg";

export const HealthSearch: React.FC<IllustrationProps> = ({ 
  width = 241, 
  height = 238,
  className,
  ...props 
}) => {
  return (
    <img 
      src={HealthSearchSvg} 
      alt="Health Search" 
      width={width} 
      height={height}
      className={className}
      {...props}
    />
  );
};

HealthSearch.displayName = "HealthSearch";
