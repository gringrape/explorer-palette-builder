import { supabase } from "@/integrations/supabase/client";

export interface SurveyData {
  teamName: string;
  teamMembers: string[];
  building?: string;
  floor?: string;
  gender?: string;
  dreamSchool?: string;
  canUseRestroom?: string;
  whyNotUse?: string[];
  doorType?: string;
  width?: string;
  height?: string;
  photos?: string[];
  handrailTypes?: string[];
  hasSink?: string;
  canWash?: string;
  sinkHeight?: string;
}

export interface SurveyResponse {
  id: string;
  created_at: string;
  team_name: string;
  team_members: string[];
  building: string | null;
  floor: string | null;
  gender: string | null;
  dream_school: string | null;
  can_use_restroom: string | null;
  why_not_use: string[] | null;
  door_type: string | null;
  width: string | null;
  height: string | null;
  photos: string[] | null;
  handrail_types: string[] | null;
  has_sink: string | null;
  can_wash: string | null;
  sink_height: string | null;
}

// 설문 응답 저장 (전체 설문 완료 시)
export async function saveSurveyResponse(data: SurveyData) {
  const { error } = await supabase.from("survey_responses").insert({
    team_name: data.teamName,
    team_members: data.teamMembers,
    building: data.building || null,
    floor: data.floor || null,
    gender: data.gender || null,
    dream_school: data.dreamSchool || null,
    can_use_restroom: data.canUseRestroom || null,
    why_not_use: data.whyNotUse || null,
    door_type: data.doorType || null,
    width: data.width || null,
    height: data.height || null,
    photos: data.photos || null,
    handrail_types: data.handrailTypes || null,
    has_sink: data.hasSink || null,
    can_wash: data.canWash || null,
    sink_height: data.sinkHeight || null,
  });

  if (error) throw error;
  return { success: true };
}

// 모든 설문 응답 조회 (관리자용)
export async function fetchAllSurveyResponses(): Promise<SurveyResponse[]> {
  const { data, error } = await supabase
    .from("survey_responses")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data || [];
}

// 사진 업로드
export async function uploadPhoto(file: File, fileName: string): Promise<string> {
  const { error: uploadError } = await supabase.storage
    .from("survey-photos")
    .upload(fileName, file);

  if (uploadError) throw uploadError;

  const { data } = supabase.storage
    .from("survey-photos")
    .getPublicUrl(fileName);

  return data.publicUrl;
}
