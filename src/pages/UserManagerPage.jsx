import "../App.css";
import Navbar from "../components/Navbar";
import CustomFooter from "../components/Footer";
import UserManagement from "../components/UserManagement";

const UserManagerPage = () => {
  return (
    <>
      <Navbar />
      <UserManagement></UserManagement>
      <CustomFooter />
    </>
  )
}

export default UserManagerPage