import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export type LoaderSize = "small" | "medium" | "large";

export interface LoaderProps {
  size?: LoaderSize;
  ringColor?: string;
  spinColor?: string;
  text?: string;
  className?: string;
}

const LOADER_SIZES = {
  small: 16,
  medium: 24,
  large: 32,
};

export const Loader = forwardRef<HTMLDivElement, LoaderProps>(
  ({ size = "medium", ringColor, spinColor, text, className }, ref) => {
    const dimension = LOADER_SIZES[size];

    return (
      <div
        ref={ref}
        role="status"
        aria-live="polite"
        aria-label={text || "Carregando"}
        aria-busy="true"
        className={cn("flex h-fit w-fit items-center justify-center", className)}
      >
        <div className="flex h-fit items-center justify-center pr-2">
          <svg
            width={dimension}
            height={dimension}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="animate-spin"
            data-testid="loader"
          >
            <path
              id="loader-ring"
              opacity="0.2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
              fill={ringColor || "hsl(var(--brand-primary-100))"}
              data-testid="loader-ring"
            />
            <path
              id="loader-spin"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11 1C11 0.447715 11.4477 0 12 0C18.6274 0 24 5.37258 24 12C24 12.5523 23.5523 13 23 13C22.4477 13 22 12.5523 22 12C22 6.47715 17.5228 2 12 2C11.4477 2 11 1.55228 11 1Z"
              fill={spinColor || "hsl(var(--brand-primary-300))"}
              data-testid="loader-spin"
            />
          </svg>
        </div>
        {text && <span className="text-sm">{text}</span>}
      </div>
    );
  }
);

Loader.displayName = "Loader";
