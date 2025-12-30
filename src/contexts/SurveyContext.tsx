import { createContext, useContext, useState, ReactNode } from "react";

export interface SurveyData {
  // Team information
  teamName: string;
  teamMembers: string[];
  
  // Location information
  building: string;
  floor: number | null;
  gender: string;
  
  // Restroom condition
  
  hasAccessibleRestroom: boolean | null;
  unavailableReason: string[];
  
  // Door survey
  doorType: string;
  
  // Size survey
  width: string;
  height: string;
  
  // Photos
  photos: string[];
  
  // Handrail survey
  handrailTypes: string[];
  
  // Basin survey
  hasBasin: boolean | null;
  isUsable: boolean | null;
  basinHeightType: string;
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
  floor: null,
  gender: "",
  
  hasAccessibleRestroom: null,
  unavailableReason: [],
  doorType: "",
  width: "",
  height: "",
  photos: [],
  handrailTypes: [],
  hasBasin: null,
  isUsable: null,
  basinHeightType: "",
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
