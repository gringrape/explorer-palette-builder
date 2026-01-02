import { cn } from "@/lib/utils";

type IconProps = { className?: string };

export const LGrabBarIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 96 96"
    fill="none"
    className={cn(className)}
    aria-hidden="true"
  >
    {/* ===== Mount plates (3 points) =====
       - top of vertical
       - near corner (support bracket 느낌)
       - end of horizontal
    */}
    <g opacity="0.95">
      <circle cx="26" cy="18" r="7.5" stroke="currentColor" strokeWidth="6" />
      <circle cx="78" cy="74" r="7.5" stroke="currentColor" strokeWidth="6" />
    </g>

    {/* screws (subtle) */}
    <g fill="currentColor" opacity="0.5">
      <circle cx="23" cy="18" r="1.4" />
      <circle cx="29" cy="18" r="1.4" />
      <circle cx="26" cy="15" r="1.4" />
      <circle cx="26" cy="21" r="1.4" />

      <circle cx="75" cy="74" r="1.4" />
      <circle cx="81" cy="74" r="1.4" />
      <circle cx="78" cy="71" r="1.4" />
      <circle cx="78" cy="77" r="1.4" />
    </g>

    {/* ===== Grab bar (main tube) =====
       레퍼런스처럼:
       - 왼쪽 세로봉이 길고
       - 아래에서 오른쪽으로 길게 뻗고
       - 모서리는 둥글게(R)
    */}
    <path
      d="M26 26V62Q26 74 38 74H70"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* connect into end mount (gives 'mounted' feel) */}
    <path
      d="M70 74H78"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
      opacity="0.95"
    />

    {/* connect into top mount */}
    <path
      d="M26 18V26"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
      opacity="0.95"
    />

    {/* subtle highlight line (metal 느낌) */}
    <path
      d="M28.5 26V61.5Q28.5 71.5 38.5 71.5H70"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.18"
    />
  </svg>
);
