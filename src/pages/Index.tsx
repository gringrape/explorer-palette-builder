import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import momoCharacter from "@/assets/momo-character.png";
import { typography } from "@/theme/typography";

const dialogs = [
  "모모탐사대에 함께한 것을 환영해요.",
  "탐사 시작에 앞서 '모모탐사대'의 규칙에 대해 설명할게요 :)",
  "탐사의 규칙은 간단해요.\n\n첫 번째,\n두 명 이상 팀을 이뤄\n진행할 것",
  "두 번째,\n최대한 철저히를 타고\n조사할 것",
  "세 번째,\n반드시 설명 가이드에\n따라 정확히 탐사할 것",
];

const Index = () => {
  const navigate = useNavigate();
  const [currentDialog, setCurrentDialog] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [showFinalScreen, setShowFinalScreen] = useState(false);

  useEffect(() => {
    if (showFinalScreen) return;
    
    const fullText = dialogs[currentDialog];
    let currentIndex = 0;
    setDisplayedText("");
    setIsTyping(true);

    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [currentDialog, showFinalScreen]);

  const handleDialogClick = () => {
    if (isTyping) {
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

  const handleStartExploration = () => {
    navigate("/team-info");
  };

  const handleReadGuide = () => {
    navigate("/roadmap");
  };

  if (showFinalScreen) {
    return (
      <div className="h-svh flex flex-col bg-card">
        <header className="h-[11%] flex items-center justify-center border-b-2 border-foreground">
          <h1 className={`${typography.title} font-bold text-foreground`}>
            모모탐사대<br />게임 규칙 소개
          </h1>
        </header>

        <div className="flex-1 flex flex-col items-center justify-center p-6">
          <div className="w-48 h-48 mb-8">
            <img 
              src={momoCharacter}
              alt="모모 캐릭터"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="w-full max-w-md space-y-4">
            <button
              onClick={handleStartExploration}
              className="w-full border-2 border-foreground rounded-lg px-6 py-4 text-center bg-card hover:bg-muted transition-colors"
            >
              <span className={`${typography.body} font-semibold text-foreground`}>
                ▶ 탐사를 시작한다
              </span>
            </button>
            
            <button
              onClick={handleReadGuide}
              className="w-full border-2 border-foreground rounded-lg px-6 py-4 text-center bg-card hover:bg-muted transition-colors"
            >
              <span className={`${typography.body} font-semibold text-foreground`}>
                상세 설명서를 읽는다
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-svh flex flex-col bg-card">
      <header className="h-[11%] flex items-center justify-center border-b-2 border-foreground">
        <h1 className={`${typography.title} font-bold text-foreground text-center`}>
          모모탐사대<br />게임 규칙 소개
        </h1>
      </header>

      <div className="flex-1 flex items-center justify-center">
        <div className="w-64 h-64">
          <img 
            src={momoCharacter}
            alt="모모 캐릭터"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <div className="p-6">
        <div 
          onClick={handleDialogClick}
          className="relative border-2 border-foreground rounded-lg px-8 py-6 cursor-pointer bg-card hover:bg-muted/50 transition-colors"
        >
          <p className={`${typography.body} text-foreground whitespace-pre-line leading-relaxed min-h-[100px]`}>
            {displayedText}
          </p>
          
          <div className="absolute bottom-4 right-4">
            <div className={`w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[12px] border-t-foreground ${!isTyping ? 'animate-pulse' : ''}`}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
