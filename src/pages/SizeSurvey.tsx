import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { typography } from "@/theme/typography";
import { useNavigate } from "react-router-dom";
import characterImage from "@/assets/character.png";

const SizeSurvey = () => {
  const navigate = useNavigate();
  const [width, setWidth] = useState<string>("");
  const [height, setHeight] = useState<string>("");

  const isSelected = width !== "" && height !== "";

  const handleNext = () => {
    console.log("Size survey:", { width, height });
    // Navigate to next survey screen
  };

  return (
    <div className="h-svh flex flex-col bg-card">
      <header className="h-[11%] px-6 flex items-center justify-center flex-col">
        <div className="w-full h-2 bg-primary/20 rounded-full mb-2">
          <div className="w-3/6 h-full bg-primary rounded-full"></div>
        </div>
        <p className={`${typography.body} text-foreground`}>모모탐사대</p>
        <h1 className={`${typography.title} font-bold text-primary`}>
          화장실 길이를 재자
        </h1>
      </header>

      <div className="flex-1 overflow-y-auto p-6 space-y-2">
        {/* 특별 미션 섹션 */}
        <div className="bg-primary/10 border-2 border-primary rounded-lg p-4 space-y-3">
          <div className="space-y-2">
            <p className={`${typography.body} font-bold text-foreground`}>
              특별 미션#1 (준비물: 줄자)
            </p>
            <p className={`${typography.body} text-foreground`}>
              줄자를 들고<br />
              화장실 크기를 재자<br />
              (이미지 삽입 필요)
            </p>
          </div>
          
          {/* 가이드 이미지 영역 */}
          <div className="bg-card border-2 border-primary rounded-lg p-6">
            <div className="flex flex-col items-center justify-center space-y-2">
              <img 
                src={characterImage} 
                alt="크기 측정 가이드" 
                className="w-24 h-auto opacity-50"
              />
              <p className={`${typography.body} text-center text-foreground`}>
                1.5m x 1.5m 가이드<br />
                (이미지 삽입 필요)
              </p>
            </div>
          </div>
        </div>

        {/* 입력 필드 섹션 */}
        <div className="bg-card p-4 space-y-4">
          {/* 가로 입력 */}
          <div className="space-y-2">
            <label className={`${typography.body} font-bold text-foreground`}>
              가로
            </label>
            <div className="relative">
              <Input
                type="number"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
                placeholder="000"
                className="w-full border-2 border-primary rounded-xl h-12 px-4 text-center text-lg focus:ring-2 focus:ring-primary transition-all"
              />
              <span className={`absolute right-4 top-1/2 -translate-y-1/2 ${typography.body} text-foreground`}>
                cm
              </span>
            </div>
          </div>

          {/* 세로 입력 */}
          <div className="space-y-2">
            <label className={`${typography.body} font-bold text-foreground`}>
              세로
            </label>
            <div className="relative">
              <Input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="000"
                className="w-full border-2 border-primary rounded-xl h-12 px-4 text-center text-lg focus:ring-2 focus:ring-primary transition-all"
              />
              <span className={`absolute right-4 top-1/2 -translate-y-1/2 ${typography.body} text-foreground`}>
                cm
              </span>
            </div>
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

export default SizeSurvey;
