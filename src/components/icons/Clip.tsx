import { IconComponent } from "./Icon";

export const Clip: IconComponent = ({ size = 24, color = "currentColor", className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    fill="none" 
    viewBox="0 0 24 24"
    className={className}
  >
    <path fill={color} fillRule="evenodd" d="M12.6 3.605a4.629 4.629 0 1 1 6.547 6.546l-7.232 7.232a2.866 2.866 0 0 1-4.052-4.052l5.486-5.486a.75.75 0 1 1 1.06 1.06l-5.486 5.486a1.366 1.366 0 0 0 1.932 1.932l7.232-7.232a3.13 3.13 0 1 0-4.426-4.426L6.43 11.897a4.892 4.892 0 1 0 6.92 6.92l4.389-4.39a.75.75 0 1 1 1.06 1.061l-4.389 4.39a6.39 6.39 0 0 1-9.04 0 6.39 6.39 0 0 1 0-9.041z"/>
  </svg>
);
