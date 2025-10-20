import { ImgHTMLAttributes } from "react";

export interface IllustrationProps extends ImgHTMLAttributes<HTMLImageElement> {
  width?: number | string;
  height?: number | string;
}

export type IllustrationComponent = React.FC<IllustrationProps>;
