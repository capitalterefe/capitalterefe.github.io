import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/context/ThemeContext";
import Home from "./pages/Home";
import Solutions from "./pages/Solutions";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import PrivacyOnly from "./pages/PrivacyOnly";
import TermsOnly from "./pages/TermsOnly";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

export const App = () => {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <HashRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy/:appName/:section" element={<PrivacyPolicy />} />
              <Route path="/privacy/:appName" element={<PrivacyPolicy />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/privacy-only/:appName" element={<PrivacyOnly />} />
              <Route path="/terms-only/:appName" element={<TermsOnly />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </HashRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};
