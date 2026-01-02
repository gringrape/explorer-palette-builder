import { cn } from "@/lib/utils";

type IconProps = { className?: string; selected?: boolean };

export const SlidingDoorIcon = ({ className, selected }: IconProps) => {
  const svgClassName = selected 
    ? cn(className, "door-selected") 
    : className;
  
  return (
    <svg 
      viewBox="0 0 96 96" 
      fill="none" 
      className={svgClassName}
      data-selected={selected ? "true" : "false"}
    >
    <path d="M26 18H70V78H26V18Z" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M30 22H66"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.9"
    />
    <g className="door-panel">
      <path
        d="M30 22H56V78H30V22Z"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M50 50H54" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
  );
};

