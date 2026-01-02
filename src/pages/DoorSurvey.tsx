import { useState } from "react";
import { Button } from "@/components/ui/button";
import { typography } from "@/theme/typography";
import { colors } from "@/theme/colors";
import { useNavigate } from "react-router-dom";
import momoDoorVideo from "@/assets/momo-door-video.mp4";
import { useSurvey } from "@/contexts/SurveyContext";
import { SlidingDoorIcon } from "@/components/icons/SlidingDoorIcon";
import { SwingDoorIcon } from "@/components/icons/SwingDoorIcon";
import { AutomaticDoorIcon } from "@/components/icons/AutomaticDoorIcon";
import { AccordionDoorIcon } from "@/components/icons/AccordionDoorIcon";
import { FoldingDoorIcon } from "@/components/icons/FoldingDoorIcon";

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
                    {option.value === "sliding_door" ? (
                      <SlidingDoorIcon className="!w-10 !h-10" selected={selected} />
                    ) : option.value === "swing_door" ? (
                      <SwingDoorIcon className="!w-10 !h-10" selected={selected} />
                    ) : option.value === "automatic_door" ? (
                      <AutomaticDoorIcon className="!w-10 !h-10" selected={selected} />
                    ) : option.value === "accordion_door" ? (
                      <AccordionDoorIcon className="!w-10 !h-10" selected={selected} />
                    ) : option.value === "folding_door" ? (
                      <FoldingDoorIcon className="!w-10 !h-10" selected={selected} />
                    ) : (
                      <Icon className="!w-10 !h-10" />
                    )}
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
