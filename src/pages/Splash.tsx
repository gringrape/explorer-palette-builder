// src/pages/Splash.tsx
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

type SplashProps = {
  durationMs?: number;
  to?: string;
};

export default function Splash({
  durationMs = 1500,
  to = "/index",
}: SplashProps) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    // URL에서 schoolId 읽어서 localStorage에 저장
    const schoolId = searchParams.get("schoolId");
    if (schoolId) {
      console.log("Splash: schoolId from URL:", schoolId);
      localStorage.setItem("schoolId", schoolId);
    }

    const t = window.setTimeout(() => navigate(to), durationMs);
    return () => window.clearTimeout(t);
  }, [durationMs, navigate, to, searchParams]);

  return (
    <div className="h-svh w-full bg-primary flex items-center justify-center">
      <h1 className="font-sniglet font-extrabold text-[48px] tracking-[-0.04em]leading-none text-primary-foreground splash-text select-none">
        MOMO
      </h1>
    </div>
  );
}
