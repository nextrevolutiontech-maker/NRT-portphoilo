import { BrowserRouter, Routes, Route, Outlet, useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { motion, AnimatePresence } from "motion/react";
import { Toaster } from "sonner";
import { Suspense, lazy } from "react";
import { Loader2 } from "lucide-react";

// Components that should load immediately
import { ScrollToTop } from "./components/ScrollToTop";
import { GSAPWrapper } from "./components/GSAPWrapper";
// import { CursorFollower } from "./components/ui/CursorFollower";
import { SmoothScroll } from "./components/ui/SmoothScroll";
import { ExitIntentPopup } from "./components/ui/ExitIntentPopup";
import { FloatingWidgets } from "./components/FloatingWidgets";

// Page Component Imports
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { ServiceDetail } from "./pages/ServiceDetail";
import { CaseStudies } from "./pages/CaseStudies";
import { Process } from "./pages/Process";
import { Contact } from "./pages/Contact";
import { Blog } from "./pages/Blog";
import { CostEstimator } from "./pages/Estimator";
import { Login } from "./pages/admin/Login";
import { Dashboard } from "./pages/admin/Dashboard";
import { PrivacyPolicy } from "./pages/policies/PrivacyPolicy";
import { TermsOfService } from "./pages/policies/TermsOfService";
import { GDPRCompliance } from "./pages/policies/GDPRCompliance";
import { Pricing } from "./pages/Pricing";
import { NotFound } from "./pages/NotFound";

// Loading Fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <Loader2 className="w-10 h-10 text-primary animate-spin" />
  </div>
);

function PublicLayout() {
  const location = useLocation();

  return (
    <>
      <ExitIntentPopup />
      <FloatingWidgets />
      <SmoothScroll>
        <GSAPWrapper>
          {/* <CursorFollower /> */}
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
              <AnimatePresence mode="wait">
                <motion.div
                  key={location.pathname}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <Suspense fallback={<PageLoader />}>
                    <Outlet />
                  </Suspense>
                </motion.div>
              </AnimatePresence>
            </main>
            <Footer />
          </div>
        </GSAPWrapper>
      </SmoothScroll>
    </>
  );
}


export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Toaster position="top-center" richColors />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* Admin Routes (Standalone) */}
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />

          {/* Public Routes (With Header/Footer) */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/process" element={<Process />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/gdpr-compliance" element={<GDPRCompliance />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/estimator" element={<CostEstimator />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}