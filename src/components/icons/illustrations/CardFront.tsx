import { IllustrationProps } from "./Illustration";
import CardFrontSvg from "../../../assets/illustrations/card-front.svg";

export const CardFront: React.FC<IllustrationProps> = ({ 
  width = 520, 
  height = 240,
  className,
  ...props 
}) => {
  return (
    <img 
      src={CardFrontSvg} 
      alt="Card Front" 
      width={width} 
      height={height}
      className={className}
      {...props}
    />
  );
};

CardFront.displayName = "CardFront";
