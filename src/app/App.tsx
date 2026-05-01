import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Chatbot } from "./components/Chatbot";
import { Toaster } from "sonner";
import { Suspense, lazy } from "react";
import { Loader2 } from "lucide-react";

// Components that should load immediately
import { ScrollToTop } from "./components/ScrollToTop";
import { GSAPWrapper } from "./components/GSAPWrapper";
import { CursorFollower } from "./components/ui/CursorFollower";
import { SmoothScroll } from "./components/ui/SmoothScroll";
import { ExitIntentPopup } from "./components/ui/ExitIntentPopup";
import { WhatsAppWidget } from "./components/ui/WhatsAppWidget";

// Lazy Load Pages
const Home = lazy(() => import("./pages/Home").then(module => ({ default: module.Home })));
const About = lazy(() => import("./pages/About").then(module => ({ default: module.About })));
const Services = lazy(() => import("./pages/Services").then(module => ({ default: module.Services })));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail").then(module => ({ default: module.ServiceDetail })));
const CaseStudies = lazy(() => import("./pages/CaseStudies").then(module => ({ default: module.CaseStudies })));
const Process = lazy(() => import("./pages/Process").then(module => ({ default: module.Process })));
const Contact = lazy(() => import("./pages/Contact").then(module => ({ default: module.Contact })));
const Blog = lazy(() => import("./pages/Blog").then(module => ({ default: module.Blog })));
const CostEstimator = lazy(() => import("./pages/Estimator").then(module => ({ default: module.CostEstimator })));
const Login = lazy(() => import("./pages/admin/Login").then(module => ({ default: module.Login })));
const Dashboard = lazy(() => import("./pages/admin/Dashboard").then(module => ({ default: module.Dashboard })));
const PrivacyPolicy = lazy(() => import("./pages/policies/PrivacyPolicy").then(module => ({ default: module.PrivacyPolicy })));
const TermsOfService = lazy(() => import("./pages/policies/TermsOfService").then(module => ({ default: module.TermsOfService })));
const GDPRCompliance = lazy(() => import("./pages/policies/GDPRCompliance").then(module => ({ default: module.GDPRCompliance })));
const NotFound = lazy(() => import("./pages/NotFound").then(module => ({ default: module.NotFound })));

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
      <WhatsAppWidget />
      <SmoothScroll>
        <GSAPWrapper>
          <CursorFollower />
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
            <Chatbot />
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
            <Route path="/estimator" element={<CostEstimator />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}