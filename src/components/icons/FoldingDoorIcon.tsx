import { cn } from "@/lib/utils";

type IconProps = { className?: string; selected?: boolean };

export const FoldingDoorIcon = ({ className, selected }: IconProps) => (
  <svg
    viewBox="0 0 96 96"
    fill="none"
    className={cn("foldingdoor", className, selected && "is-open")}
    aria-hidden="true"
  >
    {/* Frame (fixed) */}
    <path
      d="M18 14H78V82H18V14Z"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

// Panel 1 (fixed)
<path
  d="M22 20H40V76H22V20Z"
  stroke="currentColor"
  strokeWidth="6"
  strokeLinecap="round"
  strokeLinejoin="round"
  opacity="0.95"
/>
{/* ✅ ADD: diagonal hint for panel 1 */}
<path
  d="M24 72L38 26"
  stroke="currentColor"
  strokeWidth="4"
  strokeLinecap="round"
  strokeDasharray="4 5"
  opacity="0.45"
/>

// Panel 2 (fixed)
<path
  d="M40 20H58V76H40V20Z"
  stroke="currentColor"
  strokeWidth="6"
  strokeLinecap="round"
  strokeLinejoin="round"
  opacity="0.85"
/>
{/* ✅ ADD: diagonal hint for panel 2 */}
<path
  d="M42 72L56 26"
  stroke="currentColor"
  strokeWidth="4"
  strokeLinecap="round"
  strokeDasharray="4 5"
  opacity="0.45"
/>

// Panel 3 (RIGHT) — only this group animates
<g className="fold-right">
  <path
    d="M58 20H74V76H58V20Z"
    stroke="currentColor"
    strokeWidth="6"
    strokeLinecap="round"
    strokeLinejoin="round"
    opacity="0.95"
  />
  {/* (이미 있음) diagonal hint line */}
  <path
    d="M60 72L72 26"
    stroke="currentColor"
    strokeWidth="4"
    strokeLinecap="round"
    strokeDasharray="4 5"
    opacity="0.45"
  />
</g>


    {/* subtle separators (fixed) */}
    <path d="M40 20V76" stroke="currentColor" strokeWidth="4" opacity="0.16" />
    <path d="M58 20V76" stroke="currentColor" strokeWidth="4" opacity="0.16" />
  </svg>
);
