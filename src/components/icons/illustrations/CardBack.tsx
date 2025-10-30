import { IllustrationProps } from "./Illustration";
import CardBackSvg from "../../../assets/illustrations/card-back.svg";

export const CardBack: React.FC<IllustrationProps> = ({ 
  width = 520, 
  height = 240,
  className,
  ...props 
}) => {
  return (
    <img 
      src={CardBackSvg} 
      alt="Card Back" 
      width={width} 
      height={height}
      className={className}
      {...props}
    />
  );
};

CardBack.displayName = "CardBack";
