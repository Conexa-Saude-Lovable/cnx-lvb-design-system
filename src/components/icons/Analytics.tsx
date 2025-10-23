import { createIcon } from "./Icon";

export const Analytics = createIcon(
  "Analytics",
  "0 0 24 24",
  (color: string) => (
    <>
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M9 17V8a1 1 0 0 1 1-1h5v10"
      />
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M15 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h5M3 21h18"
      />
    </>
  )
);
