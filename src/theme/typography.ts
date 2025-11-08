/**
 * Typography Design System
 * 
 * Centralized font size definitions for consistent typography across the application.
 * All text sizes are defined here using Tailwind CSS classes.
 */

export const typography = {
  title: "text-xl",
  // Button text sizes
  button: "text-lg",
  // General text sizes
  body: 'text-lg', 
} as const;

/**
 * Type-safe typography keys
 */
export type TypographyKey = keyof typeof typography;
export type ButtonSize = keyof typeof typography.button;
export type BodySize = keyof typeof typography.body;

