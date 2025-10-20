import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        
        primary: {
          DEFAULT: "hsl(var(--primary))",
          hover: "hsl(var(--primary-hover))",
          active: "hsl(var(--primary-active))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          hover: "hsl(var(--secondary-hover))",
          active: "hsl(var(--secondary-active))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
        },
        error: {
          DEFAULT: "hsl(var(--error))",
          foreground: "hsl(var(--error-foreground))",
        },
        info: {
          DEFAULT: "hsl(var(--info))",
          foreground: "hsl(var(--info-foreground))",
        },
        
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        
        // Conexa Brand Colors
        brand: {
          primary: {
            100: "hsl(var(--brand-primary-100))",
            200: "hsl(var(--brand-primary-200))",
            300: "hsl(var(--brand-primary-300))",
            400: "hsl(var(--brand-primary-400))",
            500: "hsl(var(--brand-primary-500))",
          },
          secondary: {
            100: "hsl(var(--brand-secondary-100))",
            200: "hsl(var(--brand-secondary-200))",
            300: "hsl(var(--brand-secondary-300))",
            400: "hsl(var(--brand-secondary-400))",
            500: "hsl(var(--brand-secondary-500))",
          },
          tertiary: {
            100: "hsl(var(--brand-tertiary-100))",
            200: "hsl(var(--brand-tertiary-200))",
            300: "hsl(var(--brand-tertiary-300))",
            400: "hsl(var(--brand-tertiary-400))",
            500: "hsl(var(--brand-tertiary-500))",
          },
        },
        feedback: {
          success: {
            100: "hsl(var(--feedback-success-100))",
            200: "hsl(var(--feedback-success-200))",
            300: "hsl(var(--feedback-success-300))",
            400: "hsl(var(--feedback-success-400))",
            500: "hsl(var(--feedback-success-500))",
          },
          error: {
            100: "hsl(var(--feedback-error-100))",
            200: "hsl(var(--feedback-error-200))",
            300: "hsl(var(--feedback-error-300))",
            400: "hsl(var(--feedback-error-400))",
            500: "hsl(var(--feedback-error-500))",
          },
          warning: {
            100: "hsl(var(--feedback-warning-100))",
            200: "hsl(var(--feedback-warning-200))",
            300: "hsl(var(--feedback-warning-300))",
            400: "hsl(var(--feedback-warning-400))",
            500: "hsl(var(--feedback-warning-500))",
          },
          info: {
            100: "hsl(var(--feedback-info-100))",
            200: "hsl(var(--feedback-info-200))",
            300: "hsl(var(--feedback-info-300))",
            400: "hsl(var(--feedback-info-400))",
            500: "hsl(var(--feedback-info-500))",
          },
        },
        neutral: {
          100: "hsl(var(--neutral-100))",
          200: "hsl(var(--neutral-200))",
          300: "hsl(var(--neutral-300))",
          400: "hsl(var(--neutral-400))",
          500: "hsl(var(--neutral-500))",
        },
      },
      fontFamily: {
        sans: ["var(--font-family)", "system-ui", "sans-serif"],
      },
      fontSize: {
        nano: ["0.625rem", { lineHeight: "1rem" }],
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.5rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.5rem" }],
        xl: ["1.25rem", { lineHeight: "2rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["2rem", { lineHeight: "3rem" }],
        "4xl": ["2.5rem", { lineHeight: "3rem" }],
        "5xl": ["3rem", { lineHeight: "4rem" }],
      },
      spacing: {
        xxs: "var(--spacing-xxs)",
        xs: "var(--spacing-xs)",
        sm: "var(--spacing-sm)",
        md: "var(--spacing-md)",
        lg: "var(--spacing-lg)",
        xl: "var(--spacing-xl)",
        "2xl": "var(--spacing-2xl)",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        DEFAULT: "var(--radius)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        DEFAULT: "var(--shadow)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        xl: "var(--shadow-xl)",
      },
      transitionDuration: {
        fast: "150ms",
        base: "200ms",
        slow: "300ms",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
