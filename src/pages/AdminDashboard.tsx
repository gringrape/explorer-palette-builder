import { useEffect, useState } from "react";
import { typography } from "@/theme/typography";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Loader2, RefreshCw, Image as ImageIcon } from "lucide-react";

interface SurveyResponse {
  id: string;
  created_at: string;
  team_name: string;
  team_members: string[];
  building: string;
  floor: string;
  gender: string;
  dream_school: string;
  can_use_restroom: string;
  why_not_use: string[];
  door_type: string;
  width: string;
  height: string;
  photos: string[];
  handrail_types: string[];
  has_sink: string;
  can_wash: string;
  sink_height: string;
}

const AdminDashboard = () => {
  const [responses, setResponses] = useState<SurveyResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  const fetchResponses = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from("survey_responses")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;

      setResponses(data || []);
      toast({
        title: "데이터 로드 완료",
        description: `${data?.length || 0}개의 설문 응답을 불러왔습니다.`,
      });
    } catch (error) {
      console.error("Error fetching responses:", error);
      toast({
        title: "데이터 로드 실패",
        description: "설문 응답을 불러오는 중 오류가 발생했습니다.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchResponses();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className={`${typography.title} text-foreground font-bold`}>
              관리자 대시보드
            </h1>
            <p className={`${typography.body} text-muted-foreground mt-1`}>
              설문 응답 데이터를 확인하세요
            </p>
          </div>
          <Button
            onClick={fetchResponses}
            variant="outline"
            className="gap-2"
          >
            <RefreshCw className="h-4 w-4" />
            새로고침
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className={typography.body}>총 응답 수</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-primary">{responses.length}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className={typography.body}>총 사진 수</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-primary">
                {responses.reduce((sum, r) => sum + (r.photos?.length || 0), 0)}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className={typography.body}>참여 팀 수</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-primary">
                {new Set(responses.map((r) => r.team_name)).size}
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className={typography.body}>설문 응답 목록</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>제출일시</TableHead>
                    <TableHead>팀명</TableHead>
                    <TableHead>건물</TableHead>
                    <TableHead>층</TableHead>
                    <TableHead>성별</TableHead>
                    <TableHead>사용 가능</TableHead>
                    <TableHead>문 종류</TableHead>
                    <TableHead>크기(가로x세로)</TableHead>
                    <TableHead>사진 수</TableHead>
                    <TableHead>사진 보기</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {responses.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={10} className="text-center py-8 text-muted-foreground">
                        아직 제출된 설문이 없습니다.
                      </TableCell>
                    </TableRow>
                  ) : (
                    responses.map((response) => (
                      <TableRow key={response.id}>
                        <TableCell className="whitespace-nowrap">
                          {new Date(response.created_at).toLocaleString("ko-KR")}
                        </TableCell>
                        <TableCell className="font-medium">{response.team_name}</TableCell>
                        <TableCell>{response.building}</TableCell>
                        <TableCell>{response.floor}</TableCell>
                        <TableCell>{response.gender}</TableCell>
                        <TableCell>{response.can_use_restroom}</TableCell>
                        <TableCell>{response.door_type}</TableCell>
                        <TableCell>{response.width} x {response.height} cm</TableCell>
                        <TableCell>{response.photos?.length || 0}장</TableCell>
                        <TableCell>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button
                                variant="outline"
                                size="sm"
                                disabled={!response.photos || response.photos.length === 0}
                                className="gap-2"
                              >
                                <ImageIcon className="h-4 w-4" />
                                보기
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                              <DialogHeader>
                                <DialogTitle>
                                  {response.team_name} - 촬영 사진
                                </DialogTitle>
                              </DialogHeader>
                              <div className="space-y-4">
                                <div className="grid grid-cols-1 gap-4">
                                  {response.photos?.map((photo, idx) => (
                                    <div key={idx} className="space-y-2">
                                      <p className={`${typography.body} font-semibold`}>
                                        사진 {idx + 1}
                                      </p>
                                      <div className="relative aspect-video rounded-lg overflow-hidden border-2 border-border">
                                        <img
                                          src={photo}
                                          alt={`${response.team_name} 사진 ${idx + 1}`}
                                          className="w-full h-full object-contain bg-muted"
                                        />
                                      </div>
                                    </div>
                                  ))}
                                </div>
                                {(!response.photos || response.photos.length === 0) && (
                                  <p className="text-center text-muted-foreground py-8">
                                    사진이 없습니다.
                                  </p>
                                )}
                              </div>
                            </DialogContent>
                          </Dialog>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {responses.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className={typography.body}>사진 갤러리</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {responses.flatMap((response) =>
                  response.photos?.map((photo, idx) => (
                    <div
                      key={`${response.id}-${idx}`}
                      className="relative aspect-square rounded-lg overflow-hidden border-2 border-border"
                    >
                      <img
                        src={photo}
                        alt={`${response.team_name} 사진 ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
