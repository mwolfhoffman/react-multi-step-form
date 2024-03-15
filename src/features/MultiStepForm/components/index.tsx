import { FormEvent } from "react";
import PersonalInfoStep from "./PersonalInfoStep";
import SelectPlanStep from "./SelectPlanStep";
import useMultiStepForm from "./useMultiStepForm";
import AddOnsStep from "./AddOnsStep";
import FinishingUpStep from "./FinishingUpStep";
import FormStepWrapper from "./FormStepWrapper";
import { FormStateContextProvider } from "../context/FormStateContext";

export default function MultiStepForm() {
  const { steps, currentStepIndex, step, next, back } = useMultiStepForm([
    <PersonalInfoStep />,
    <SelectPlanStep />,
    <AddOnsStep />,
    <FinishingUpStep />,
  ]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    //   let newFormErrors: FormErrors;
    //   if (currentStepIndex !== steps.length - 1) {
    //     console.log("handle submit called");
    //     newFormErrors = {
    //       name: data.name.trim() === "" ? "Name is required" : "",
    //       email:
    //         data.email.trim() === "" ||
    //         !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    //           data.email.trim()
    //         )
    //           ? "Email is required"
    //           : "",
    //       phone: data.phone.trim() === "" ? "Phone is required" : "",
    //     };
    //     setFormErrors(newFormErrors);
    //     console.log({ newFormErrors });
    //     if (Object.values(newFormErrors).find((x) => x)) {
    //       return;
    //     }
    //     return next(); // Proceed to the next step
    //   }
    console.log("submitting");
  };

  return (
    <FormStateContextProvider>
      <form onSubmit={handleSubmit}>
        <FormStepWrapper>
          <p>
            Step {currentStepIndex + 1}/{steps.length}
          </p>
          {step}
        </FormStepWrapper>
      </form>
    </FormStateContextProvider>
  );
}
