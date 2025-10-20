import { IllustrationProps } from "./Illustration";
import ManTalkingSvg from "@/assets/illustrations/man-talking.svg";

export const ManTalking: React.FC<IllustrationProps> = ({ 
  width = 241, 
  height = 240,
  className,
  ...props 
}) => {
  return (
    <img 
      src={ManTalkingSvg} 
      alt="Man Talking" 
      width={width} 
      height={height}
      className={className}
      {...props}
    />
  );
};

ManTalking.displayName = "ManTalking";
