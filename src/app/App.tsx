import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Chatbot } from "./components/Chatbot";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { CaseStudies } from "./pages/CaseStudies";
import { Process } from "./pages/Process";
import { Contact } from "./pages/Contact";
import { Login } from "./pages/admin/Login";
import { Dashboard } from "./pages/admin/Dashboard";
import { Toaster } from "sonner";

import { GSAPWrapper } from "./components/GSAPWrapper";
import { CursorFollower } from "./components/ui/CursorFollower";
import { SmoothScroll } from "./components/ui/SmoothScroll";
import { PrivacyPolicy } from "./pages/policies/PrivacyPolicy";
import { TermsOfService } from "./pages/policies/TermsOfService";
import { GDPRCompliance } from "./pages/policies/GDPRCompliance";
import { ScrollToTop } from "./components/ScrollToTop";

function PublicLayout() {
  return (
    <SmoothScroll>
      <GSAPWrapper>
        <CursorFollower />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Outlet />
          </main>
          <Footer />
          <Chatbot />
        </div>
      </GSAPWrapper>
    </SmoothScroll>
  );
}


export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Toaster position="top-center" richColors />
      <Routes>
        {/* Admin Routes (Standalone) */}
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />

        {/* Public Routes (With Header/Footer) */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/process" element={<Process />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/gdpr-compliance" element={<GDPRCompliance />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}