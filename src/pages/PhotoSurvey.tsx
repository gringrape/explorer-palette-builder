import { useState } from "react";
import { Button } from "@/components/ui/button";
import { typography } from "@/theme/typography";
import { useNavigate } from "react-router-dom";
import characterImage from "@/assets/character.png";
import { Camera } from "lucide-react";

const PhotoSurvey = () => {
  const navigate = useNavigate();
  const [photoCount, setPhotoCount] = useState<number>(0);

  const isComplete = photoCount > 0;

  const handleTakePhoto = () => {
    // Simulate photo taking - in real app would open camera
    setPhotoCount(Math.min(photoCount + 1, 3));
  };

  const handleNext = () => {
    console.log("Photo survey:", { photoCount });
    navigate("/handrail-survey");
  };

  return (
    <div className="h-svh flex flex-col bg-card">
      <header className="h-[11%] px-6 flex items-center justify-center flex-col">
        <div className="w-full h-2 bg-primary/20 rounded-full mb-2">
          <div className="w-4/6 h-full bg-primary rounded-full"></div>
        </div>
        <p className={`${typography.body} text-foreground`}>모모탐사대</p>
        <h1 className={`${typography.title} font-bold text-primary`}>
          화장실 사진을 찍자
        </h1>
      </header>

      <div className="flex-1 overflow-y-auto p-6 space-y-2">
        {/* 특별 미션 섹션 */}
        <div className="bg-primary/10 border-2 border-primary rounded-lg p-4 space-y-3">
          <div className="space-y-2">
            <p className={`${typography.body} font-bold text-foreground`}>
              특별 미션 #2 (준비물: 삼각대)
            </p>
            <p className={`${typography.body} text-foreground`}>
              화장실 <strong>"사진"</strong>을 찍어서<br />
              <strong>모모</strong>에게 보내줘! 좋아할거야 💕<br />
              <span className="text-sm">(단, 사진 가이드는 반드시 지켜야 해!)</span>
            </p>
          </div>
          
          {/* 가이드 이미지 영역 */}
          <div className="bg-card border-2 border-primary rounded-lg overflow-hidden">
            <img 
              src={characterImage} 
              alt="화장실 촬영 가이드" 
              className="w-full h-48 object-cover"
            />
          </div>

          {/* 촬영 팁 */}
          <div className="space-y-2">
            <p className={`${typography.body} font-bold text-foreground`}>
              📸 사진은 이렇게 찍어줘!
            </p>
            <ul className={`${typography.body} text-foreground space-y-1 text-sm`}>
              <li>- 첫 장은 반드시 삼각대를 화면에서 찍어야해.</li>
              <li>- 얼굴은 되도록 나오지 않게 해줘.</li>
              <li>- <strong>사진 가이드 보기</strong>를 통해서 자세히 확인하자.</li>
            </ul>
          </div>
        </div>

        {/* 사진 촬영 섹션 */}
        <div className="bg-card p-4 space-y-4">
          <div className="space-y-2">
            <p className={`${typography.body} font-bold text-foreground`}>
              화장실 사진 촬영
            </p>
            <p className={`${typography.body} text-foreground`}>
              삼각대로 사진을 찍어 보자! (최대 3장)
            </p>
          </div>

          {/* 사진 촬영 버튼 */}
          <Button
            onClick={handleTakePhoto}
            disabled={photoCount >= 3}
            className={`w-full h-14 rounded-full ${typography.button} font-bold transition-all ${
              photoCount >= 3
                ? "bg-primary/30 text-primary-foreground cursor-not-allowed"
                : "bg-primary hover:bg-primary/90 text-primary-foreground"
            }`}
          >
            <Camera className="mr-2 h-5 w-5" />
            사진 촬영하기 {photoCount > 0 && `(${photoCount}/3)`}
          </Button>

          {/* 사진 가이드 링크 */}
          <button
            className={`${typography.body} text-foreground underline w-full text-center`}
            onClick={() => {
              // Open guide link
              console.log("Open photo guide");
            }}
          >
            사진 가이드 보기(노션 링크)
          </button>
        </div>
      </div>

      {/* Fixed bottom button */}
      <div className="p-6 bg-card">
        <Button
          onClick={handleNext}
          disabled={!isComplete}
          className={`w-full h-14 rounded-xl ${typography.button} font-bold transition-all ${
            isComplete
              ? "bg-primary hover:bg-primary/90 text-primary-foreground"
              : "bg-primary/30 text-primary-foreground cursor-not-allowed"
          }`}
        >
          다음
        </Button>
      </div>
    </div>
  );
};

export default PhotoSurvey;
