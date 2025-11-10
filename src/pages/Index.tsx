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
        <div className="flex items-center justify-center space-x-4 mb-8">
          <div className="w-48 h-48 relative flex-shrink-0">
            <img 
              src={characterImage}
              alt="모모 캐릭터"
              className="w-full h-full object-contain"
            />
          </div>
          
          <div className="relative bg-card border-4 border-primary rounded-3xl px-8 py-6 shadow-lg max-w-md">
            <p className={`text-center font-bold ${typography.body} leading-relaxed text-foreground`}>
              <strong>모두의 학교</strong>를 위한<br />
              탐험을 떠나기 위해 오신<br />
              여러분 <strong>환영</strong>합니다! 🎉
            </p>
            
            {/* Speech bubble tail pointing to character */}
            <div className="absolute left-0 top-1/2 transform -translate-x-full -translate-y-1/2">
              <div className="w-0 h-0 border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent border-r-[20px] border-r-primary"></div>
              <div className="absolute left-[-16px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-r-[16px] border-r-card"></div>
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
          시작하기
        </Button>
      </div>
    </div>
  );
};

export default Index;
