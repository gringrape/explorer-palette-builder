import { cn } from "@/lib/utils";

type IconProps = { className?: string; selected?: boolean };

export const AutomaticDoorIcon = ({ className, selected }: IconProps) => (
  <svg
    viewBox="0 0 96 96"
    fill="none"
    className={cn("autodoor", className, selected && "is-open")}
    aria-hidden="true"
  >
    {/* Frame */}
    <path
      d="M26 18H70V78H26V18Z"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Top rail */}
    <path
      d="M30 22H66"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.65"
    />

    {/* Door panels (animated) */}
    <g className="auto-panels">
      {/* Left panel */}
      <g className="auto-left">
        <path
          d="M30 24H48V78H30V24Z"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* handle hint */}
        <path
          d="M44 52H46"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.9"
        />
      </g>

      {/* Right panel */}
      <g className="auto-right">
        <path
          d="M48 24H66V78H48V24Z"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* handle hint */}
        <path
          d="M50 52H52"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.9"
        />
      </g>
    </g>

    {/* Wall button (accessibility style) */}
    <g className="auto-button">
      {/* button plate */}
      <path
        d="M22 44H26"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
      {/* button dot */}
      <circle cx="24" cy="44" r="2.5" fill="currentColor" opacity="0.9" />
    </g>
  </svg>
);

