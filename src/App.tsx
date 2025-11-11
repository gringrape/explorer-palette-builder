import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import TeamInfo from "./pages/TeamInfo";
import Preparation from "./pages/Preparation";
import Roadmap from "./pages/Roadmap";
import LocationSurvey from "./pages/LocationSurvey";
import RestroomConditionSurvey from "./pages/RestroomConditionSurvey";
import DoorSurvey from "./pages/DoorSurvey";
import SizeSurvey from "./pages/SizeSurvey";
import PhotoSurvey from "./pages/PhotoSurvey";
import HandrailSurvey from "./pages/HandrailSurvey";
import SinkSurvey from "./pages/SinkSurvey";
import GoodbyePage from "./pages/GoodbyePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/team-info" element={<TeamInfo />} />
          <Route path="/preparation" element={<Preparation />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/location-survey" element={<LocationSurvey />} />
          <Route path="/restroom-condition-survey" element={<RestroomConditionSurvey />} />
          <Route path="/door-survey" element={<DoorSurvey />} />
          <Route path="/size-survey" element={<SizeSurvey />} />
          <Route path="/photo-survey" element={<PhotoSurvey />} />
          <Route path="/handrail-survey" element={<HandrailSurvey />} />
          <Route path="/sink-survey" element={<SinkSurvey />} />
          <Route path="/goodbye" element={<GoodbyePage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
