import { useNavigate } from "react-router-dom";
import { typography } from "@/theme/typography";
import characterImage from "@/assets/momo-character.png";

const MidpointEncouragement = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/size-survey");
  };

  return (
    <div className="h-svh flex flex-col bg-card">
      <header className="h-[11%] px-6 flex items-center justify-center flex-col">
        <div className="w-full h-2 bg-primary/20 rounded-full mb-2">
          <div className="w-1/2 h-full bg-primary rounded-full"></div>
        </div>
        <h1 className={`${typography.title} font-bold text-primary mt-2`}>
          벌써 50% 탐사 완료!
        </h1>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-md mb-6">
          <div className="relative border-4 border-primary rounded-3xl px-8 py-6 bg-card shadow-lg">
            <p
              className={`${typography.body} text-foreground whitespace-pre-line leading-relaxed font-bold`}
            >
              대단해! 벌써 절반이나{"\n"}
              탐사를 완료했어 :){"\n"}
              남은 활동도 응원해 ❤
            </p>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-t-[20px] border-t-primary"></div>
          </div>
        </div>

        <div className="w-64 h-64">
          <img src={characterImage} alt="모모 캐릭터" className="w-full h-full object-contain" />
        </div>
      </div>

      <div className="p-6">
        <button
          onClick={handleContinue}
          className={`w-full rounded-xl px-6 py-4 bg-primary hover:bg-primary/90 text-primary-foreground transition-colors ${typography.body} font-semibold`}
        >
          계속하기
        </button>
      </div>
    </div>
  );
};

export default MidpointEncouragement;
