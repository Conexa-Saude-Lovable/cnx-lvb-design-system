import { createIcon } from "./Icon";

export const Ring = createIcon(
  "Ring",
  "0 0 16 16",
  (color: string) => (
    <>
      <path
        fill={color}
        d="M13.5 8A5.5 5.5 0 1 0 8 13.5V16A8 8 0 1 1 8 0a8 8 0 0 1 0 16v-2.5A5.5 5.5 0 0 0 13.5 8"
      />
    </>
  )
);
