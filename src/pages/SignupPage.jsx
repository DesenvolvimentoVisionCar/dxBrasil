import SignupSection from "../components/SignupSection";
import background from "../assets/background.png";

const SignupPage = () => {
  return (
    <div className="overflow-y-hidden w-screen h-screen flex flex-col lg:flex-row lg:bg-transparent bg-gray-50">
      <div className="overflow-x-hidden absolute lg:static w-full z-1 lg:block lg:w-1/2">
        <img src={background} alt="" className="h-[800px] hidden lg:inline sm:h-full w-full object-cover  lg:w-full"/>
      </div>
      <div className="w-full z-50 lg:w-1/2 overflow-y-scroll">
        <SignupSection></SignupSection>
      </div>
    </div>
  );
};

export default SignupPage;
