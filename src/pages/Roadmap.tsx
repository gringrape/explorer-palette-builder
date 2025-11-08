import { Button } from "@/components/ui/button";
import { typography } from "@/theme/typography";
import { useNavigate } from "react-router-dom";
import characterImage from "@/assets/character.png";


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
      <header className="h-[11%] px-6 flex items-center justify-center flex-col">
        <div className="w-full h-2 bg-primary/20 rounded-full mb-6">
          <div className="w-1/3 h-full bg-primary rounded-full"></div>
        </div>
        <h1 className={`${typography.title} font-bold text-primary`}>
          탐사 지도
        </h1>
      </header>

      <div className="flex-1 overflow-y-auto p-6">
        {/* Progress bar */}


        {/* Mission box */}
        <div className="flex items-center gap-10 border-4 border-foreground bg-card p-4 mb-4">
          <img src={characterImage} alt="Mission" className="w-20 h-20" />
          <div>
            <p className={`${typography.title} font-bold text-center text-foreground`}>
              모모 Mission
            </p>
            <p className={`${typography.body} font-bold text-center text-foreground mt-2`}>
              화장실을 조사하고
              <br />더 나은 학교 만들기!
            </p>
          </div>
        </div>

        {/* Roadmap flowchart */}
        <div className="relative min-h-[500px] mb-8 px-4">
          {/* SVG for connecting lines - Zigzag pattern */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 500" preserveAspectRatio="none" style={{ zIndex: 0 }}>
            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="10"
                refX="9"
                refY="3"
                orient="auto"
              >
                <polygon
                  points="0 0, 10 3, 0 6"
                  className="fill-primary"
                />
              </marker>
            </defs>
            {/* 위치(왼쪽) -> 문(오른쪽) */}
            <path
              d="M 80 50 L 200 50 L 200 90 L 320 90"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              className="text-primary"
              markerEnd="url(#arrowhead)"
              style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
            />
            {/* 문(오른쪽) -> 크기(왼쪽) */}
            <path
              d="M 320 130 L 200 130 L 200 170 L 80 170"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              className="text-primary"
              markerEnd="url(#arrowhead)"
              style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
            />
            {/* 크기(왼쪽) -> 사진(오른쪽) */}
            <path
              d="M 80 210 L 200 210 L 200 250 L 320 250"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              className="text-primary"
              markerEnd="url(#arrowhead)"
              style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
            />
            {/* 사진(오른쪽) -> 손잡이(왼쪽) */}
            <path
              d="M 320 290 L 200 290 L 200 330 L 80 330"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              className="text-primary"
              markerEnd="url(#arrowhead)"
              style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
            />
            {/* 손잡이(왼쪽) -> 세면대(오른쪽) */}
            <path
              d="M 80 370 L 200 370 L 200 410 L 320 410"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              className="text-primary"
              markerEnd="url(#arrowhead)"
              style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
            />
          </svg>

          {/* Step nodes - 2 columns layout */}
          <div className="relative z-10 flex justify-between h-full">
            {/* 왼쪽 열 */}
            <div className="flex flex-col items-center justify-start gap-20 pt-0">
              {/* 위치 */}
              <div className="bg-card border-2 border-primary rounded-full w-20 h-20 flex items-center justify-center shadow-md">
                <span className={`${typography.body} font-bold text-foreground`}>위치</span>
              </div>

              {/* 크기 */}
              <div className="bg-card border-2 border-primary rounded-full w-20 h-20 flex items-center justify-center shadow-md">
                <span className={`${typography.body} font-bold text-foreground`}>크기</span>
              </div>

              {/* 손잡이 */}
              <div className="bg-card border-2 border-primary rounded-full w-20 h-20 flex items-center justify-center shadow-md">
                <span className={`${typography.body} font-bold text-foreground`}>손잡이</span>
              </div>
            </div>

            {/* 오른쪽 열 */}
            <div className="flex flex-col items-center justify-start gap-20 pt-20">
              {/* 문 */}
              <div className="bg-card border-2 border-primary rounded-full w-20 h-20 flex items-center justify-center shadow-md">
                <span className={`${typography.body} font-bold text-foreground`}>문</span>
              </div>

              {/* 사진 */}
              <div className="bg-card border-2 border-primary rounded-full w-20 h-20 flex items-center justify-center shadow-md">
                <span className={`${typography.body} font-bold text-foreground`}>사진</span>
              </div>

              {/* 세면대 */}
              <div className="bg-card border-2 border-primary rounded-full w-20 h-20 flex items-center justify-center shadow-md">
                <span className={`${typography.body} font-bold text-foreground`}>세면대</span>
              </div>
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
