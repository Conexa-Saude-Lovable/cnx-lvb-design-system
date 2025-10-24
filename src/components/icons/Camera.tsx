import { IconComponent } from "./Icon";

export const Camera: IconComponent = ({ size = 24, color = "currentColor", className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    fill="none" 
    viewBox="0 0 26 21"
    className={className}
  >
    <circle cx="13" cy="11.286" r="3.857" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
    <path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6.571 4.429H4.43A3.43 3.43 0 0 0 1 7.857v8.572a3.43 3.43 0 0 0 3.429 3.428H21.57A3.43 3.43 0 0 0 25 16.43V7.857a3.43 3.43 0 0 0-3.429-3.428H19.43a.86.86 0 0 1-.686-.343L17.457 2.37A3.43 3.43 0 0 0 14.714 1h-3.428c-1.08 0-2.096.508-2.743 1.371L7.257 4.086a.86.86 0 0 1-.686.343" clipRule="evenodd"/>
  </svg>
);
