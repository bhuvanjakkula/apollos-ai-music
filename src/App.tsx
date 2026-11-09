import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { PlayerProvider } from "@/contexts/PlayerContext";
import Index from "./pages/Index";
import About from "./pages/About";
import MusicCatalog from "./pages/MusicCatalog";
import Artist from "./pages/Artist";
import FilmLicensing from "./pages/FilmLicensing";
import Partnerships from "./pages/Partnerships";
import Innovations from "./pages/Innovations";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Dashboard from "./pages/Dashboard";
import AdminContacts from "./pages/AdminContacts";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <PlayerProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <AuthProvider>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/music" element={<MusicCatalog />} />
                <Route path="/artist" element={<Artist />} />
                <Route path="/film-licensing" element={<FilmLicensing />} />
                <Route path="/partnerships" element={<Partnerships />} />
                <Route path="/innovations" element={<Innovations />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/reset-password" element={<ResetPassword />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/admin/contacts" element={<AdminContacts />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AuthProvider>
          </BrowserRouter>
        </TooltipProvider>
      </PlayerProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
