import DynamicCategoryClient from "../components/DynamicCategoryClient";
import Navbar from "../components/Navbar";
import CustomFooter from "../components/Footer";

const CategoryPage = () => {
  return (
    <>
      <Navbar />
      <DynamicCategoryClient></DynamicCategoryClient>
      <CustomFooter />
    </>
  );
};

export default CategoryPage;
