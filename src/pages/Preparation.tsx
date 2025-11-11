import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { characterImage, sizeMomo } from "@/assets";
import { typography } from "@/theme/typography";
import { colors } from "@/theme/colors";
import { useNavigate } from "react-router-dom";

const Preparation = () => {
  const navigate = useNavigate();
  const [wheelchair, setWheelchair] = useState<string>("");
  const [tape, setTape] = useState<string>("");
  const [selfieStick, setSelfieStick] = useState<string>("");

  const isAllSelected = wheelchair && tape && selfieStick;

  const handleNext = () => {
    console.log("Wheelchair:", wheelchair);
    console.log("Tape:", tape);
    console.log("Selfie Stick:", selfieStick);
    navigate("/roadmap");
  };

  return (
    <div className="h-svh flex flex-col bg-card">
      <header className="h-[11%] flex items-center justify-center">
        <h1 className={`${typography.title} font-bold text-primary`}>탐험 준비</h1>
      </header>
      
      <div className="flex-1 overflow-y-auto p-6">
        {/* Character and speech bubble */}
        <div className="flex justify-center items-center space-x-4 mb-8">
          <div className="w-40 h-auto relative flex-shrink-0">
            <img 
              src={sizeMomo}
              alt="Friendly character"
              className="w-full h-full scale-125 object-contain rounded-full"
            />
          </div>
          <div className="relative bg-card border-4 border-primary rounded-3xl px-4 py-4 shadow-lg">
            <p className={`text-center font-bold ${typography.body} leading-relaxed text-foreground break-keep`}>
              이동약자 친구들을 돕기위한
              <br />
              <span className="text-primary">"탐험도구"</span>들을 확인해보자!
            </p>
            {/* Speech bubble tail */}
            <div className="absolute left-0 top-1/2 transform -translate-x-full -translate-y-1/2">
              <div className="w-0 h-0 border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent border-r-[20px] border-r-primary"></div>
              <div className="absolute left-[-16px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-r-[16px] border-r-card"></div>
            </div>
          </div>
        </div>

        {/* Checklist items */}
        <div className="space-y-3.5">
          {/* Wheelchair */}
          <div className="space-y-3">
            <Label className={`${typography.body} font-bold text-foreground`}>휠체어 있니?</Label>
            <div className="grid grid-cols-2 gap-3">
              <Button
                type="button"
                variant="outline"
                aria-pressed={wheelchair === "yes"}
                onClick={() => setWheelchair("yes")}
                className={`w-full h-10 rounded-xl ${typography.body} font-bold transition-colors border ${
                  wheelchair === "yes"
                    ? colors.button.selected
                    : colors.button.unselected
                }`}
              >
                응
              </Button>
              <Button
                type="button"
                variant="outline"
                aria-pressed={wheelchair === "no"}
                onClick={() => setWheelchair("no")}
                className={`w-full h-10 rounded-xl ${typography.body} font-bold transition-colors border ${
                  wheelchair === "no"
                    ? colors.button.selected
                    : colors.button.unselected
                }`}
              >
                아니
              </Button>
            </div>
          </div>

          {/* Tape */}
          <div className="space-y-3">
            <Label className={`${typography.body} font-bold text-foreground`}>줄자 있니?</Label>
            <div className="grid grid-cols-2 gap-3">
              <Button
                type="button"
                variant="outline"
                aria-pressed={tape === "yes"}
                onClick={() => setTape("yes")}
                className={`w-full h-10 rounded-xl ${typography.body} font-bold transition-colors border ${
                  tape === "yes"
                    ? colors.button.selected
                    : colors.button.unselected
                }`}
              >
                응
              </Button>
              <Button
                type="button"
                variant="outline"
                aria-pressed={tape === "no"}
                onClick={() => setTape("no")}
                className={`w-full h-10 rounded-xl ${typography.body} font-bold transition-colors border ${
                  tape === "no"
                    ? colors.button.selected
                    : colors.button.unselected
                }`}
              >
                아니
              </Button>
            </div>
          </div>

          {/* Selfie Stick */}
          <div className="space-y-3">
            <Label className={`${typography.body} font-bold text-foreground`}>셀카봉 있니?</Label>
            <div className="grid grid-cols-2 gap-3">
              <Button
                type="button"
                variant="outline"
                aria-pressed={selfieStick === "yes"}
                onClick={() => setSelfieStick("yes")}
                className={`w-full h-10 rounded-xl ${typography.body} font-bold transition-colors border ${
                  selfieStick === "yes"
                    ? colors.button.selected
                    : colors.button.unselected
                }`}
              >
                응
              </Button>
              <Button
                type="button"
                variant="outline"
                aria-pressed={selfieStick === "no"}
                onClick={() => setSelfieStick("no")}
                className={`w-full h-10 rounded-xl ${typography.body} font-bold transition-colors border ${
                  selfieStick === "no"
                    ? colors.button.selected
                    : colors.button.unselected
                }`}
              >
                아니
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed bottom button */}
      <div className="p-6 bg-card">
        <Button
          onClick={handleNext}
          disabled={!isAllSelected}
          className={`w-full h-14 rounded-xl ${typography.button} font-bold bg-primary hover:bg-primary/90 text-primary-foreground transition-all disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          다음
        </Button>
      </div>
    </div>
  );
};

export default Preparation;
