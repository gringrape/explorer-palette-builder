import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import TeamMemberInput from "@/components/TeamMemberInput";
import characterImage from "@/assets/character.png";
import { typography } from "@/theme/typography";

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

  // TODO: header 를 공통으로 빼기 
  return (
    <div className="h-svh flex flex-col bg-card">
      <header className="h-[11%] flex items-center justify-center">    
        <h1 className={`${typography.title} font-bold text-primary`}>탐사대 정보</h1>
      </header>
      <div className="h-80 flex-1 p-6 overflow-y-auto">
        {/* Speech bubble and illustration */}
        <div className="flex justify-center items-center space-y-4 mb-4">
          
          <div className="w-40 h-40 relative">
            <img 
              src={characterImage}
              alt="Friendly character"
              className="w-full h-full object-contain rounded-full"
            />
          </div>
          <div className="relative bg-card border-4 border-primary rounded-3xl px-6 py-4 shadow-lg">
            <p className={`text-center font-bold ${typography.body} leading-relaxed text-foreground`}>
              모모에게
              <br />
              너희 팀을
              <br />
              소개해줘!
            </p>
            {/* Speech bubble tail */}
            <div className="absolute left-0 top-1/2 transform -translate-x-full -translate-y-1/2">
              <div className="w-0 h-0 border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent border-r-[20px] border-r-primary"></div>
              <div className="absolute left-[-16px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-r-[16px] border-r-card"></div>
            </div>
          </div>
        </div>

        {/* Form inputs */}
        <div className="space-y-[0.5rem] mb-4">
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
        <div className="flex justify-center">
          <Button
            onClick={addMember}
            variant="outline"
            size="icon"
            className="w-14 h-14 rounded-full border-2 bg-primary border-primary hover:bg-primary hover:border-primary transition-all"
          >
            <Plus className="w-6 h-6 text-[#fff] bg-primary" />
          </Button>
        </div>
      </div>

      {/* Fixed bottom button */}
      <div className="p-6 bg-card">
        <Button
          onClick={handleNext}
          className={`w-full h-14 rounded-xl ${typography.button} font-bold bg-primary hover:bg-primary/90 text-primary-foreground transition-all`}
        >
          다음
        </Button>
      </div>
    </div>
  );
};

export default Index;
