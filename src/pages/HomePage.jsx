import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeaturesSection";
import Workflow from "../components/Workflow";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection></HeroSection>
      <FeatureSection></FeatureSection>
      <Workflow/>
    </>
  );
};

export default HomePage;
