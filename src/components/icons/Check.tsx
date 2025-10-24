import { IconComponent } from "./Icon";

export const Check: IconComponent = ({ size = 24, color = "currentColor", className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    fill="none" 
    viewBox="0 0 24 24"
    className={className}
  >
    <path fill={color} fillRule="evenodd" d="M20.774 5.728a.786.786 0 0 1 0 1.104L9.46 18.272a.765.765 0 0 1-1.091 0l-5.143-5.2a.786.786 0 0 1 0-1.103.765.765 0 0 1 1.09 0l4.598 4.648 10.77-10.889a.765.765 0 0 1 1.09 0" clipRule="evenodd"/>
  </svg>
);
