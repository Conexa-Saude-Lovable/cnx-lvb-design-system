import { IllustrationProps } from "./Illustration";
import ManMoneySvg from "../../../assets/illustrations/man-money.svg";

export const ManMoney: React.FC<IllustrationProps> = ({ 
  width = 241, 
  height = 240,
  className,
  ...props 
}) => {
  return (
    <img 
      src={ManMoneySvg} 
      alt="Man with Money" 
      width={width} 
      height={height}
      className={className}
      {...props}
    />
  );
};

ManMoney.displayName = "ManMoney";
