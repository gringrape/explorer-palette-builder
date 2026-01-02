import { cn } from "@/lib/utils";

type IconProps = { className?: string; selected?: boolean };

export const AccordionDoorIcon = ({ className, selected }: IconProps) => (
  <svg
    viewBox="0 0 96 96"
    fill="none"
    className={cn("accordiondoor", className, selected && "is-open")}
    aria-hidden="true"
  >
    {/* Frame (fixed) */}
    <path
      d="M22 14H74V82H22V14Z"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Accordion (animated) */}
    <g className="acc-panels">
      {/* Left rail */}
      <path
        d="M28 20V76"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.95"
      />

      {/* Right rail (끝을 딱 고정해 보이게) */}
      <path
        d="M68 20V76"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.95"
      />

      {/* Pleat vertical lines */}
      <path d="M36 23V73" stroke="currentColor" strokeWidth="6" strokeLinecap="round" opacity="0.85" />
      <path d="M44 23V73" stroke="currentColor" strokeWidth="6" strokeLinecap="round" opacity="0.45" />
      <path d="M52 23V73" stroke="currentColor" strokeWidth="6" strokeLinecap="round" opacity="0.85" />
      <path d="M60 23V73" stroke="currentColor" strokeWidth="6" strokeLinecap="round" opacity="0.45" />

      {/* Top fold "chevrons" (아코디언 핵심 실루엣) */}
      <path
        d="M28 20L36 28L44 20L52 28L60 20L68 28"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />

      {/* Bottom fold "chevrons" */}
      <path
        d="M28 76L36 64L44 76L52 64L60 76L68 64"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />
    </g>
  </svg>
);
