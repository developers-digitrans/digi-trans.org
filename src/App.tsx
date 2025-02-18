import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Services from "./components/pages/Services";
import Solutions from "./components/pages/Solutions";
import Clients from "./components/pages/Clients";
import Portfolio from "./components/pages/Portfolio";
import Careers from "./components/pages/Careers";
import Blog from "./components/pages/Blog";
import BlogPost from "./components/pages/BlogPost";
import Locations from "./components/pages/Locations";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import BigDataAnalytics from "./components/pages/BigDataAnalytics";
import AiSolutions from "./components/pages/AiSolutions";
import CloudComputing from "./components/pages/CloudComputing";
import DigitalTransformation from "./components/pages/DigitalTransformation";
import DataSecurity from "./components/pages/DataSecurity";
import EnterpriseSolutions from "./components/pages/EnterpriseSolutions";
import Fortune500 from "./components/pages/clients/Fortune500";
import GovAgencies from "./components/pages/clients/GovAgencies";
import TechStartups from "./components/pages/clients/TechStartups";
import routes from "tempo-routes";
import Ledger from "./components/pages/products/Ledger";
import UTrack from "./components/pages/products/uTrack";
import Ember from "./components/pages/products/Ember";
import GoDash from "./components/pages/products/GoDash";
import BigBytes from "./components/pages/products/BigBytes";
import KozmoAI from "./components/pages/products/KozmoAI";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
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
        <Route path="/locations" element={<Locations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
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
        {import.meta.env.VITE_TEMPO === "true" && <Route path="/tempobook/*" />}
      </Routes>
    </Suspense>
  );
}

export default App;
