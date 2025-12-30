import { useState } from "react";
import { Button } from "@/components/ui/button";
import { typography } from "@/theme/typography";
import { colors } from "@/theme/colors";
import { useNavigate } from "react-router-dom";
import momoDoorVideo from "@/assets/momo-door-video.mp4";
import { useSurvey } from "@/contexts/SurveyContext";

/* =========================
   아이콘 타입 & 컴포넌트
   (파일 최상단, 안전)
   ========================= */

type IconProps = { className?: string };

const SwingDoorIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 96 96" fill="none" className={className}>
    <path d="M26 18H70V78H26V18Z" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M44 50H52" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SlidingDoorIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 96 96" fill="none" className={className}>
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

const AutomaticDoorIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 96 96" fill="none" className={className}>
    <path d="M26 18H70V78H26V18Z" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M38 60H58" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="48" cy="44" r="3" fill="currentColor" />
  </svg>
);

const AccordionDoorIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 96 96" fill="none" className={className}>
    <path d="M26 18H70V78H26V18Z" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M34 22L62 78" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M62 22L34 78" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const FoldingDoorIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 96 96" fill="none" className={className}>
    <path d="M26 18H70V78H26V18Z" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M48 18V78" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* =========================
   페이지 컴포넌트
   ========================= */

const DoorSurvey = () => {
  const navigate = useNavigate();
  const { updateSurveyData } = useSurvey();
  const [doorType, setDoorType] = useState<string>("");

  const isSelected = doorType !== "";

  const handleNext = () => {
    updateSurveyData({ doorType });
    navigate("/size-survey");
  };

  const doorOptions = [
    { label: "앞으로 여는 문", value: "swing_door", Icon: SwingDoorIcon },
    { label: "옆으로 미는 문", value: "sliding_door", Icon: SlidingDoorIcon },
    { label: "자동문(버튼)", value: "automatic_door", Icon: AutomaticDoorIcon },
    { label: "접는문(아코디언)", value: "accordion_door", Icon: AccordionDoorIcon },
    { label: "폴딩도어", value: "folding_door", Icon: FoldingDoorIcon },
  ];

  return (
    <div className="h-svh flex flex-col bg-card">
      {/* Header */}
      <header className="h-[11%] px-6 flex items-center justify-center flex-col">
        <div className="w-full h-2 bg-primary/20 rounded-full mb-2">
          <div className="w-2/6 h-full bg-primary rounded-full" />
        </div>
        <p className={`${typography.body} text-foreground`}>모모탐사대</p>
        <h1 className={`${typography.title} font-bold text-primary`}>화장실 문 조사하기</h1>
      </header>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6 space-y-2">
        {/* 애니메이션 비디오 */}
        <div className="bg-card p-4">
          <div className="border-4 border-foreground rounded-lg overflow-hidden">
            <video src={momoDoorVideo} autoPlay loop muted playsInline className="w-full h-auto" />
          </div>
        </div>

        {/* 문 종류 선택 */}
        <div className="bg-card p-4">
          <div className="flex flex-col gap-3">
            {doorOptions.map((option) => {
              const Icon = option.Icon;
              const selected = doorType === option.value;

              return (
                <Button
                  key={option.value}
                  onClick={() => setDoorType(option.value)}
                  className={`h-14 rounded-full border-2 ${typography.button} font-bold transition-all ${
                    selected ? colors.button.selected : colors.button.unselected
                  }`}
                  variant="outline"
                >
                  <span className="inline-flex items-center gap-2">
                    <Icon className="w-6 h-6" />
                    {option.label}
                  </span>
                </Button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="p-6 bg-card">
        <Button
          onClick={handleNext}
          disabled={!isSelected}
          className={`w-full h-14 rounded-xl ${typography.button} font-bold transition-all ${
            isSelected
              ? "bg-primary hover:bg-primary/90 text-primary-foreground"
              : "bg-primary/30 text-primary-foreground cursor-not-allowed"
          }`}
        >
          다음
        </Button>
      </div>
    </div>
  );
};

export default DoorSurvey;
