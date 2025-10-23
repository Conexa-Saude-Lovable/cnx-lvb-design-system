import { createIcon } from "./Icon";

export const Back = createIcon(
  "Back",
  "0 0 24 24",
  (color: string) => (
    <>
      <path
        fill={color}
        fillRule="evenodd"
        d="M10.53 6.47a.75.75 0 0 1 0 1.06l-3.72 3.72H19a.75.75 0 0 1 0 1.5H6.81l3.72 3.72a.75.75 0 1 1-1.06 1.06l-5-5a.75.75 0 0 1 0-1.06l5-5a.75.75 0 0 1 1.06 0"
      />
    </>
  )
);
