import { cn } from "@/lib/utils";

type IconProps = { className?: string; selected?: boolean };

export const SwingDoorIcon = ({ className, selected }: IconProps) => (
  <svg
    viewBox="0 0 96 96"
    fill="none"
    className={cn("swingdoor", className, selected && "is-open")}
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

    {/* Hinge line + hinges (ALWAYS fixed, never animated) */}
    <path
      d="M30 22V74"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.65"
    />
    <circle cx="30" cy="26" r="2" fill="currentColor" opacity="0.5" />
    <circle cx="30" cy="70" r="2" fill="currentColor" opacity="0.5" />

    {/* Door leaf wrapper (illusion transform target) */}
    <g className="door-illusion">
      {/* Door leaf */}
      <path
        d="M31 22H62V74H32V22Z"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M56 50H58"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>

    {/* Swing hint */}
    <path
      d="M62 26C67 30 69 36 69 42"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.35"
    />
  </svg>
);
