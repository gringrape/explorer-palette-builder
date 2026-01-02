import { cn } from "@/lib/utils";

type IconProps = { className?: string };

export const HorizontalFixedGrabBarIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 96 96"
    fill="none"
    className={cn(className)}
    aria-hidden="true"
  >
    {/* End plates (left / right) */}
    <g opacity="0.95">
      <circle cx="18" cy="48" r="9" stroke="currentColor" strokeWidth="6" />
      <circle cx="78" cy="48" r="9" stroke="currentColor" strokeWidth="6" />
    </g>

    {/* Small screw hints */}
    <g fill="currentColor" opacity="0.55">
      <circle cx="18" cy="44" r="1.6" />
      <circle cx="18" cy="52" r="1.6" />
      <circle cx="78" cy="44" r="1.6" />
      <circle cx="78" cy="52" r="1.6" />
    </g>

    {/* Bar (tube) */}
    <path
      d="M26 48H70"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Tube thickness hint (subtle) */}
    <path
      d="M26 51H70"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      opacity="0.22"
    />

    {/* Short collars connecting to plates */}
    <path
      d="M23 48H26M70 48H73"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
      opacity="0.9"
    />
  </svg>
);

