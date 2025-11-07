import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import TeamMemberInput from "@/components/TeamMemberInput";

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
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-card rounded-3xl shadow-xl p-6 md:p-8 space-y-6">
          {/* Speech bubble and illustration */}
          <div className="flex flex-col items-center space-y-4 mb-8">
            <div className="relative bg-card border-4 border-foreground rounded-3xl px-6 py-4 shadow-lg">
              <p className="text-center font-bold text-base md:text-lg leading-relaxed">
                자, 이제 너의 팀에 대해
                <br />
                소개해줘!
              </p>
              {/* Speech bubble tail */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
                <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[20px] border-t-foreground"></div>
                <div className="absolute top-[-16px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[16px] border-t-card"></div>
              </div>
            </div>
            
            <div className="w-48 h-48 relative">
              <img 
                src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?w=400&h=400&fit=crop"
                alt="Friendly character"
                className="w-full h-full object-contain rounded-2xl"
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
              className="w-14 h-14 rounded-full border-2 border-foreground hover:bg-secondary hover:border-secondary transition-all"
            >
              <Plus className="w-6 h-6" />
            </Button>
          </div>

          {/* Next button */}
          <Button
            onClick={handleNext}
            className="w-full h-14 rounded-xl text-lg font-bold bg-foreground hover:bg-foreground/90 text-background transition-all"
          >
            다음
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
