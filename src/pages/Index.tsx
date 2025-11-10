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
    <div className="h-svh flex flex-col bg-card">
      <header className="h-[11%] flex items-center justify-center">    
        <h1 className={`${typography.title} font-bold text-primary`}>모모탐사대</h1>
      </header>
      
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        {/* Character and speech bubble centered */}
        <div className="flex flex-col items-center space-y-8 mb-8">
          <div className="w-48 h-48 relative">
            <img 
              src={characterImage}
              alt="모모 캐릭터"
              className="w-full h-full object-contain"
            />
          </div>
          
          <div className="relative bg-card border-4 border-primary rounded-3xl px-8 py-6 shadow-lg max-w-md">
            <p className={`text-center font-bold ${typography.body} leading-relaxed text-foreground`}>
              이동약자 친구들을 돕기 위한<br />
              <span className="text-primary">"탐험도구"</span>들을 확인해보자!
            </p>
            
            <p className={`text-center ${typography.body} leading-relaxed text-foreground mt-4`}>
              모두의 학교를 위한<br />
              탐험을 떠나기 위해 오신<br />
              여러분 환영합니다! 🎉
            </p>
          </div>
        </div>
      </div>

      {/* Fixed bottom button */}
      <div className="p-6 bg-card">
        <Button
          onClick={handleNext}
          className={`w-full h-14 rounded-xl ${typography.button} font-bold bg-primary hover:bg-primary/90 text-primary-foreground transition-all`}
        >
          시작하기
        </Button>
      </div>
    </div>
  );
};

export default Index;
