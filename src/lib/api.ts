const API_BASE_URL = "https://teacher.momo-school.shop";

export interface SurveyData {
  teamName: string;
  teamMembers: string[];
  building?: string;
  floor?: number | null;
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
  floor: number | null;
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
  const response = await fetch(`${API_BASE_URL}/api/survey`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
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
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to save survey response");
  }

  return { success: true };
}

// 모든 설문 응답 조회 (관리자용)
export async function fetchAllSurveyResponses(): Promise<SurveyResponse[]> {
  const response = await fetch(`${API_BASE_URL}/api/survey`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch survey responses");
  }

  const data = await response.json();
  return data || [];
}

// 사진 업로드
export async function uploadPhoto(file: File, fileName: string): Promise<string> {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("fileName", fileName);

  const response = await fetch(`${API_BASE_URL}/api/survey/upload`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Failed to upload photo");
  }

  const data = await response.json();
  console.log(data);
  return data.publicUrl;
}
