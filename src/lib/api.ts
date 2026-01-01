const API_BASE_URL = "https://teacher.momo-school.shop";

export interface SurveyData {
  schoolId?: string;
  teamName: string;
  teamMembers: string[];
  building?: string;
  floor?: number | null;
  restroomGender?: string;
  
  hasAccessibleRestroom?: boolean;
  unavailableReason?: string[];
  doorType?: string;
  width?: string;
  depth?: string;
  photos?: string[];
  grabBarType?: string[];
  hasBasin?: boolean | null;
  isBasinUsable?: boolean | null;
  basinHeightType?: string;
}

export interface SurveyResponse {
  id: string;
  created_at: string;
  team_name: string;
  team_members: string[];
  building: string | null;
  floor: number | null;
  restroom_gender: string | null;
  school_id: string | null;
  
  has_accessible_restroom: boolean | null;
  unavailable_reason: string[] | null;
  door_type: string | null;
  width: string | null;
  depth: string | null;
  photos: string[] | null;
  grab_bar_type: string[] | null;
  has_basin: boolean | null;
  is_basin_usable: boolean | null;
  basin_height_type: string | null;
}

// 설문 응답 저장 (전체 설문 완료 시)
export async function saveSurveyResponse(data: SurveyData) {
  const response = await fetch(`${API_BASE_URL}/api/survey`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      school_id: data.schoolId || null,
      team_name: data.teamName,
      team_members: data.teamMembers,
      building: data.building || null,
      floor: data.floor || null,
      restroom_gender: data.restroomGender || null,
      
      has_accessible_restroom: data.hasAccessibleRestroom ?? null,
      unavailable_reason: data.unavailableReason || null,
      door_type: data.doorType || null,
      width: data.width || null,
      depth: data.depth || null,
      photos: data.photos || null,
      grab_bar_type: data.grabBarType || null,
      has_basin: data.hasBasin ?? null,
      is_basin_usable: data.isBasinUsable ?? null,
      basin_height_type: data.basinHeightType || null,
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
