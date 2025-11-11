import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import characterImage from "@/assets/character.png";
import { typography } from "@/theme/typography";

const Index = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/team-info");
  };

  return (
    <div className="h-svh flex flex-col bg-card relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-16 h-16 bg-primary/10 rounded-full"></div>
        <div className="absolute top-32 right-20 w-12 h-12 bg-primary/10 rounded-full"></div>
        <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-primary/10 rounded-full"></div>
        <div className="absolute bottom-20 right-1/3 w-14 h-14 bg-primary/10 rounded-full"></div>
      </div>

      <header className="h-[11%] flex items-center justify-center relative z-10">    
        <h1 className={`${typography.title} font-bold text-primary`}>모모탐사대</h1>
      </header>
      
      <div className="flex-1 flex flex-col items-center overflow-y-auto p-6 relative z-10">
        {/* Main title */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            🎒 장애물 없는 학교를 위한 여정
          </h2>
          <p className={`${typography.body} text-muted-foreground`}>
            우리 학교의 숨은 불편함을 찾아 떠나요!
          </p>
        </div>

        {/* Character and speech bubble centered */}
        <div className="flex flex-col items-center justify-center space-y-4 mb-8">
          <div className="w-48 h-48 relative flex-shrink-0">
            <img 
              src={characterImage}
              alt="모모 캐릭터"
              className="w-full h-full object-contain"
            />
          </div>
          
          <div className="relative bg-card border-4 border-primary rounded-3xl px-8 py-6 shadow-lg max-w-md">
            <p className={`text-center font-bold ${typography.body} leading-relaxed text-foreground`}>
              <span className="text-primary">"모두의 학교"</span>를 위한<br />
              <span className="text-primary">"탐험"</span>을 떠나기 위해 오신<br />
              여러분 <strong>환영</strong>합니다! 🎉
            </p>
            
            {/* Speech bubble tail pointing upward to character */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full">
              <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[20px] border-t-primary"></div>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[16px] border-t-card"></div>
            </div>
          </div>
        </div>

        {/* Mission cards */}
        <div className="grid grid-cols-3 gap-4 max-w-2xl w-full mt-6">
          <div className="bg-primary/5 border-2 border-primary/20 rounded-2xl p-4 text-center">
            <div className="text-3xl mb-2">📍</div>
            <p className="text-sm font-semibold text-foreground">위치 조사</p>
          </div>
          <div className="bg-primary/5 border-2 border-primary/20 rounded-2xl p-4 text-center">
            <div className="text-3xl mb-2">📏</div>
            <p className="text-sm font-semibold text-foreground">크기 측정</p>
          </div>
          <div className="bg-primary/5 border-2 border-primary/20 rounded-2xl p-4 text-center">
            <div className="text-3xl mb-2">📸</div>
            <p className="text-sm font-semibold text-foreground">사진 촬영</p>
          </div>
        </div>

        {/* Info text */}
        <div className="mt-8 text-center max-w-lg">
          <p className="text-sm text-muted-foreground leading-relaxed">
            💡 화장실의 접근성을 확인하고, 모두가 편하게<br />
            이용할 수 있는 학교를 만드는 첫 걸음을 함께해요!
          </p>
        </div>
      </div>

      {/* Fixed bottom button */}
      <div className="p-6 bg-card relative z-10">
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

export default Index;
