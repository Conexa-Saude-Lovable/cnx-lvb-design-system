import { IllustrationProps } from "./Illustration";
import WomanPhoneSvg from "../../../assets/illustrations/woman-phone-notification.svg";

export const WomanPhoneNotification: React.FC<IllustrationProps> = ({ 
  width = 102, 
  height = 150,
  className,
  ...props 
}) => {
  return (
    <img 
      src={WomanPhoneSvg} 
      alt="Woman with Phone Notification" 
      width={width} 
      height={height}
      className={className}
      {...props}
    />
  );
};

WomanPhoneNotification.displayName = "WomanPhoneNotification";
