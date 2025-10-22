import { IllustrationProps } from "./Illustration";
import ManTalkingTwoSvg from "@/assets/illustrations/man-talking-2.svg";

export const ManTalkingTwo: React.FC<IllustrationProps> = ({ 
  width = 241, 
  height = 240,
  className,
  ...props 
}) => {
  return (
    <img 
      src={ManTalkingTwoSvg} 
      alt="Man Talking Two" 
      width={width} 
      height={height}
      className={className}
      {...props}
    />
  );
};

ManTalkingTwo.displayName = "ManTalkingTwo";
