
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Images from "./pages/Images";
import Audio from "./pages/Audio";
import Videos from "./pages/Videos";
import Documents from "./pages/Documents";
import Notes from "./pages/Notes";
import Links from "./pages/Links";
import Voice from "./pages/Voice";
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
          <Route path="/images" element={<Images />} />
          <Route path="/audio" element={<Audio />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/links" element={<Links />} />
          <Route path="/voice" element={<Voice />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
