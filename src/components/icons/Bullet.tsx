import { createIcon } from "./Icon";

export const Bullet = createIcon(
  "Bullet",
  "0 0 24 24",
  (color: string) => (
    <>
      <path
        fill={color}
        fillRule="evenodd"
        d="M16.243 7.757a6 6 0 1 1-8.485 8.486 6 6 0 0 1 8.485-8.486"
      />
    </>
  )
);
