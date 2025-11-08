/**
 * Color Design System
 * 
 * Centralized color definitions for consistent styling across the application.
 * All colors are defined here using Tailwind CSS classes.
 */

export const colors = {
  // Primary color variants
  primary: {
    DEFAULT: "bg-primary text-primary-foreground",
    light: "bg-primary/20 text-primary border-primary/40",
    lightSelected: "bg-primary/30 text-primary border-primary/60",
  },

  // Button color variants
  button: {
    selected: "bg-primary text-white border-primary hover:bg-primary",
    unselected: "bg-white text-foreground border-primary/40 hover:bg-primary/10",
  },
} as const;

/**
 * Type-safe color keys
 */
export type ColorKey = keyof typeof colors;
export type PrimaryColorKey = keyof typeof colors.primary;
export type ButtonColorKey = keyof typeof colors.button;

