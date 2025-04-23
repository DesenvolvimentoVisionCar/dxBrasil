import background from "../assets/background.png";
import ForgotPasswordSection from "../components/ForgotPasswordSection";

const ForgotPassword = () => {
  return (
    <div className="w-screen h-screen overflow-hidden flex flex-col lg:flex-row bg-gray-50 lg:bg-transparent">
      <div className=" absolute lg:static w-full z-1 lg:block lg:w-1/2">
        <img
          src={background}
          alt=""
          className="h-[800px] sm:h-full hidden lg:inline w-full object-cover lg:w-full"
        />
      </div>
      <div className="py-0 w-full z-50 lg:w-1/2 h-screen overflow-x-scroll">
        <ForgotPasswordSection></ForgotPasswordSection>
      </div>
    </div>
  );
};

const ForgotPasswordPage = () => {
  return (
    <>
      <ForgotPassword></ForgotPassword>
    </>
  );
};

export default ForgotPasswordPage;
