import { FormEvent, useEffect } from "react";
import PersonalInfoStep from "./PersonalInfoStep";
import SelectPlanStep from "./SelectPlanStep";
import AddOnsStep from "./AddOnsStep";
import FinishingUpStep from "./FinishingUpStep";
import FormStepWrapper from "./FormStepWrapper";
import { FormErrors, useFormStateContext } from "../context/FormStateContext";

export default function MultiStepForm() {
  const {
    setSteps,
    steps,
    currentStepIndex,
    step,
    formState,
    setFormErrors,
    next,
  } = useFormStateContext();

  useEffect(() => {
    setSteps([
      <PersonalInfoStep />,
      <SelectPlanStep />,
      <AddOnsStep />,
      <FinishingUpStep />,
    ]);
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log("here");
    let newFormErrors: FormErrors;
    if (currentStepIndex !== steps.length - 1) {
      console.log("handle submit called");
      newFormErrors = {
        name: formState.name.trim() === "" ? "Name is required" : "",
        email:
          formState.email.trim() === "" ||
          !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
            formState.email.trim()
          )
            ? "Email is required"
            : "",
        phone: formState.phone.trim() === "" ? "Phone is required" : "",
        billing: "",
      };
      setFormErrors(newFormErrors);
      console.log({ newFormErrors });
      if (Object.values(newFormErrors).find((x) => x)) {
        return;
      }
      return next(); // Proceed to the next step
    }
    console.log("submitting");
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormStepWrapper>
        <p>
          Step {currentStepIndex + 1}/{steps.length}
        </p>
        {step}
      </FormStepWrapper>
    </form>
  );
}