import { useState } from "react";
import { Button } from "@/components/ui/button";
import { typography } from "@/theme/typography";
import { colors } from "@/theme/colors";
import { useNavigate } from "react-router-dom";
import { useSurvey } from "@/contexts/SurveyContext";

const LocationSurvey = () => {
  const navigate = useNavigate();
  const { updateSurveyData } = useSurvey();
  const [accessibleRestroom, setAccessibleRestroom] = useState<boolean | null>(null);
  const [building, setBuilding] = useState<string>("");
  const [floor, setFloor] = useState<number | null>(null);
  const [restroomGender, setRestroomGender] = useState<string>("");

  const isAllSelected = accessibleRestroom === false || (accessibleRestroom === true && building !== "" && floor !== null && restroomGender !== "");

  const handleNext = () => {
    updateSurveyData({ hasAccessibleRestroom: accessibleRestroom, building, floor, restroomGender });
    console.log("Location survey:", { accessibleRestroom, building, floor, restroomGender });
    
    if (accessibleRestroom === false) {
      navigate("/restroom-unavailable");
    } else {
      navigate("/survey-start");
    }
  };

  const canUseOptions = [
    { label: "사용할 수 있어!", value: true },
    { label: "사용 못해", value: false }
  ];

  const buildingOptions = ["본관", "별관", "체육관", "기타"];
  const floorOptions = [1, 2, 3, 4];
  const genderOptions = ["남자 화장실", "여자 화장실", "모두 사용할수 있음"];

  return (
    <div className="h-svh flex flex-col bg-card">
      <header className="h-[11%] px-6 flex items-center justify-center flex-col">
        <div className="w-full h-2 bg-primary/20 rounded-full mb-2">
          <div className="w-1/6 h-full bg-primary rounded-full"></div>
        </div>
        <p className={`${typography.body} text-foreground`}>모모탐사대</p>
        <h1 className={`${typography.title} font-bold text-primary`}>
          화장실 위치 조사
        </h1>
      </header>

      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {/* 장애인화장실 사용 가능 여부 */}
        <div className="bg-card p-4">
          <h2 className={`${typography.title} font-bold text-foreground mb-4`}>
            모모가 우리학교 장애인화장실을 쓸 수 있어?
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {canUseOptions.map((option) => (
              <Button
                key={option.label}
                onClick={() => setAccessibleRestroom(option.value)}
                className={`h-14 rounded-full border-2 ${typography.button} font-bold transition-all ${
                  accessibleRestroom === option.value
                    ? colors.button.selected
                    : colors.button.unselected
                }`}
                variant="outline"
              >
                {option.label}
              </Button>
            ))}
          </div>
        </div>

        {/* 건물 찾기 */}
        <div className={`bg-card p-4 transition-all duration-300 ${accessibleRestroom === false ? "opacity-30 pointer-events-none" : ""}`}>
          <h2 className={`${typography.title} font-bold text-foreground mb-4`}>
            어떤 건물의 화장실이야?
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {buildingOptions.map((option) => (
              <Button
                key={option}
                onClick={() => setBuilding(option)}
                className={`h-14 rounded-full border-2 ${typography.button} font-bold transition-all ${
                  building === option
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

        {/* 층수 찾기 */}
        <div className={`bg-card p-4 transition-all duration-300 ${accessibleRestroom === false ? "opacity-30 pointer-events-none" : ""}`}>
          <h2 className={`${typography.title} font-bold text-foreground mb-4`}>
            화장실이 몇층에 있어?
          </h2>
          <div className="grid grid-cols-4 gap-3">
            {floorOptions.map((option) => (
              <Button
                key={option}
                onClick={() => setFloor(option)}
                className={`h-14 rounded-full border-2 ${typography.button} font-bold transition-all ${
                  floor === option
                    ? colors.button.selected
                    : colors.button.unselected
                }`}
                variant="outline"
              >
                {option}층
              </Button>
            ))}
          </div>
        </div>

        {/* 성별 구분 */}
        <div className={`bg-card p-4 transition-all duration-300 ${accessibleRestroom === false ? "opacity-30 pointer-events-none" : ""}`}>
          <h2 className={`${typography.title} font-bold text-foreground mb-4`}>
            남자 화장실이야, 여자 화장실이야?
          </h2>
          <div className="flex flex-col gap-3">
            {genderOptions.map((option) => (
              <Button
                key={option}
                onClick={() => setRestroomGender(option)}
                className={`h-14 rounded-full border-2 ${typography.button} font-bold transition-all ${
                  restroomGender === option
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
          disabled={!isAllSelected}
          className={`w-full h-14 rounded-xl ${typography.button} font-bold transition-all ${
            isAllSelected
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

export default LocationSurvey;
