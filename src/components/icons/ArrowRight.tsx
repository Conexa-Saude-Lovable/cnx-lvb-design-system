import { createIcon } from "./Icon";

export const ArrowRight = createIcon(
  "ArrowRight",
  "0 0 24 24",
  (color: string) => (
    <>
      <path
        fill={color}
        fillRule="evenodd"
        d="M9.24 7.231a.84.84 0 0 1 1.157 0l4.363 4.21a.77.77 0 0 1 0 1.117l-4.363 4.21a.84.84 0 0 1-1.157 0 .77.77 0 0 1 0-1.116L13.025 12 9.24 8.348a.77.77 0 0 1 0-1.117"
      />
    </>
  )
);
