import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { typography } from "@/theme/typography";
import { useNavigate } from "react-router-dom";
import { photoGuide } from "@/assets";
import { Camera } from "lucide-react";
import { useSurvey } from "@/contexts/SurveyContext";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { nanoid } from "nanoid";

const PhotoSurvey = () => {
  const navigate = useNavigate();
  const { updateSurveyData } = useSurvey();
  const { toast } = useToast();
  const [photoCount, setPhotoCount] = useState<number>(0);
  const [photos, setPhotos] = useState<string[]>([]);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const isComplete = photoCount > 0;

  const handleTakePhoto = () => {
    // Trigger file input to open camera
    fileInputRef.current?.click();
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && photoCount < 3) {
      setIsUploading(true);
      try {
        // Generate unique filename using nanoid
        const fileExt = file.name.split('.').pop();
        const fileName = `${nanoid()}.${fileExt}`;
        const filePath = fileName;

        // Upload to Supabase Storage
        const { error: uploadError } = await supabase.storage
          .from('survey-photos')
          .upload(filePath, file);

        if (uploadError) throw uploadError;

        // Get public URL
        const { data } = supabase.storage
          .from('survey-photos')
          .getPublicUrl(filePath);

        setPhotos((prev) => [...prev, data.publicUrl]);
        setPhotoCount((prev) => Math.min(prev + 1, 3));
        
        toast({
          title: "사진이 업로드되었습니다",
          description: `${photoCount + 1}/3 장`,
        });
      } catch (error) {
        console.error('Upload error:', error);
        toast({
          title: "업로드 실패",
          description: "사진 업로드 중 오류가 발생했습니다",
          variant: "destructive",
        });
      } finally {
        setIsUploading(false);
      }
    }
    // Reset input so the same file can be selected again
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleNext = () => {
    updateSurveyData({ photos });
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
              특별 미션 #2 (준비물: 셀카봉)
            </p>
            <p className={`${typography.body} text-foreground`}>
              화장실 <strong>"사진"</strong>을 찍어서<br />
              <strong>모모</strong>에게 보내줘! 좋아할거야 💕<br />
              <span className="text-sm">(단, 사진 가이드는 반드시 지켜야 해!)</span>
            </p>
          </div>
          
          {/* 가이드 이미지 영역 */}
          <div className="bg-card border-2 border-primary rounded-lg overflow-hidden relative">
            <img 
              src={photoGuide} 
              alt="화장실 촬영 가이드" 
              className="w-full h-72 object-cover"
            />
            {/* 음영처리 오버레이 */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60"></div>
            
            {/* 촬영 팁 - 이미지 위에 배치 */}
            <div className="absolute inset-0 flex flex-col justify-start p-4 space-y-2 text-white">
              <p className={`${typography.body} font-bold text-white`}>
                📸 사진은 이렇게 찍어줘!
              </p>
              <ul className={`${typography.body} text-white space-y-1 text-sm`}>
                <li>- 첫 장은 반드시 셀카봉을 이용해서 찍어야해.</li>
                <li>- 얼굴은 되도록 나오지 않게 해줘.</li>
                <li>- <strong className="text-white">사진 가이드 보기</strong>를 통해서 자세히 확인하자.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 사진 촬영 섹션 */}
        <div className="bg-card p-4 space-y-4">
          <div className="space-y-2">
            <p className={`${typography.body} font-bold text-foreground`}>
              화장실 사진 촬영
            </p>
            <p className={`${typography.body} text-foreground`}>
              셀카봉으로 사진을 찍어 보자! (최대 3장)
            </p>
          </div>

          {/* 숨겨진 파일 입력 (카메라 접근용) */}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            capture="environment"
            onChange={handleFileChange}
            className="hidden"
          />

          {/* 사진 촬영 버튼 */}
          <Button
            onClick={handleTakePhoto}
            disabled={photoCount >= 3 || isUploading}
            className={`w-full h-14 rounded-full ${typography.button} font-bold transition-all ${
              photoCount >= 3 || isUploading
                ? "bg-primary/30 text-primary-foreground cursor-not-allowed"
                : "bg-primary hover:bg-primary/90 text-primary-foreground"
            }`}
          >
            <Camera className="mr-2 h-5 w-5" />
            {isUploading ? "업로드 중..." : `사진 촬영하기 ${photoCount > 0 ? `(${photoCount}/3)` : ""}`}
          </Button>

          {/* 촬영한 사진 미리보기 */}
          {photos.length > 0 && (
            <div className="space-y-2">
              <p className={`${typography.body} font-bold text-foreground text-sm`}>
                촬영한 사진 ({photos.length}/3)
              </p>
              <div className="grid grid-cols-3 gap-2">
                {photos.map((photo, index) => (
                  <div key={index} className="relative aspect-square rounded-lg overflow-hidden border-2 border-primary">
                    <img
                      src={photo}
                      alt={`촬영한 사진 ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

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
