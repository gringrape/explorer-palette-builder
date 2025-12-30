import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { typography } from "@/theme/typography";
import momoWashHandsVideo from "@/assets/momo-wash-hands.mp4";
import { useToast } from "@/hooks/use-toast";
import { useSurvey } from "@/contexts/SurveyContext";
import { saveSurveyResponse } from "@/lib/api";

const SinkSurvey = () => {
  const navigate = useNavigate();
  const { surveyData, updateSurveyData, resetSurveyData } = useSurvey();
  const { toast } = useToast();
  const [hasBasin, setHasBasin] = useState<boolean | null>(null);
  const [isUsable, setIsUsable] = useState<boolean | null>(null);
  const [basinHeightType, setBasinHeightType] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNext = async () => {
    setIsSubmitting(true);
    
    // Update final survey data
    updateSurveyData({ hasBasin, isUsable, basinHeightType });
    
    // Prepare data for database
    const finalData = {
      ...surveyData,
      hasBasin,
      isUsable,
      basinHeightType,
    };

    try {
      await saveSurveyResponse(finalData);

      console.log("Survey saved successfully!");
      toast({
        title: "저장 완료",
        description: "설문 데이터가 성공적으로 저장되었습니다.",
      });
      
      // Reset survey data for next response
      resetSurveyData();
      navigate("/goodbye");
    } catch (error) {
      console.error("Error saving survey:", error);
      toast({
        title: "저장 실패",
        description: "설문 데이터 저장에 실패했습니다. 다시 시도해주세요.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  };

  const isComplete = hasBasin !== null && isUsable !== null && basinHeightType !== "";

  return (
    <div className="h-svh flex flex-col bg-card">
      <header className="h-[11%] px-6 flex items-center justify-center flex-col">
        <div className="w-full h-2 bg-primary/20 rounded-full mb-2">
          <div className="w-full h-full bg-primary rounded-full"></div>
        </div>
        <p className={`${typography.body} text-foreground`}>모모탐사대</p>
        <h1 className={`${typography.title} font-bold text-primary`}>세면대를 조사하자</h1>
      </header>

      <div className="flex-1 overflow-y-auto p-6 space-y-2">
        {/* Animation Video */}
        <div className="bg-card p-4">
          <div className="border-4 border-primary rounded-lg overflow-hidden">
            <video 
              src={momoWashHandsVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Questions */}
        <div className="bg-card p-4 space-y-4">
          {/* Question 1: 세면대 있어? */}
          <div>
            <p className={`${typography.body} font-bold text-foreground mb-3`}>화장실에 세면대 있어?</p>
            <div className="grid grid-cols-2 gap-3">
              <Button
                onClick={() => setHasBasin(true)}
                className={`h-14 rounded-full border-2 ${typography.button} font-bold transition-all ${
                  hasBasin === true
                    ? "bg-primary text-primary-foreground border-primary hover:bg-primary"
                    : "bg-card text-foreground border-primary/40 hover:bg-primary/10"
                }`}
                variant="outline"
              >
                있음
              </Button>
              <Button
                onClick={() => setHasBasin(false)}
                className={`h-14 rounded-full border-2 ${typography.button} font-bold transition-all ${
                  hasBasin === false
                    ? "bg-primary text-primary-foreground border-primary hover:bg-primary"
                    : "bg-card text-foreground border-primary/40 hover:bg-primary/10"
                }`}
                variant="outline"
              >
                없음
              </Button>
            </div>
          </div>

          {/* Question 2: 손 씻을 수 있어? */}
          <div>
            <p className={`${typography.body} font-bold text-foreground mb-3`}>손 씻을 수 있어?</p>
            <div className="grid grid-cols-2 gap-3">
              <Button
                onClick={() => setIsUsable(true)}
                className={`h-14 rounded-full border-2 ${typography.button} font-bold transition-all ${
                  isUsable === true
                    ? "bg-primary text-primary-foreground border-primary hover:bg-primary"
                    : "bg-card text-foreground border-primary/40 hover:bg-primary/10"
                }`}
                variant="outline"
              >
                씻을 수 있어
              </Button>
              <Button
                onClick={() => setIsUsable(false)}
                className={`h-14 rounded-full border-2 ${typography.button} font-bold transition-all ${
                  isUsable === false
                    ? "bg-primary text-primary-foreground border-primary hover:bg-primary"
                    : "bg-card text-foreground border-primary/40 hover:bg-primary/10"
                }`}
                variant="outline"
              >
                못 씻을 것 같아
              </Button>
            </div>
          </div>

          {/* Question 3: 세면대 높이는 어때? */}
          <div>
            <p className={`${typography.body} font-bold text-foreground mb-3`}>세면대 높이는 어때?</p>
            <div className="grid grid-cols-3 gap-3">
              <Button
                onClick={() => setBasinHeightType("high")}
                className={`h-14 rounded-full border-2 ${typography.button} font-bold transition-all ${
                  basinHeightType === "high"
                    ? "bg-primary text-primary-foreground border-primary hover:bg-primary"
                    : "bg-card text-foreground border-primary/40 hover:bg-primary/10"
                }`}
                variant="outline"
              >
                너무 높아
              </Button>
              <Button
                onClick={() => setBasinHeightType("standard")}
                className={`h-14 rounded-full border-2 ${typography.button} font-bold transition-all ${
                  basinHeightType === "standard"
                    ? "bg-primary text-primary-foreground border-primary hover:bg-primary"
                    : "bg-card text-foreground border-primary/40 hover:bg-primary/10"
                }`}
                variant="outline"
              >
                딱 좋아
              </Button>
              <Button
                onClick={() => setBasinHeightType("low")}
                className={`h-14 rounded-full border-2 ${typography.button} font-bold transition-all ${
                  basinHeightType === "low"
                    ? "bg-primary text-primary-foreground border-primary hover:bg-primary"
                    : "bg-card text-foreground border-primary/40 hover:bg-primary/10"
                }`}
                variant="outline"
              >
                너무 낮아
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed bottom button */}
      <div className="p-6 bg-card">
        <Button
          onClick={handleNext}
          disabled={!isComplete || isSubmitting}
          className={`w-full h-14 rounded-xl ${typography.button} font-bold transition-all ${
            isComplete && !isSubmitting
              ? "bg-primary hover:bg-primary/90 text-primary-foreground"
              : "bg-primary/30 text-primary-foreground cursor-not-allowed"
          }`}
        >
          {isSubmitting ? "저장 중..." : "다음"}
        </Button>
      </div>
    </div>
  );
};

export default SinkSurvey;
