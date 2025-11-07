import { Input } from "@/components/ui/input";

interface TeamMemberInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const TeamMemberInput = ({ label, value, onChange, placeholder }: TeamMemberInputProps) => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-bold text-foreground">{label}</label>
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full border-2 border-primary rounded-xl h-12 px-4 focus:ring-2 focus:ring-primary transition-all"
      />
    </div>
  );
};

export default TeamMemberInput;
