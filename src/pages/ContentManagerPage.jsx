import "../App.css";
import Navbar from "../components/Navbar";
import CustomFooter from "../components/Footer";
import ClientContentManagement from "../components/ClientContentManagement";

const ContentManagerPage = () => {
  return (
    <>
      <Navbar />
      <ClientContentManagement></ClientContentManagement>
      <CustomFooter/>
    </>
  )
}

export default ContentManagerPage