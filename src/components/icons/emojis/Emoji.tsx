import { SVGProps } from "react";

export interface EmojiProps extends Omit<SVGProps<SVGSVGElement>, "width" | "height"> {
  size?: number | string;
}

export type EmojiComponent = React.FC<EmojiProps>;

export const createEmoji = (
  displayName: string,
  viewBox: string,
  defaultSize: number,
  paths: React.ReactNode
): EmojiComponent => {
  const Emoji: EmojiComponent = ({ size = defaultSize, className, ...props }) => {
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
        {paths}
      </svg>
    );
  };

  Emoji.displayName = displayName;
  return Emoji;
};
