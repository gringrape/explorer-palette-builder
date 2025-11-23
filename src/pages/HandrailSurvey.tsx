import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { typography } from "@/theme/typography";
import { handrailGuide } from "@/assets";
import { useSurvey } from "@/contexts/SurveyContext";

const HandrailSurvey = () => {
  const navigate = useNavigate();
  const { updateSurveyData } = useSurvey();
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const handrailOptions = [
    { id: "horizontal-flexible", label: "가로 손잡이(변신)" },
    { id: "horizontal-fixed", label: "가로 손잡이(고정)" },
    { id: "vertical", label: "세로 손잡이" },
    { id: "other", label: "기타(L자형, T자형 등)" },
  ];

  const handleCheckboxChange = (optionId: string) => {
    setSelectedTypes((prev) =>
      prev.includes(optionId)
        ? prev.filter((id) => id !== optionId)
        : [...prev, optionId]
    );
  };

  const handleNext = () => {
    updateSurveyData({ handrailTypes: selectedTypes });
    console.log("Selected handrail types:", selectedTypes);
    navigate("/sink-survey");
  };

  return (
    <div className="h-svh flex flex-col bg-card">
      <header className="h-[11%] px-6 flex items-center justify-center flex-col">
        <div className="w-full h-2 bg-primary/20 rounded-full mb-2">
          <div className="w-5/6 h-full bg-primary rounded-full"></div>
        </div>
        <p className={`${typography.body} text-foreground`}>모모탐사대</p>
        <h1 className={`${typography.title} font-bold text-primary`}>
          손잡이 모양을 조사하자
        </h1>
      </header>

      <div className="flex-1 overflow-y-auto p-6 space-y-2">
        {/* Illustration */}
        <div className="bg-card p-4">
          <div className="border-4 border-primary rounded-lg overflow-hidden">
            <img
              src={handrailGuide}
              alt="화장실 손잡이 일러스트"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Question and Options */}
        <div className="bg-card p-4">
          <p className={`${typography.body} font-bold text-foreground mb-3`}>
            손잡이는 어떤 모양이야? (중복 가능)
          </p>

          <div className="flex flex-col gap-3">
            {handrailOptions.map((option) => (
              <Button
                key={option.id}
                onClick={() => handleCheckboxChange(option.id)}
                className={`h-14 rounded-full border-2 ${typography.button} font-bold transition-all ${
                  selectedTypes.includes(option.id)
                    ? "bg-primary text-primary-foreground border-primary hover:bg-primary"
                    : "bg-card text-foreground border-primary/40 hover:bg-primary/10"
                }`}
                variant="outline"
              >
                {option.label}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Fixed bottom button */}
      <div className="p-6 bg-card">
        <Button
          onClick={handleNext}
          disabled={selectedTypes.length === 0}
          className={`w-full h-14 rounded-xl ${typography.button} font-bold transition-all ${
            selectedTypes.length > 0
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

export default HandrailSurvey;
