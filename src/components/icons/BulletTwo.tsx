import { IconComponent } from "./Icon";

export const BulletTwo: IconComponent = ({ size = 24, color = "currentColor", className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    fill="none" 
    viewBox="0 0 24 24"
    className={className}
  >
    <path fill={color} fillRule="evenodd" d="M16.243 7.757a6 6 0 1 1-8.485 8.486 6 6 0 0 1 8.485-8.486"/>
  </svg>
);
