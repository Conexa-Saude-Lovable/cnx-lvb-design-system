import { IllustrationProps } from "./Illustration";
import ManRunSvg from "../../../assets/illustrations/man-run.svg";

export const ManRun: React.FC<IllustrationProps> = ({ 
  width = 205, 
  height = 242,
  className,
  ...props 
}) => {
  return (
    <img 
      src={ManRunSvg} 
      alt="Man Running" 
      width={width} 
      height={height}
      className={className}
      {...props}
    />
  );
};

ManRun.displayName = "ManRun";
