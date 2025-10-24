import { IconComponent } from "./Icon";

export const AlarmTwo: IconComponent = ({ size = 24, color = "currentColor", className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    fill="none" 
    viewBox="0 0 24 25"
    className={className}
  >
    <path fill={color} fillRule="evenodd" d="M12 9.417a3.25 3.25 0 0 0-3.25 3.25v4a.75.75 0 0 1-1.5 0v-4a4.75 4.75 0 0 1 9.5 0v4a.75.75 0 0 1-1.5 0v-4A3.25 3.25 0 0 0 12 9.417m0-6.5a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75m-6.93 2.82a.75.75 0 0 1 1.06 0l.7.7a.75.75 0 0 1-1.06 1.06l-.7-.7a.75.75 0 0 1 0-1.06m13.86 0a.75.75 0 0 1 0 1.06l-.7.7a.75.75 0 1 1-1.06-1.06l.7-.7a.75.75 0 0 1 1.06 0m-16.68 6.93a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m17 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75" clipRule="evenodd"/>
    <path fill={color} fillRule="evenodd" d="M5.25 17.667c0-.967.784-1.75 1.75-1.75h10c.966 0 1.75.783 1.75 1.75v2a1.75 1.75 0 0 1-1.75 1.75H7a1.75 1.75 0 0 1-1.75-1.75zm1.75-.25a.25.25 0 0 0-.25.25v2c0 .138.112.25.25.25h10a.25.25 0 0 0 .25-.25v-2a.25.25 0 0 0-.25-.25z" clipRule="evenodd"/>
  </svg>
);
