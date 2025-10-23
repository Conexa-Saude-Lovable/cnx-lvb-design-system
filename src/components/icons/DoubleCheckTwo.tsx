import { createIcon } from "./Icon";

export const DoubleCheckTwo = createIcon(
  "DoubleCheckTwo",
  "0 0 24 24",
  (color: string) => (
    <>
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m8 12 5 5m4-10-4.5 4.5M8 17l-5-5m18-3-8 8-6-6"
      />
    </>
  )
);
