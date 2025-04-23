import "../App.css";
import Navbar from "../components/Navbar";
import CustomFooter from "../components/Footer";
import ClientContentForm from "../components/Forms/ClientContentForm";

const ContentFormPage = () => {
  return (
    <>
      <Navbar />
      <ClientContentForm></ClientContentForm>
      <CustomFooter />
    </>
  )
}

export default ContentFormPage