import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Trading from "./pages/services/Trading";
import Contracting from "./pages/services/Contracting";
import ProjectSupport from "./pages/services/ProjectSupport";
import FacilityManagement from "./pages/services/FacilityManagement";
import Transportation from "./pages/services/Transportation";
import EquipmentRental from "./pages/services/EquipmentRental";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/trading" element={<Trading />} />
            <Route path="/services/contracting" element={<Contracting />} />
            <Route path="/services/project-support" element={<ProjectSupport />} />
            <Route path="/services/facility-management" element={<FacilityManagement />} />
            <Route path="/services/transportation" element={<Transportation />} />
            <Route path="/services/equipment-rental" element={<EquipmentRental />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
