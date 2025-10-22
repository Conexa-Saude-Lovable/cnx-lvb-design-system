import { createIcon } from "./Icon";

export const CalendarRepeat = createIcon(
  "CalendarRepeat",
  "0 0 24 24",
  (color: string) => (
    <>
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M11 10v4h4"
      />
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m11 14 1.535-1.605a5 5 0 0 1 8 1.5M16 2v4m5 12-1.535 1.605a5 5 0 0 1-8-1.5"
      />
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 22v-4h-4m4-9.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4.3M3 10h4m1-8v4"
      />
    </>
  )
);
