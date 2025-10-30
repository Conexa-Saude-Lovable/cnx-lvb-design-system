import { IllustrationProps } from "./Illustration";
import MedicHelloPaperPrimarySvg from "../../../assets/illustrations/medic-hello-paper-primary.svg";

export const MedicHelloPaperPrimary: React.FC<IllustrationProps> = ({ 
  width = 201, 
  height = 240,
  className,
  ...props 
}) => {
  return (
    <img 
      src={MedicHelloPaperPrimarySvg} 
      alt="Medic Hello Paper Primary" 
      width={width} 
      height={height}
      className={className}
      {...props}
    />
  );
};

MedicHelloPaperPrimary.displayName = "MedicHelloPaperPrimary";
