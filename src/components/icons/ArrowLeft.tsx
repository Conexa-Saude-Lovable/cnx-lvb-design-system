import { createIcon } from "./Icon";

export const ArrowLeft = createIcon(
  "ArrowLeft",
  "0 0 24 24",
  (color: string) => (
    <>
      <path
        fill={color}
        fillRule="evenodd"
        d="M14.76 7.231a.77.77 0 0 1 0 1.117L10.975 12l3.785 3.652a.77.77 0 0 1 0 1.117.84.84 0 0 1-1.157 0l-4.363-4.21a.77.77 0 0 1 0-1.117l4.363-4.21a.84.84 0 0 1 1.157 0"
      />
    </>
  )
);
