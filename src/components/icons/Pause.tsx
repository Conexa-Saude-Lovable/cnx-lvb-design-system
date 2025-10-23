import { createIcon } from "./Icon";

export const Pause = createIcon(
  "Pause",
  "0 0 24 24",
  (color: string) => (
    <>
      <path
        fill={color}
        fillRule="evenodd"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth=".5"
        d="M16 18a1.5 1.5 0 0 1-1.5-1.5v-9a1.5 1.5 0 0 1 3 0v9A1.5 1.5 0 0 1 16 18m-8 0a1.5 1.5 0 0 1-1.5-1.5v-9a1.5 1.5 0 0 1 3 0v9A1.5 1.5 0 0 1 8 18"
        clipRule="evenodd"
      />
    </>
  )
);
