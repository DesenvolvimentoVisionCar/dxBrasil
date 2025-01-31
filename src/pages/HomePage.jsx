import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeaturesSection";
import Workflow from "../components/Workflow";
import TimelineSection from "../components/TimelineSection";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="p-3 lg:p-14">
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <Workflow />
      <Pricing />
      <TimelineSection />
      <Footer />
    </div>
  );
};

export default HomePage;
