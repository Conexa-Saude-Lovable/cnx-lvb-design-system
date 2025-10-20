import { IllustrationProps } from "./Illustration";
import HealthTeamSvg from "@/assets/illustrations/health-team.svg";

export const HealthTeam: React.FC<IllustrationProps> = ({ 
  width = 769, 
  height = 248,
  className,
  ...props 
}) => {
  return (
    <img 
      src={HealthTeamSvg} 
      alt="Health Team" 
      width={width} 
      height={height}
      className={className}
      {...props}
    />
  );
};

HealthTeam.displayName = "HealthTeam";
