import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { typography } from "@/theme/typography";
import characterImage from "@/assets/character.png";

const GoodbyePage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-svh flex flex-col bg-card">
      <header className="h-[11%] px-6 flex items-center justify-center flex-col">
        <p className={`${typography.body} text-foreground`}>모모탐사대</p>
        <h1 className={`${typography.title} font-bold text-primary`}>조사 완료</h1>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center p-6 space-y-6">
        <div className="w-48 h-48 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
          <img src={characterImage} alt="모모 캐릭터" className="w-40 h-40 object-contain" />
        </div>
        
        <div className="text-center space-y-4">
          <p className={`${typography.title} font-bold text-foreground`}>
            조사에 참여해줘서 고마워!
          </p>
          <p className={`${typography.body} text-foreground`}>
            모두가 함께하는 학교를 만들기 위한
            <br />
            소중한 정보가 되었어요.
          </p>
        </div>
      </div>

      <div className="p-6 bg-card">
        <Button
          onClick={() => navigate("/")}
          className={`w-full h-14 rounded-xl ${typography.button} font-bold bg-primary hover:bg-primary/90 text-primary-foreground`}
        >
          처음으로
        </Button>
      </div>
    </div>
  );
};

export default GoodbyePage;
