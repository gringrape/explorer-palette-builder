import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import characterImage from "@/assets/character.png";
import { typography } from "@/theme/typography";

const Preparation = () => {
  const [wheelchair, setWheelchair] = useState<string>("");
  const [tape, setTape] = useState<string>("");
  const [selfieStick, setSelfieStick] = useState<string>("");

  const isAllSelected = wheelchair && tape && selfieStick;

  const handleNext = () => {
    console.log("Wheelchair:", wheelchair);
    console.log("Tape:", tape);
    console.log("Selfie Stick:", selfieStick);
    // Handle navigation to next screen
  };

  return (
    <div className="min-h-screen flex flex-col bg-card">
      <header className="h-[11%] flex items-center justify-center">
        <h1 className={`${typography.body} font-bold text-primary`}>탐험 준비</h1>
      </header>
      
      <div className="flex-1 overflow-y-auto p-6 pb-24">
        {/* Character and speech bubble */}
        <div className="flex justify-center items-center space-x-4 mb-8">
          <div className="w-40 h-40 relative flex-shrink-0">
            <img 
              src={characterImage}
              alt="Friendly character"
              className="w-full h-full object-contain rounded-full"
            />
          </div>
          <div className="relative bg-card border-4 border-primary rounded-3xl px-6 py-4 shadow-lg">
            <p className={`text-center font-bold ${typography.body} leading-relaxed text-foreground`}>
              이동약자 친구들을 돕기 위한
              <br />
              탐험 도구를 확인해보자!
            </p>
            {/* Speech bubble tail */}
            <div className="absolute left-0 top-1/2 transform -translate-x-full -translate-y-1/2">
              <div className="w-0 h-0 border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent border-r-[20px] border-r-primary"></div>
              <div className="absolute left-[-16px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-r-[16px] border-r-card"></div>
            </div>
          </div>
        </div>

        {/* Checklist items */}
        <div className="space-y-6">
          {/* Wheelchair */}
          <div className="space-y-3">
            <Label className={`${typography.body} font-bold text-foreground`}>휠체어</Label>
            <RadioGroup value={wheelchair} onValueChange={setWheelchair} className="flex gap-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="wheelchair-yes" className="w-6 h-6" />
                <Label htmlFor="wheelchair-yes" className={`${typography.body} cursor-pointer`}>응</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="wheelchair-no" className="w-6 h-6" />
                <Label htmlFor="wheelchair-no" className={`${typography.body} cursor-pointer`}>아니</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Tape */}
          <div className="space-y-3">
            <Label className={`${typography.body} font-bold text-foreground`}>줄자</Label>
            <RadioGroup value={tape} onValueChange={setTape} className="flex gap-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="tape-yes" className="w-6 h-6" />
                <Label htmlFor="tape-yes" className={`${typography.body} cursor-pointer`}>응</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="tape-no" className="w-6 h-6" />
                <Label htmlFor="tape-no" className={`${typography.body} cursor-pointer`}>아니</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Selfie Stick */}
          <div className="space-y-3">
            <Label className={`${typography.body} font-bold text-foreground`}>셀카봉</Label>
            <RadioGroup value={selfieStick} onValueChange={setSelfieStick} className="flex gap-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="selfie-yes" className="w-6 h-6" />
                <Label htmlFor="selfie-yes" className={`${typography.body} cursor-pointer`}>응</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="selfie-no" className="w-6 h-6" />
                <Label htmlFor="selfie-no" className={`${typography.body} cursor-pointer`}>아니</Label>
              </div>
            </RadioGroup>
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
