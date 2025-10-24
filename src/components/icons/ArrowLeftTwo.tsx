import { IconComponent } from "./Icon";

export const ArrowLeftTwo: IconComponent = ({ size = 24, color = "currentColor", className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    fill="none" 
    viewBox="0 0 24 24"
    className={className}
  >
    <path fill={color} fillRule="evenodd" d="M14.76 7.231a.77.77 0 0 1 0 1.117L10.975 12l3.785 3.652a.77.77 0 0 1 0 1.117.84.84 0 0 1-1.157 0l-4.363-4.21a.77.77 0 0 1 0-1.117l4.363-4.21a.84.84 0 0 1 1.157 0"/>
  </svg>
);
