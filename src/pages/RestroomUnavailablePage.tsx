import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { typography } from "@/theme/typography";
import { useSurvey } from "@/contexts/SurveyContext";
import { saveSurveyResponse } from "@/lib/api";
import { useToast } from "@/hooks/use-toast";

const RestroomUnavailablePage = () => {
  const navigate = useNavigate();
  const { surveyData, updateSurveyData, resetSurveyData } = useSurvey();
  const { toast } = useToast();
  const [unavailableReason, setUnavailableReason] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleReasonToggle = (value: string) => {
    const newUnavailableReason = unavailableReason.includes(value)
      ? unavailableReason.filter((v) => v !== value)
      : [...unavailableReason, value];
    setUnavailableReason(newUnavailableReason);
  };

  const handleSubmit = async () => {
    if (unavailableReason.length === 0) {
      toast({
        title: "이유를 선택해주세요",
        description: "화장실을 사용할 수 없는 이유를 선택해주세요.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    updateSurveyData({ unavailableReason });

    const finalData = {
      ...surveyData,
      unavailableReason,
    };

    try {
      await saveSurveyResponse(finalData);

      console.log("Survey saved successfully!");
      toast({
        title: "저장 완료",
        description: "설문 데이터가 성공적으로 저장되었습니다.",
      });

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

  return (
    <div className="h-svh flex flex-col bg-card">
      <header className="h-[11%] px-6 flex items-center justify-center flex-col">
        <div className="w-full h-2 bg-primary/20 rounded-full mb-2">
          <div className="w-1/4 h-full bg-primary rounded-full"></div>
        </div>
        <p className={`${typography.body} text-foreground`}>모모탐사대</p>
        <h1 className={`${typography.title} font-bold text-primary`}>
          화장실 상태 조사
        </h1>
      </header>

      <div className="flex-1 overflow-y-auto p-6">
        <div className="bg-card space-y-6">
          {/* 메시지 */}
          <div className="p-6">
            <p className={`${typography.body} font-bold text-foreground text-center mb-4`}>
              모모가 화장실을
              <br />
              왜 사용할 수 없을까?
            </p>
          </div>

          {/* 이유 선택 버튼들 */}
          <div className="space-y-3 px-6">
            <Button
              onClick={() => handleReasonToggle("storage")}
              className={`w-full h-16 rounded-full border-2 ${typography.button} font-bold transition-all ${
                unavailableReason.includes("storage")
                  ? "bg-primary text-primary-foreground border-primary hover:bg-primary"
                  : "bg-card text-foreground border-primary/40 hover:bg-primary/10"
              }`}
              variant="outline"
            >
              청소도구함으로 쓰이고 있어
            </Button>
            <Button
              onClick={() => handleReasonToggle("changing_room")}
              className={`w-full h-16 rounded-full border-2 ${typography.button} font-bold transition-all ${
                unavailableReason.includes("changing_room")
                  ? "bg-primary text-primary-foreground border-primary hover:bg-primary"
                  : "bg-card text-foreground border-primary/40 hover:bg-primary/10"
              }`}
              variant="outline"
            >
              학생 탈의실로 쓰이고 있어
            </Button>
            <Button
              onClick={() => handleReasonToggle("general_use")}
              className={`w-full h-16 rounded-full border-2 ${typography.button} font-bold transition-all ${
                unavailableReason.includes("general_use")
                  ? "bg-primary text-primary-foreground border-primary hover:bg-primary"
                  : "bg-card text-foreground border-primary/40 hover:bg-primary/10"
              }`}
              variant="outline"
            >
              교사, 일반학생 화장실로 쓰여
            </Button>
            <Button
              onClick={() => handleReasonToggle("out_of_order")}
              className={`w-full h-16 rounded-full border-2 ${typography.button} font-bold transition-all ${
                unavailableReason.includes("out_of_order")
                  ? "bg-primary text-primary-foreground border-primary hover:bg-primary"
                  : "bg-card text-foreground border-primary/40 hover:bg-primary/10"
              }`}
              variant="outline"
            >
              화장실이 고장났어
            </Button>
            <Button
              onClick={() => handleReasonToggle("other")}
              className={`w-full h-16 rounded-full border-2 ${typography.button} font-bold transition-all ${
                unavailableReason.includes("other")
                  ? "bg-primary text-primary-foreground border-primary hover:bg-primary"
                  : "bg-card text-foreground border-primary/40 hover:bg-primary/10"
              }`}
              variant="outline"
            >
              기타
            </Button>
          </div>
        </div>
      </div>

      {/* Fixed bottom button */}
      <div className="p-6 bg-card">
        <Button
          onClick={handleSubmit}
          disabled={unavailableReason.length === 0 || isSubmitting}
          className={`w-full h-14 rounded-xl ${typography.button} font-bold transition-all ${
            unavailableReason.length > 0 && !isSubmitting
              ? "bg-primary hover:bg-primary/90 text-primary-foreground"
              : "bg-primary/30 text-primary-foreground cursor-not-allowed"
          }`}
        >
          {isSubmitting ? "저장 중..." : "제출하기"}
        </Button>
      </div>
    </div>
  );
};

export default RestroomUnavailablePage;
