import { IconComponent } from "./Icon";

export const ArrowRightTwo: IconComponent = ({ size = 24, color = "currentColor", className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    fill="none" 
    viewBox="0 0 24 24"
    className={className}
  >
    <path fill={color} fillRule="evenodd" d="M9.24 7.231a.84.84 0 0 1 1.157 0l4.363 4.21a.77.77 0 0 1 0 1.117l-4.363 4.21a.84.84 0 0 1-1.157 0 .77.77 0 0 1 0-1.116L13.025 12 9.24 8.348a.77.77 0 0 1 0-1.117"/>
  </svg>
);
