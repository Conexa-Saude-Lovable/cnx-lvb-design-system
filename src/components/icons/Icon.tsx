import { SVGProps } from "react";

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, "width" | "height"> {
  size?: number | string;
  color?: string;
}

export type IconComponent = React.FC<IconProps>;

export const createIcon = (
  displayName: string,
  viewBox: string,
  pathsRenderer: (color: string) => React.ReactNode
): IconComponent => {
  const Icon: IconComponent = ({ size = 24, color = "currentColor", className, ...props }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox={viewBox}
        fill="none"
        className={className}
        {...props}
      >
        {pathsRenderer(color)}
      </svg>
    );
  };

  Icon.displayName = displayName;
  return Icon;
};
