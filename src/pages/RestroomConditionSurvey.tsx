import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { typography } from "@/theme/typography";

const RestroomConditionSurvey = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [dreamSchool, setDreamSchool] = useState<string>("");
  const [canUseRestroom, setCanUseRestroom] = useState<string>("");
  const [whyNotUse, setWhyNotUse] = useState<string[]>([]);

  const handleDreamSchoolSelect = (value: string) => {
    setDreamSchool(value);
    setTimeout(() => setCurrentStep(2), 300);
  };

  const handleCanUseSelect = (value: string) => {
    setCanUseRestroom(value);
    if (value === "yes") {
      // 장애인 화장실을 사용할 수 있으면 시작 화면으로
      setTimeout(() => navigate("/survey-start"), 300);
    } else {
      // 사용할 수 없으면 종료 화면으로
      setTimeout(() => navigate("/restroom-unavailable"), 300);
    }
  };

  const handleWhyNotUseToggle = (value: string) => {
    const newWhyNotUse = whyNotUse.includes(value)
      ? whyNotUse.filter((v) => v !== value)
      : [...whyNotUse, value];
    setWhyNotUse(newWhyNotUse);
    
    // 선택 후 바로 goodbye 페이지로 이동
    console.log("Restroom condition survey:", { dreamSchool, canUseRestroom, whyNotUse: newWhyNotUse });
    setTimeout(() => navigate("/goodbye"), 300);
  };

  return (
    <div className="h-svh flex flex-col bg-card">
      <header className="h-[11%] px-6 flex items-center justify-center flex-col">
        <div className="w-full h-2 bg-primary/20 rounded-full mb-2">
          <div className="w-1/4 h-full bg-primary rounded-full"></div>
        </div>
        <p className={`${typography.body} text-foreground`}>모모탐사대</p>
        <h1 className={`${typography.title} font-bold text-primary`}>화장실 상태 조사</h1>
      </header>

      <div className="flex-1 overflow-y-auto p-6">
        <div className="bg-card space-y-6">
          {/* Step 1: 모모가 꿈꾸는 모두의 학교 */}
          {currentStep === 1 && (
            <div className="animate-fade-in space-y-4">
              <div className="p-6 space-y-4">
                <p className={`${typography.body} font-bold text-foreground text-center mb-4`}>
                  모모가 꿈꾸는 모두의 학교는
                  <br />
                  어떤 학교일까?
                </p>
                <Button
                  onClick={() => handleDreamSchoolSelect("accessible")}
                  className={`w-full h-20 rounded-full border-2 ${typography.button} font-bold transition-all ${
                    dreamSchool === "accessible"
                      ? "bg-primary text-primary-foreground border-primary hover:bg-primary"
                      : "bg-card text-foreground border-primary/40 hover:bg-primary/10"
                  }`}
                  variant="outline"
                >
                  장애인화장실이 청소도구함으로
                  <br />
                  쓰이지 않는 학교
                </Button>
                <Button
                  onClick={() => handleDreamSchoolSelect("nearby")}
                  className={`w-full h-20 rounded-full border-2 ${typography.button} font-bold transition-all ${
                    dreamSchool === "nearby"
                      ? "bg-primary text-primary-foreground border-primary hover:bg-primary"
                      : "bg-card text-foreground border-primary/40 hover:bg-primary/10"
                  }`}
                  variant="outline"
                >
                  체육시간에 혼자 남아있는
                  <br />
                  친구가 없는 학교
                </Button>
                <Button
                  onClick={() => handleDreamSchoolSelect("wheelchair")}
                  className={`w-full h-20 rounded-full border-2 ${typography.button} font-bold transition-all ${
                    dreamSchool === "wheelchair"
                      ? "bg-primary text-primary-foreground border-primary hover:bg-primary"
                      : "bg-card text-foreground border-primary/40 hover:bg-primary/10"
                  }`}
                  variant="outline"
                >
                  휠체어를 타고
                  <br />
                  모든 장소를 갈 수 있는 학교
                </Button>
              </div>
            </div>
          )}

          {/* Step 2: 모모가 장애인 화장실을 사용할 수 있을까? */}
          {currentStep === 2 && (
            <div className="animate-fade-in space-y-4">
              <div className="p-6 space-y-4">
                <p className={`${typography.body} font-bold text-foreground text-center mb-4`}>
                  모모가 장애인 화장실을
                  <br />
                  사용할 수 있을까?
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    onClick={() => handleCanUseSelect("yes")}
                    className={`h-16 rounded-full border-2 ${typography.button} font-bold transition-all ${
                      canUseRestroom === "yes"
                        ? "bg-primary text-primary-foreground border-primary hover:bg-primary"
                        : "bg-card text-foreground border-primary/40 hover:bg-primary/10"
                    }`}
                    variant="outline"
                  >
                    있음
                  </Button>
                  <Button
                    onClick={() => handleCanUseSelect("no")}
                    className={`h-16 rounded-full border-2 ${typography.button} font-bold transition-all ${
                      canUseRestroom === "no"
                        ? "bg-primary text-primary-foreground border-primary hover:bg-primary"
                        : "bg-card text-foreground border-primary/40 hover:bg-primary/10"
                    }`}
                    variant="outline"
                  >
                    없음
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: 모모가 화장실을 왜 사용할 수 없을까? */}
          {currentStep === 3 && (
            <div className="animate-fade-in space-y-4">
              <div className="p-6 space-y-4">
                <p className={`${typography.body} font-bold text-foreground text-center mb-4`}>
                  모모가 화장실을
                  <br />왜 사용할 수 없을까?
                </p>
                <Button
                  onClick={() => handleWhyNotUseToggle("cleaning")}
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
                  onClick={() => handleWhyNotUseToggle("student")}
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
                  onClick={() => handleWhyNotUseToggle("teacher")}
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
                  onClick={() => handleWhyNotUseToggle("broken")}
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
                  onClick={() => handleWhyNotUseToggle("other")}
                  className={`w-full h-16 rounded-full border-2 ${typography.button} font-bold transition-all ${
                    whyNotUse.includes("other")
                      ? "bg-primary text-primary-foreground border-primary hover:bg-primary"
                      : "bg-card text-foreground border-primary/40 hover:bg-primary/10"
                  }`}
                  variant="outline"
                >
                  기타 입력
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

    </div>
  );
};

export default RestroomConditionSurvey;
