import React from "react";
import { Stepper, Step, Typography } from "@material-tailwind/react";
import { Cog, User, CheckCheck } from "lucide-react";
import VerificationForm from "./Forms/VerificationForm";
import PasswordForm from "./Forms/PasswordForm";
import NewPasswordForm from "./Forms/NewPasswordForm";


const ForgotPasswordSection = () => {
  const [activeStep, setActiveStep] = React.useState(0);
 const [isLastStep, setIsLastStep] = React.useState(false);
 const [isFirstStep, setIsFirstStep] = React.useState(false);

 const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
 const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  return (
    <div className="flex flex-col items-center h-fit m-3 px-4 py-10 lg:m-0 rounded-md">
      <div className="w-full sm:px-2 lg:px-0 lg:w-4/5 lg:max-w-3xl">
        <Stepper
          activeStep={activeStep}
          isLastStep={(value) => setIsLastStep(value)}
          isFirstStep={(value) => setIsFirstStep(value)}
        >
          <Step onClick={() => setActiveStep(0)}>
            <User className="h-6 w-6 ms-[7.5px] mt-[8px]" />
            <div className="absolute -bottom-[3rem] -left-[.6em] md:-left-[1.1em] w-max text-center">
              <Typography
                className="text-sm font-semibold sm:text-md md:text-lg"
                color={activeStep === 0 ? "blue" : "gray"}
              >
                Passo 1
              </Typography>
              <Typography
                color={activeStep === 0 ? "blue" : "gray"}
                className="font-normal text-xs md:text-sm"
              >
                Recupere sua senha
              </Typography>
            </div>
          </Step>
          <Step onClick={() => setActiveStep(1)}>
            <Cog className="h-6 w-6 ms-[8px] mt-[8px]" />
            <div className="absolute -bottom-[3rem] -left-[2.5em] md:-left-[3.2em] w-max text-center">
              <Typography
                className="text-sm font-semibold sm:text-md md:text-lg"
                color={activeStep === 1 ? "blue" : "gray"}
              >
                Passo 2
              </Typography>
              <Typography
                color={activeStep === 1 ? "blue" : "gray"}
                className="font-normal text-xs md:text-sm"
              >
                Verificação de código
              </Typography>
            </div>
          </Step>
          <Step onClick={() => setActiveStep(2)}>
            <CheckCheck className="h-6 w-6 ms-[7.5px] mt-[6px]" />
            <div className="absolute -bottom-[3rem] -left-[.7em] md:-left-[1em] w-max text-center">
              <Typography
                className="text-sm font-semibold sm:text-md md:text-lg"
                color={activeStep === 2 ? "blue" : "gray"}
              >
                Passo 3
              </Typography>
              <Typography
                color={activeStep === 2 ? "blue" : "gray"}
                className="font-normal text-xs md:text-sm"
              >
                Verificado
              </Typography>
            </div>
          </Step>
        </Stepper>
        <div className="mt-24 flex flex-col items-center w-full ">
          {activeStep === 0 && <PasswordForm setActiveStep={setActiveStep}/>}
          {activeStep === 1 && <VerificationForm setActiveStep={setActiveStep} verificationType={"Password"} />}
          {activeStep === 2 && <NewPasswordForm />}
          <div className="mt-8 flex justify-between w-full">
          </div>
        </div>
      </div>
    </div>
  );
};
export default ForgotPasswordSection;