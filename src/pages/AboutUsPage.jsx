import About from "../components/About";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppPopUp from "../components/WhatsAppPopup";

const AboutUsPage = () => {
  return (
    <>
      <div className="p-3 lg:p-8 srl">
        <Navbar />
        <About />
      </div>
      <div>
        <Footer />
        <WhatsAppPopUp />
      </div>
    </>
  );
};

export default AboutUsPage;
