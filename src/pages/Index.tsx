import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import TeamMemberInput from "@/components/TeamMemberInput";
import characterImage from "@/assets/character.png";

const Index = () => {
  const [teamName, setTeamName] = useState("");
  const [members, setMembers] = useState(["", ""]);

  const addMember = () => {
    setMembers([...members, ""]);
  };

  const updateMember = (index: number, value: string) => {
    const newMembers = [...members];
    newMembers[index] = value;
    setMembers(newMembers);
  };

  const handleNext = () => {
    console.log("Team Name:", teamName);
    console.log("Members:", members);
    // Handle navigation to next screen
  };

  return (
    <div className="min-h-screen bg-card p-6">
      <div className="h-full space-y-6">
        {/* Speech bubble and illustration */}
        <div className="flex flex-col items-center space-y-4 mb-8">
          <div className="relative bg-card border-4 border-primary rounded-3xl px-6 py-4 shadow-lg">
            <p className="text-center font-bold text-base md:text-lg leading-relaxed text-foreground">
              자, 이제 너의 팀에 대해
              <br />
              소개해줘!
            </p>
            {/* Speech bubble tail */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
              <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[20px] border-t-primary"></div>
              <div className="absolute top-[-16px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[16px] border-t-card"></div>
            </div>
          </div>
          
          <div className="w-48 h-48 relative">
            <img 
              src={characterImage}
              alt="Friendly character"
              className="w-full h-full object-contain rounded-full"
            />
          </div>
        </div>

        {/* Form inputs */}
        <div className="space-y-4">
          <TeamMemberInput
            label="탐사대 이름"
            value={teamName}
            onChange={setTeamName}
            placeholder="팀 이름을 입력하세요"
          />

          {members.map((member, index) => (
            <TeamMemberInput
              key={index}
              label={`탐사대원 ${index + 1}`}
              value={member}
              onChange={(value) => updateMember(index, value)}
              placeholder="이름을 입력하세요"
            />
          ))}
        </div>

        {/* Add member button */}
        <div className="flex justify-center pt-2">
          <Button
            onClick={addMember}
            variant="outline"
            size="icon"
            className="w-14 h-14 rounded-full border-2 border-primary hover:bg-secondary hover:border-primary transition-all"
          >
            <Plus className="w-6 h-6 text-primary" />
          </Button>
        </div>

        {/* Next button */}
        <Button
          onClick={handleNext}
          className="w-full h-14 rounded-xl text-lg font-bold bg-primary hover:bg-primary/90 text-primary-foreground transition-all"
        >
          다음
        </Button>
      </div>
    </div>
  );
};

export default Index;
