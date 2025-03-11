import { Suspense } from "react";
import GridBackground from "./components/GridBackground";
import PromoBanner from "./components/PromoBanner";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Services from "./components/pages/Services";
import Solutions from "./components/pages/Solutions";
import Clients from "./components/pages/Clients";
import Portfolio from "./components/pages/Portfolio";
import Careers from "./components/pages/Careers";
import Blog from "./components/pages/Blog";
import BlogPost from "./components/pages/BlogPost";
import EnablingClientMaximizeIT from "./components/pages/blog/EnablingClientMaximizeIT";
import BuildingEnterpriseDataLakes from "./components/pages/blog/BuildingEnterpriseDataLakes";
import MLOpsBestPractices from "./components/pages/blog/MLOpsBestPractices";
import CloudNativeArchitecturePatterns from "./components/pages/blog/CloudNativeArchitecturePatterns";
import RealTimeAnalyticsKafka from "./components/pages/blog/RealTimeAnalyticsKafka";
import Locations from "./components/pages/Locations";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import BigDataAnalytics from "./components/pages/BigDataAnalytics";
import CeoProfile from "./components/pages/CeoProfile";
import AiSolutions from "./components/pages/AiSolutions";
import CloudComputing from "./components/pages/CloudComputing";
import DigitalTransformation from "./components/pages/DigitalTransformation";
import DataSecurity from "./components/pages/DataSecurity";
import EnterpriseSolutions from "./components/pages/EnterpriseSolutions";
import Fortune500 from "./components/pages/clients/Fortune500";
import GovAgencies from "./components/pages/clients/GovAgencies";
import TechStartups from "./components/pages/clients/TechStartups";
import routes from "tempo-routes";
import Privacy from "./components/pages/legal/Privacy";
import Terms from "./components/pages/legal/Terms";
import Cookies from "./components/pages/legal/Cookies";
import Security from "./components/pages/legal/Security";
import Ledger from "./components/pages/products/Ledger";
import UTrack from "./components/pages/products/uTrack";
import Ember from "./components/pages/products/Ember";
import GoDash from "./components/pages/products/GoDash";
import BigBytes from "./components/pages/products/BigBytes";
import KozmoAI from "./components/pages/products/KozmoAI";
import CalendarPage from "./components/pages/CalendarPage";
import SimpleCalendarTest from "./components/pages/SimpleCalendarTest";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <GridBackground />
      <PromoBanner />
      {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route
          path="/blog/enabling-our-client-to-maximise-the-business-value-from-it"
          element={<EnablingClientMaximizeIT />}
        />
        <Route
          path="/blog/building-enterprise-data-lakes"
          element={<BuildingEnterpriseDataLakes />}
        />
        <Route
          path="/blog/mlops-best-practices"
          element={<MLOpsBestPractices />}
        />
        <Route
          path="/blog/cloud-native-architecture-patterns"
          element={<CloudNativeArchitecturePatterns />}
        />
        <Route
          path="/blog/real-time-analytics-kafka"
          element={<RealTimeAnalyticsKafka />}
        />
        {/* Removed Locations route */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/ceo-profile" element={<CeoProfile />} />
        <Route
          path="/services/big-data-analytics"
          element={<BigDataAnalytics />}
        />
        <Route path="/services/ai-solutions" element={<AiSolutions />} />
        <Route path="/services/cloud-computing" element={<CloudComputing />} />
        <Route
          path="/solutions/digital-transformation"
          element={<DigitalTransformation />}
        />
        <Route path="/solutions/data-security" element={<DataSecurity />} />
        <Route
          path="/solutions/enterprise-solutions"
          element={<EnterpriseSolutions />}
        />
        <Route path="/clients/fortune-500-companies" element={<Fortune500 />} />
        <Route path="/clients/gov-agencies" element={<GovAgencies />} />
        <Route path="/clients/tech-startups" element={<TechStartups />} />
        <Route path="/products/ledger" element={<Ledger />} />
        <Route path="/products/utrack" element={<UTrack />} />
        <Route path="/products/ember" element={<Ember />} />
        <Route path="/products/godash" element={<GoDash />} />
        <Route path="/products/bigbytes" element={<BigBytes />} />
        <Route path="/products/kozmo-ai" element={<KozmoAI />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/simple-calendar" element={<SimpleCalendarTest />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/security" element={<Security />} />
        {import.meta.env.VITE_TEMPO === "true" && <Route path="/tempobook/*" />}
      </Routes>
    </Suspense>
  );
}

export default App;
