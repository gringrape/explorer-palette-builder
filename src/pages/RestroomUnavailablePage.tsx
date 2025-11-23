import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { typography } from "@/theme/typography";
import { momoUnavailable } from "@/assets";
import { useSurvey } from "@/contexts/SurveyContext";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const RestroomUnavailablePage = () => {
  const navigate = useNavigate();
  const { surveyData, updateSurveyData, resetSurveyData } = useSurvey();
  const { toast } = useToast();
  const [whyNotUse, setWhyNotUse] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleReasonToggle = (value: string) => {
    const newWhyNotUse = whyNotUse.includes(value)
      ? whyNotUse.filter((v) => v !== value)
      : [...whyNotUse, value];
    setWhyNotUse(newWhyNotUse);
  };

  const handleSubmit = async () => {
    if (whyNotUse.length === 0) {
      toast({
        title: "이유를 선택해주세요",
        description: "화장실을 사용할 수 없는 이유를 선택해주세요.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    updateSurveyData({ whyNotUse });

    const finalData = {
      ...surveyData,
      whyNotUse,
    };

    try {
      const { error } = await supabase.from("survey_responses").insert({
        team_name: finalData.teamName,
        team_members: finalData.teamMembers,
        building: finalData.building,
        floor: finalData.floor,
        gender: finalData.gender,
        dream_school: finalData.dreamSchool,
        can_use_restroom: finalData.canUseRestroom,
        why_not_use: finalData.whyNotUse,
        door_type: null,
        width: null,
        height: null,
        photos: null,
        handrail_types: null,
        has_sink: null,
        can_wash: null,
        sink_height: null,
      });

      if (error) {
        console.error("Error saving survey:", error);
        toast({
          title: "저장 실패",
          description: "설문 데이터 저장에 실패했습니다. 다시 시도해주세요.",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }

      console.log("Survey saved successfully!");
      toast({
        title: "저장 완료",
        description: "설문 데이터가 성공적으로 저장되었습니다.",
      });

      resetSurveyData();
      navigate("/goodbye");
    } catch (error) {
      console.error("Unexpected error:", error);
      toast({
        title: "오류 발생",
        description: "예상치 못한 오류가 발생했습니다.",
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
              onClick={() => handleReasonToggle("cleaning")}
              className={`w-full h-16 rounded-full border-2 ${typography.button} font-bold transition-all ${
                whyNotUse.includes("cleaning")
                  ? "bg-primary text-primary-foreground border-primary hover:bg-primary"
                  : "bg-card text-foreground border-primary/40 hover:bg-primary/10"
              }`}
              variant="outline"
            >
              청소도구함으로 쓰이고 있어
            </Button>
            <Button
              onClick={() => handleReasonToggle("student")}
              className={`w-full h-16 rounded-full border-2 ${typography.button} font-bold transition-all ${
                whyNotUse.includes("student")
                  ? "bg-primary text-primary-foreground border-primary hover:bg-primary"
                  : "bg-card text-foreground border-primary/40 hover:bg-primary/10"
              }`}
              variant="outline"
            >
              학생 탈의실로 쓰이고 있어
            </Button>
            <Button
              onClick={() => handleReasonToggle("teacher")}
              className={`w-full h-16 rounded-full border-2 ${typography.button} font-bold transition-all ${
                whyNotUse.includes("teacher")
                  ? "bg-primary text-primary-foreground border-primary hover:bg-primary"
                  : "bg-card text-foreground border-primary/40 hover:bg-primary/10"
              }`}
              variant="outline"
            >
              교사, 일반학생 화장실로 쓰여
            </Button>
            <Button
              onClick={() => handleReasonToggle("broken")}
              className={`w-full h-16 rounded-full border-2 ${typography.button} font-bold transition-all ${
                whyNotUse.includes("broken")
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
                whyNotUse.includes("other")
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
          disabled={whyNotUse.length === 0 || isSubmitting}
          className={`w-full h-14 rounded-xl ${typography.button} font-bold transition-all ${
            whyNotUse.length > 0 && !isSubmitting
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
