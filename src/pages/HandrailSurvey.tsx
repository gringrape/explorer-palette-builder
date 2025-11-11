import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import handrailImage from "@/assets/handrail-illustration.png";

const HandrailSurvey = () => {
  const navigate = useNavigate();
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
    console.log("Selected handrail types:", selectedTypes);
    // Navigate to next survey page
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/20 to-background flex flex-col">
      {/* Header */}
      <div className="p-6 space-y-4">
        {/* Progress bar */}
        <div className="w-full bg-background/50 rounded-full h-2">
          <div className="bg-primary h-2 rounded-full" style={{ width: "80%" }}></div>
        </div>
        
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">모모탐사대</p>
          <h1 className="text-2xl font-bold text-foreground">손잡이 모양을 조사하자</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-6 space-y-6">
        {/* Illustration */}
        <div className="bg-primary/10 rounded-2xl p-6 border-2 border-primary/20">
          <img
            src={handrailImage}
            alt="화장실 손잡이 일러스트"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Question */}
        <div className="space-y-4">
          <p className="text-lg font-medium text-foreground">
            손잡이는 어떤 모양이야? (중복 가능)
          </p>

          {/* Options */}
          <div className="space-y-3">
            {handrailOptions.map((option) => (
              <label
                key={option.id}
                className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all cursor-pointer ${
                  selectedTypes.includes(option.id)
                    ? "bg-primary/10 border-primary"
                    : "bg-background border-border hover:border-primary/50"
                }`}
              >
                <Checkbox
                  id={option.id}
                  checked={selectedTypes.includes(option.id)}
                  onCheckedChange={() => handleCheckboxChange(option.id)}
                  className="h-5 w-5"
                />
                <span className="text-lg flex-1">{option.label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Next Button */}
      <div className="p-6 pt-0">
        <Button
          onClick={handleNext}
          disabled={selectedTypes.length === 0}
          className="w-full h-14 text-lg rounded-2xl"
          size="lg"
        >
          다음
        </Button>
      </div>
    </div>
  );
};

export default HandrailSurvey;
