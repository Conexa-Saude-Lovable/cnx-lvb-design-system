import { IconComponent } from "./Icon";

export const AnalyticsTwo: IconComponent = ({ size = 24, color = "currentColor", className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    fill="none" 
    viewBox="0 0 24 24"
    className={className}
  >
    <path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 17V8a1 1 0 0 1 1-1h5v10"/>
    <path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h5M3 21h18"/>
  </svg>
);
