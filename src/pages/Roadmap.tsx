import { Button } from "@/components/ui/button";
import { typography } from "@/theme/typography";
import { useNavigate } from "react-router-dom";

const Roadmap = () => {
  const navigate = useNavigate();

  const roadmapSteps = [
    { id: 1, label: "위치" },
    { id: 2, label: "문" },
    { id: 3, label: "크기" },
    { id: 4, label: "사진" },
    { id: 5, label: "손잡이" },
    { id: 6, label: "세면대" },
  ];

  const handleNext = () => {
    console.log("Starting mission");
    // Navigate to next screen
  };

  return (
    <div className="h-svh flex flex-col bg-card">
      <header className="h-[11%] flex items-center justify-center">
        <h1 className={`${typography.title} font-bold text-primary`}>
          03 화장실 조사 로드맵
        </h1>
      </header>

      <div className="flex-1 overflow-y-auto p-6">
        {/* Progress bar */}
        <div className="w-full h-2 bg-primary/20 rounded-full mb-6">
          <div className="w-1/3 h-full bg-primary rounded-full"></div>
        </div>

        {/* Section title */}
        <div className="mb-6">
          <p className={`${typography.body} text-foreground/70`}>모모탐사대</p>
          <h2 className={`${typography.title} font-bold text-foreground`}>
            화장실 탐사 지도
          </h2>
        </div>

        {/* Mission box */}
        <div className="border-4 border-foreground bg-card p-6 mb-8">
          <p className={`${typography.title} font-bold text-center text-foreground`}>
            mission
          </p>
          <p className={`${typography.body} font-bold text-center text-foreground mt-2`}>
            탐사 안료하고
            <br />더 나은 학교 만들기!
          </p>
        </div>

        {/* Roadmap flowchart */}
        <div className="relative min-h-[450px] mb-8">
          {/* SVG for connecting lines */}
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
            {/* 위치 -> 문 */}
            <path
              d="M 80 50 Q 120 60 160 90"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              className="text-foreground"
            />
            {/* 문 -> 크기 */}
            <path
              d="M 190 110 Q 230 140 250 170"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              className="text-foreground"
            />
            {/* 크기 -> 사진 */}
            <path
              d="M 270 200 Q 280 230 270 260"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              className="text-foreground"
            />
            {/* 사진 -> 손잡이 */}
            <path
              d="M 250 280 Q 200 310 150 330"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              className="text-foreground"
            />
            {/* 손잡이 -> 세면대 */}
            <path
              d="M 130 350 Q 100 380 90 410"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              className="text-foreground"
            />
          </svg>

          {/* Step nodes */}
          {/* 위치 */}
          <div className="absolute top-6 left-12">
            <div className="bg-card border-2 border-foreground rounded-full w-20 h-20 flex items-center justify-center">
              <span className={`${typography.body} font-bold text-foreground`}>위치</span>
            </div>
          </div>

          {/* 문 */}
          <div className="absolute top-24 left-32">
            <div className="bg-card border-2 border-foreground rounded-full w-20 h-20 flex items-center justify-center">
              <span className={`${typography.body} font-bold text-foreground`}>문</span>
            </div>
          </div>

          {/* 크기 */}
          <div className="absolute top-40 right-20">
            <div className="bg-card border-2 border-foreground rounded-full w-20 h-20 flex items-center justify-center">
              <span className={`${typography.body} font-bold text-foreground`}>크기</span>
            </div>
          </div>

          {/* 사진 */}
          <div className="absolute top-56 right-16">
            <div className="bg-card border-2 border-foreground rounded-full w-20 h-20 flex items-center justify-center">
              <span className={`${typography.body} font-bold text-foreground`}>사진</span>
            </div>
          </div>

          {/* 손잡이 */}
          <div className="absolute top-72 left-24">
            <div className="bg-card border-2 border-foreground rounded-full w-20 h-20 flex items-center justify-center">
              <span className={`${typography.body} font-bold text-foreground`}>손잡이</span>
            </div>
          </div>

          {/* 세면대 */}
          <div className="absolute top-[360px] left-12">
            <div className="bg-card border-2 border-foreground rounded-full w-20 h-20 flex items-center justify-center">
              <span className={`${typography.body} font-bold text-foreground`}>세면대</span>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed bottom button */}
      <div className="p-6 bg-card">
        <Button
          onClick={handleNext}
          className={`w-full h-14 rounded-xl ${typography.button} font-bold bg-primary hover:bg-primary/90 text-primary-foreground transition-all`}
        >
          탐사 시작하기
        </Button>
      </div>
    </div>
  );
};

export default Roadmap;
