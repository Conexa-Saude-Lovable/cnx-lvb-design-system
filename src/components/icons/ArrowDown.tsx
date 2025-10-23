import { createIcon } from "./Icon";

export const ArrowDown = createIcon(
  "ArrowDown",
  "0 0 24 24",
  (color: string) => (
    <>
      <path
        fill={color}
        fillRule="evenodd"
        d="M7.231 9.24a.77.77 0 0 1 1.117 0L12 13.025l3.652-3.785a.77.77 0 0 1 1.117 0 .84.84 0 0 1 0 1.157l-4.21 4.363a.77.77 0 0 1-1.117 0l-4.21-4.363a.84.84 0 0 1 0-1.157"
      />
    </>
  )
);
