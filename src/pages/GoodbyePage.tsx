import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { typography } from "@/theme/typography";
import { characterImage, goodbye } from "@/assets";

const dialogs = [
  "이렇게 꼼꼼히 탐사를 완료 하다니\n정말 대단해!",
  "덕분에 더 나은 \n모두의 학교를 만들 수 있게 되었어!",
  "마지막으로,\n오늘 활동하고 느낀 점을 \n 선생님과 이야기 해보자!",
  "앞으로도 모모가\n학교에서 함께 행복할 수 있도록 \n 많이 도와줘! 안녕!",
];

const GoodbyePage = () => {
  const navigate = useNavigate();
  const [currentDialog, setCurrentDialog] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [showFinalScreen, setShowFinalScreen] = useState(false);
  const typingIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (showFinalScreen) return;

    const fullText = dialogs[currentDialog];
    let currentIndex = 0;
    setDisplayedText("");
    setIsTyping(true);

    if (typingIntervalRef.current) {
      clearInterval(typingIntervalRef.current);
    }

    typingIntervalRef.current = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTyping(false);
        if (typingIntervalRef.current) {
          clearInterval(typingIntervalRef.current);
          typingIntervalRef.current = null;
        }
      }
    }, 50);

    return () => {
      if (typingIntervalRef.current) {
        clearInterval(typingIntervalRef.current);
        typingIntervalRef.current = null;
      }
    };
  }, [currentDialog, showFinalScreen]);

  const handleDialogClick = () => {
    if (isTyping) {
      if (typingIntervalRef.current) {
        clearInterval(typingIntervalRef.current);
        typingIntervalRef.current = null;
      }
      setDisplayedText(dialogs[currentDialog]);
      setIsTyping(false);
    } else {
      if (currentDialog < dialogs.length - 1) {
        setCurrentDialog(currentDialog + 1);
      } else {
        setShowFinalScreen(true);
      }
    }
  };

  const handleFinish = () => {
    navigate("/");
  };

  if (showFinalScreen) {
    return (
      <div className="h-svh flex flex-col bg-card">
        <header className="h-[11%] flex items-center justify-center">
        <h1 className="text-3xl font-bold text-primary text-center">
          모모탐사대
          <br />
          탐사 완료!
        </h1>
        </header>

        <div className="flex-1 flex flex-col items-center justify-center p-6">
          <div className="w-full mb-8">
            <img src={goodbye} alt="모모 캐릭터" className="w-full h-full object-contain" />
          </div>
        </div>

        <div className="p-6">
          <button
            onClick={handleFinish}
            className={`w-full rounded-lg px-6 py-4 bg-primary hover:bg-primary/90 text-primary-foreground transition-colors ${typography.body} font-semibold`}
          >
            탐사 종료
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-svh flex flex-col bg-card">
      <header className="h-[11%] flex items-center justify-center">
      <h1 className="text-3xl font-bold text-primary text-center">
        모모탐사대
        <br />
        탐사 완료!
      </h1>
      </header>

      <div className="flex-1 flex items-center justify-center">
        <div className="w-full">
          <img src={goodbye} alt="모모 캐릭터" className="w-full h-full object-contain" />
        </div>
      </div>

      <div className="p-6">
        <div
          onClick={handleDialogClick}
          className="relative border-4 border-primary rounded-3xl px-8 py-6 cursor-pointer bg-card hover:bg-primary/5 transition-colors shadow-lg"
        >
          <p
            className={`${typography.body} text-foreground whitespace-pre-line leading-relaxed min-h-[100px] font-bold`}
          >
            {displayedText}
          </p>

          {!isTyping && (
            <div className="absolute bottom-4 right-4">
              <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[12px] border-t-primary animate-pulse"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GoodbyePage;
