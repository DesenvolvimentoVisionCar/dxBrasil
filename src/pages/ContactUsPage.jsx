import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Form from "../components/Forms/Form";
import WhatsAppPopup from "../components/WhatsAppPopup";

const ContactUsPage = () => {
  return (
    <>
      <div className="p-3 lg:p-8 srl">
        <Navbar />
        <Form />
      </div>
      <div>
        <Footer />
        <WhatsAppPopup />
      </div>
    </>
  );
};

export default ContactUsPage;
