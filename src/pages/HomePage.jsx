import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeaturesSection";
import Workflow from "../components/Workflow";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <Workflow />
      <Pricing />
      <Footer />
    </>
  );
};

export default HomePage;
