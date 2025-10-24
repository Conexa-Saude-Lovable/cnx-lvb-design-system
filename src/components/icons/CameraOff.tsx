import { IconComponent } from "./Icon";

export const CameraOff: IconComponent = ({ size = 24, color = "currentColor", className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    fill="none" 
    viewBox="0 0 24 24"
    className={className}
  >
    <path fill={color} fillRule="evenodd" d="M2.81 2.886a.75.75 0 0 1 1.044.184l11.9 17a.75.75 0 1 1-1.228.86l-11.9-17a.75.75 0 0 1 .184-1.044"/>
    <path fill={color} fillRule="evenodd" d="M3 7.75a.75.75 0 0 1 .75.75v7a1.5 1.5 0 0 0 1.5 1.5h7.962a.75.75 0 0 1 0 1.5H5.25a3 3 0 0 1-3-3v-7A.75.75 0 0 1 3 7.75m1.412-1.5a.75.75 0 0 1 .75-.75h7.963a3 3 0 0 1 3 3v7a.75.75 0 0 1-1.5 0v-7a1.5 1.5 0 0 0-1.5-1.5H5.162a.75.75 0 0 1-.75-.75"/>
    <path fill={color} fillRule="evenodd" d="M18.7 7.265c1.227-.989 3.05-.114 3.05 1.46v6.55c0 1.574-1.823 2.449-3.05 1.46l-3.795-3.054a.75.75 0 1 1 .94-1.168l3.795 3.054c.245.197.61.024.61-.292v-6.55a.374.374 0 0 0-.61-.292l-3.795 3.054a.75.75 0 1 1-.94-1.168z"/>
  </svg>
);
