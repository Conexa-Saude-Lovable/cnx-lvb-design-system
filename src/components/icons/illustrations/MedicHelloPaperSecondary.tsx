import { IllustrationProps } from "./Illustration";
import MedicHelloPaperSecondarySvg from "../../../assets/illustrations/medic-hello-paper-secondary.svg";

export const MedicHelloPaperSecondary: React.FC<IllustrationProps> = ({ 
  width = 208, 
  height = 240,
  className,
  ...props 
}) => {
  return (
    <img 
      src={MedicHelloPaperSecondarySvg} 
      alt="Medic Hello Paper Secondary" 
      width={width} 
      height={height}
      className={className}
      {...props}
    />
  );
};

MedicHelloPaperSecondary.displayName = "MedicHelloPaperSecondary";
