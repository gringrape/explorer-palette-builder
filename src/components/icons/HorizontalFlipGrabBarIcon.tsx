import { cn } from "@/lib/utils";

type IconProps = { className?: string; selected?: boolean };

export const HorizontalFlipGrabBarIcon = ({ className, selected }: IconProps) => (
  <svg
    viewBox="0 0 96 96"
    fill="none"
    className={cn("flipgrabbar", className, selected && "is-open")}
    aria-hidden="true"
  >
    {/* Wall plate (fixed) */}
    <rect
      x="14"
      y="30"
      width="14"
      height="36"
      rx="4"
      stroke="currentColor"
      strokeWidth="6"
    />
    {/* Wall screws (fixed) */}
    <circle cx="21" cy="38" r="2" fill="currentColor" opacity="0.55" />
    <circle cx="21" cy="58" r="2" fill="currentColor" opacity="0.55" />

    {/* Hinge block (fixed) */}
    <rect
      x="26"
      y="42"
      width="12"
      height="12"
      rx="3"
      stroke="currentColor"
      strokeWidth="6"
      opacity="0.95"
    />
    {/* Hinge pin (fixed) */}
    <circle cx="32" cy="48" r="2.2" fill="currentColor" opacity="0.8" />

    {/* ===== Arm (animated target) ===== */}
    <g className="arm">
      {/* ✅ pivot stabilizer (invisible) : 힌지점을 arm bbox에 강제 포함 */}
      <circle cx="32" cy="48" r="0.5" fill="transparent" />

      {/* Arm main tube (rounded rectangle) */}
      <path
        d="M32 36H78C83 36 86 39 86 44V52C86 57 83 60 78 60H32"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Return bottom line (gives "tube" 느낌) */}
      <path
        d="M32 60H78"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        opacity="0.9"
      />

      {/* Support strut (short vertical connector near hinge) */}
      <path
        d="M40 40V56"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        opacity="0.85"
      />
    </g>
  </svg>
);

