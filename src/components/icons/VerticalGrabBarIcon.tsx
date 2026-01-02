import { cn } from "@/lib/utils";

type IconProps = { className?: string };

export const VerticalGrabBarIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 96 96" fill="none" className={cn(className)} aria-hidden="true">
    {/* Top / Bottom plates */}
    <g opacity="0.95">
      <circle cx="48" cy="20" r="9" stroke="currentColor" strokeWidth="6" />
      <circle cx="48" cy="76" r="9" stroke="currentColor" strokeWidth="6" />
    </g>

    {/* Screws */}
    <g fill="currentColor" opacity="0.55">
      <circle cx="44" cy="20" r="1.6" />
      <circle cx="52" cy="20" r="1.6" />
      <circle cx="44" cy="76" r="1.6" />
      <circle cx="52" cy="76" r="1.6" />
    </g>

    {/* Main vertical bar */}
    <path
      d="M48 28V68"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Slight thickness hint */}
    <path
      d="M51 28V68"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      opacity="0.22"
    />

    {/* Collars */}
    <path
      d="M48 25V28M48 68V71"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
      opacity="0.9"
    />
  </svg>
);

