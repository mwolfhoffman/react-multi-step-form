import { useEffect } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import useMultiStepForm from "./useMultiStepForm";

export default function MultiStepForm() {
  const { currentStep } = useMultiStepForm();

  useEffect(() => {
    console.log("curr step changed to " + currentStep);
  }, [currentStep]);

  const conditionalComponent = () => {
    console.log("hi");
    switch (currentStep) {
      case 0:
        return <Step1 />;
      case 1:
        return <Step2 />;
      default:
        <Step1 />;
    }
  };
  return <>{conditionalComponent()}</>;
}
