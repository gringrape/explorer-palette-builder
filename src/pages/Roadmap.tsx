import { Button } from "@/components/ui/button";
import { typography } from "@/theme/typography";
import { useNavigate } from "react-router-dom";

const Roadmap = () => {
  const navigate = useNavigate();

  const roadmapSteps = [
    { id: 1, label: "위치", position: "top-0 left-8" },
    { id: 2, label: "문", position: "top-16 left-32" },
    { id: 3, label: "크기", position: "top-32 right-16" },
    { id: 4, label: "사진", position: "top-48 right-8" },
    { id: 5, label: "승강이", position: "top-64 right-24" },
    { id: 6, label: "세면대", position: "top-80 left-24" },
    { id: 7, label: "보스", position: "top-96 left-4" },
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
        <div className="relative min-h-[400px] mb-8">
          {/* SVG for connecting lines */}
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
            <path
              d="M 80 40 Q 120 60 160 80"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="text-foreground"
            />
            <path
              d="M 180 100 Q 220 120 260 140"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="text-foreground"
            />
            <path
              d="M 280 160 Q 280 200 280 240"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="text-foreground"
            />
            <path
              d="M 260 260 Q 240 290 280 320"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="text-foreground"
            />
            <path
              d="M 260 340 Q 200 360 180 380"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="text-foreground"
            />
            <path
              d="M 160 400 Q 100 410 80 420"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="text-foreground"
            />
          </svg>

          {/* Step nodes */}
          <div className="absolute top-4 left-12">
            <div className="bg-card border-2 border-foreground rounded-full w-20 h-20 flex items-center justify-center">
              <span className={`${typography.body} font-bold text-foreground`}>위치</span>
            </div>
          </div>

          <div className="absolute top-20 left-32">
            <div className="bg-card border-2 border-foreground rounded-full w-24 h-24 flex items-center justify-center">
              <span className={`${typography.body} font-bold text-foreground`}>문</span>
            </div>
          </div>

          <div className="absolute top-36 right-20">
            <div className="bg-card border-2 border-foreground rounded-full w-20 h-20 flex items-center justify-center">
              <span className={`${typography.body} font-bold text-foreground`}>크기</span>
            </div>
          </div>

          <div className="absolute top-52 right-12">
            <div className="bg-card border-2 border-foreground rounded-full w-20 h-20 flex items-center justify-center">
              <span className={`${typography.body} font-bold text-foreground`}>사진</span>
            </div>
          </div>

          <div className="absolute top-[280px] right-16">
            <div className="bg-card border-2 border-foreground rounded-full w-24 h-24 flex items-center justify-center">
              <span className={`${typography.body} font-bold text-foreground`}>승강이</span>
            </div>
          </div>

          <div className="absolute top-[360px] left-28">
            <div className="bg-card border-2 border-foreground rounded-full w-24 h-24 flex items-center justify-center">
              <span className={`${typography.body} font-bold text-foreground`}>세면대</span>
            </div>
          </div>

          <div className="absolute top-[440px] left-8">
            <div className="bg-card border-2 border-foreground rounded-full w-20 h-20 flex items-center justify-center">
              <span className={`${typography.body} font-bold text-foreground`}>보스</span>
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
