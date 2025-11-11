import { useState } from "react";
import { Button } from "@/components/ui/button";
import { typography } from "@/theme/typography";
import { colors } from "@/theme/colors";
import { useNavigate } from "react-router-dom";
import momoDoorVideo from "@/assets/momo-door-video.mp4";

const DoorSurvey = () => {
  const navigate = useNavigate();
  const [doorType, setDoorType] = useState<string>("");

  const isSelected = doorType !== "";

  const handleNext = () => {
    console.log("Door survey:", { doorType });
    navigate("/midpoint-encouragement");
  };

  const doorOptions = [
    "앞으로 여는 문",
    "옆으로 미는 문",
    "자동문(버튼)",
    "접는문(아코디언)",
    "기타(입력하기)"
  ];

  return (
    <div className="h-svh flex flex-col bg-card">
      <header className="h-[11%] px-6 flex items-center justify-center flex-col">
        <div className="w-full h-2 bg-primary/20 rounded-full mb-2">
          <div className="w-2/6 h-full bg-primary rounded-full"></div>
        </div>
        <p className={`${typography.body} text-foreground`}>모모탐사대</p>
        <h1 className={`${typography.title} font-bold text-primary`}>
          화장실 문 조사하기
        </h1>
      </header>

      <div className="flex-1 overflow-y-auto p-6 space-y-2">
        {/* 애니메이션 비디오 */}
        <div className="bg-card p-4">
          <div className="border-4 border-foreground rounded-lg overflow-hidden">
            <video 
              src={momoDoorVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* 문 종류 선택 */}
        <div className="bg-card p-4">
          <div className="flex flex-col gap-3">
            {doorOptions.map((option) => (
              <Button
                key={option}
                onClick={() => setDoorType(option)}
                className={`h-14 rounded-full border-2 ${typography.button} font-bold transition-all ${
                  doorType === option
                    ? colors.button.selected
                    : colors.button.unselected
                }`}
                variant="outline"
              >
                {option}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Fixed bottom button */}
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
