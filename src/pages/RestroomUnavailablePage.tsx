import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { typography } from "@/theme/typography";
import characterImage from "@/assets/character.png";

const RestroomUnavailablePage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-svh flex flex-col bg-card">
      <header className="h-[11%] px-6 flex items-center justify-center flex-col">
        <div className="w-full h-2 bg-primary/20 rounded-full mb-2">
          <div className="w-1/4 h-full bg-primary rounded-full"></div>
        </div>
        <p className={`${typography.body} text-foreground`}>모모탐사대</p>
        <h1 className={`${typography.title} font-bold text-primary`}>
          화장실 상태 조사
        </h1>
      </header>

      <div className="flex-1 overflow-y-auto p-6 flex items-center justify-center">
        <div className="bg-card p-4 w-full max-w-md">
          <div className="bg-card rounded-lg overflow-hidden p-8 space-y-6">
            {/* 메시지 말풍선 */}
            <div className="bg-primary text-primary-foreground rounded-3xl py-6 px-6 text-center relative">
              <p className={`${typography.button} font-bold leading-relaxed`}>
                알려줘서 고마워♪
                <br />
                교실에 돌아가서
                <br />
                친구들과 선생님께
                <br />
                이야기 해보자♪안녕!
              </p>
            </div>

            {/* 캐릭터 이미지 */}
            <div className="flex justify-center">
              <img 
                src={characterImage} 
                alt="모모탐사대 캐릭터" 
                className="w-3/4 h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Fixed bottom button */}
      <div className="p-6 bg-card">
        <Button
          onClick={() => navigate("/")}
          className={`w-full h-14 rounded-xl ${typography.button} font-bold bg-primary hover:bg-primary/90 text-primary-foreground`}
        >
          탐사 종료
        </Button>
      </div>
    </div>
  );
};

export default RestroomUnavailablePage;
