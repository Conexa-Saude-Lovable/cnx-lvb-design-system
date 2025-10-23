import { createIcon } from "./Icon";

export const ArrowUp = createIcon(
  "ArrowUp",
  "0 0 24 24",
  (color: string) => (
    <>
      <path
        fill={color}
        fillRule="evenodd"
        d="M11.442 9.24a.77.77 0 0 1 1.116 0l4.21 4.363a.84.84 0 0 1 0 1.157.77.77 0 0 1-1.116 0L12 10.975 8.348 14.76a.77.77 0 0 1-1.117 0 .84.84 0 0 1 0-1.157z"
      />
    </>
  )
);
