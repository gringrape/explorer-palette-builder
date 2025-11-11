import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { typography } from "@/theme/typography";
import momoWashHandsVideo from "@/assets/momo-wash-hands.mp4";

const SinkSurvey = () => {
  const navigate = useNavigate();
  const [hasSink, setHasSink] = useState<string>("");
  const [canWash, setCanWash] = useState<string>("");
  const [sinkHeight, setSinkHeight] = useState<string>("");

  const handleNext = () => {
    console.log("Sink survey:", { hasSink, canWash, sinkHeight });
    navigate("/goodbye");
  };

  const isComplete = hasSink !== "" && canWash !== "" && sinkHeight !== "";

  return (
    <div className="h-svh flex flex-col bg-card">
      <header className="h-[11%] px-6 flex items-center justify-center flex-col">
        <div className="w-full h-2 bg-primary/20 rounded-full mb-2">
          <div className="w-full h-full bg-primary rounded-full"></div>
        </div>
        <p className={`${typography.body} text-foreground`}>모모탐사대</p>
        <h1 className={`${typography.title} font-bold text-primary`}>세면대를 조사하자</h1>
      </header>

      <div className="flex-1 overflow-y-auto p-6 space-y-2">
        {/* Animation Video */}
        <div className="bg-card p-4">
          <div className="border-4 border-primary rounded-lg overflow-hidden">
            <video 
              src={momoWashHandsVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Questions */}
        <div className="bg-card p-4 space-y-4">
          {/* Question 1: 세면대 있어? */}
          <div>
            <p className={`${typography.body} font-bold text-foreground mb-3`}>화장실에 세면대 있어?</p>
            <div className="grid grid-cols-2 gap-3">
              <Button
                onClick={() => setHasSink("yes")}
                className={`h-14 rounded-full border-2 ${typography.button} font-bold transition-all ${
                  hasSink === "yes"
                    ? "bg-primary text-primary-foreground border-primary hover:bg-primary"
                    : "bg-card text-foreground border-primary/40 hover:bg-primary/10"
                }`}
                variant="outline"
              >
                있음
              </Button>
              <Button
                onClick={() => setHasSink("no")}
                className={`h-14 rounded-full border-2 ${typography.button} font-bold transition-all ${
                  hasSink === "no"
                    ? "bg-primary text-primary-foreground border-primary hover:bg-primary"
                    : "bg-card text-foreground border-primary/40 hover:bg-primary/10"
                }`}
                variant="outline"
              >
                없음
              </Button>
            </div>
          </div>

          {/* Question 2: 손 씻을 수 있어? */}
          <div>
            <p className={`${typography.body} font-bold text-foreground mb-3`}>손 씻을 수 있어?</p>
            <div className="grid grid-cols-2 gap-3">
              <Button
                onClick={() => setCanWash("yes")}
                className={`h-14 rounded-full border-2 ${typography.button} font-bold transition-all ${
                  canWash === "yes"
                    ? "bg-primary text-primary-foreground border-primary hover:bg-primary"
                    : "bg-card text-foreground border-primary/40 hover:bg-primary/10"
                }`}
                variant="outline"
              >
                씻을 수 있어
              </Button>
              <Button
                onClick={() => setCanWash("no")}
                className={`h-14 rounded-full border-2 ${typography.button} font-bold transition-all ${
                  canWash === "no"
                    ? "bg-primary text-primary-foreground border-primary hover:bg-primary"
                    : "bg-card text-foreground border-primary/40 hover:bg-primary/10"
                }`}
                variant="outline"
              >
                못 씻을 것 같아
              </Button>
            </div>
          </div>

          {/* Question 3: 세면대 높이는 어때? */}
          <div>
            <p className={`${typography.body} font-bold text-foreground mb-3`}>세면대 높이는 어때?</p>
            <div className="grid grid-cols-3 gap-3">
              <Button
                onClick={() => setSinkHeight("high")}
                className={`h-14 rounded-full border-2 ${typography.button} font-bold transition-all ${
                  sinkHeight === "high"
                    ? "bg-primary text-primary-foreground border-primary hover:bg-primary"
                    : "bg-card text-foreground border-primary/40 hover:bg-primary/10"
                }`}
                variant="outline"
              >
                너무 높아
              </Button>
              <Button
                onClick={() => setSinkHeight("good")}
                className={`h-14 rounded-full border-2 ${typography.button} font-bold transition-all ${
                  sinkHeight === "good"
                    ? "bg-primary text-primary-foreground border-primary hover:bg-primary"
                    : "bg-card text-foreground border-primary/40 hover:bg-primary/10"
                }`}
                variant="outline"
              >
                딱 좋아
              </Button>
              <Button
                onClick={() => setSinkHeight("bad")}
                className={`h-14 rounded-full border-2 ${typography.button} font-bold transition-all ${
                  sinkHeight === "bad"
                    ? "bg-primary text-primary-foreground border-primary hover:bg-primary"
                    : "bg-card text-foreground border-primary/40 hover:bg-primary/10"
                }`}
                variant="outline"
              >
                별로야
              </Button>
            </div>
          </div>
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

export default SinkSurvey;
