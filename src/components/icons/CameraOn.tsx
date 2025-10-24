import { IconComponent } from "./Icon";

export const CameraOn: IconComponent = ({ size = 24, color = "currentColor", className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    fill="none" 
    viewBox="0 0 24 24"
    className={className}
  >
    <path fill={color} fillRule="evenodd" d="M5.2 7.5A1.5 1.5 0 0 0 3.7 9v7a1.5 1.5 0 0 0 1.5 1.5h7.875a1.5 1.5 0 0 0 1.5-1.5V9a1.5 1.5 0 0 0-1.5-1.5zM2.2 9a3 3 0 0 1 3-3h7.875a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H5.2a3 3 0 0 1-3-3z"/>
    <path fill={color} fillRule="evenodd" d="M18.65 7.765c1.227-.989 3.05-.114 3.05 1.46v6.55c0 1.574-1.823 2.449-3.05 1.46l-3.795-3.054a.75.75 0 1 1 .94-1.168l3.795 3.054c.245.197.61.023.61-.292v-6.55a.374.374 0 0 0-.61-.292l-3.795 3.054a.75.75 0 1 1-.94-1.168z"/>
  </svg>
);
