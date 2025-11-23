import { createContext, useContext, useState, ReactNode } from "react";

export interface SurveyData {
  // Team information
  teamName: string;
  teamMembers: string[];
  
  // Location information
  building: string;
  floor: string;
  gender: string;
  
  // Restroom condition
  dreamSchool: string;
  canUseRestroom: string;
  whyNotUse: string[];
  
  // Door survey
  doorType: string;
  
  // Size survey
  width: string;
  height: string;
  
  // Photos
  photos: string[];
  
  // Handrail survey
  handrailTypes: string[];
  
  // Sink survey
  hasSink: string;
  canWash: string;
  sinkHeight: string;
}

interface SurveyContextType {
  surveyData: SurveyData;
  updateSurveyData: (data: Partial<SurveyData>) => void;
  resetSurveyData: () => void;
}

const initialSurveyData: SurveyData = {
  teamName: "",
  teamMembers: [],
  building: "",
  floor: "",
  gender: "",
  dreamSchool: "",
  canUseRestroom: "",
  whyNotUse: [],
  doorType: "",
  width: "",
  height: "",
  photos: [],
  handrailTypes: [],
  hasSink: "",
  canWash: "",
  sinkHeight: "",
};

const SurveyContext = createContext<SurveyContextType | undefined>(undefined);

export const SurveyProvider = ({ children }: { children: ReactNode }) => {
  const [surveyData, setSurveyData] = useState<SurveyData>(initialSurveyData);

  const updateSurveyData = (data: Partial<SurveyData>) => {
    setSurveyData((prev) => ({ ...prev, ...data }));
  };

  const resetSurveyData = () => {
    setSurveyData(initialSurveyData);
  };

  return (
    <SurveyContext.Provider value={{ surveyData, updateSurveyData, resetSurveyData }}>
      {children}
    </SurveyContext.Provider>
  );
};

export const useSurvey = () => {
  const context = useContext(SurveyContext);
  if (!context) {
    throw new Error("useSurvey must be used within a SurveyProvider");
  }
  return context;
};
