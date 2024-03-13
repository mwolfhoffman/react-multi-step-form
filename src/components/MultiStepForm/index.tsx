import { FormEvent, useState } from "react";
import PersonalInfoStep from "./PersonalInfoStep";
import SelectPlanStep from "./SelectPlanStep";
import useMultiStepForm from "./useMultiStepForm";
import AddOnsStep from "./AddOnsStep";
import FinishingUpStep from "./FinishingUpStep";
import FormStepWrapper from "./FormStepWrapper";

type FormData = {
  name: string;
  email: string;
  phone: string;
  billing: string;
};

const INITIAL_DATA: FormData = {
  name: "",
  email: "",
  phone: "",
  billing: "",
};

export type FormErrors = {
  name: string;
  email: string;
  phone: string;
};

export default function MultiStepForm() {
  const updateFields = (fields: Partial<FormData>) => {
    setData((curr) => {
      return { ...curr, ...fields };
    });
  };
  const [data, setData] = useState<FormData>(INITIAL_DATA);
  const [formErrors, setFormErrors] = useState<FormErrors>({
    name: "",
    email: "",
    phone: "",
  });

  const { steps, currentStepIndex, step, next, back } = useMultiStepForm([
    <PersonalInfoStep
      {...data}
      updateFields={updateFields}
      formErrors={formErrors}
    />,
    <SelectPlanStep {...data} updateFields={updateFields} />,
    <AddOnsStep {...data} updateFields={updateFields} />,
    <FinishingUpStep {...data} updateFields={updateFields} />,
  ]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    let newFormErrors: FormErrors;
    if (currentStepIndex !== steps.length - 1) {
      console.log("handle submit called");
      newFormErrors = {
        name: data.name.trim() === "" ? "Name is required" : "",
        email:
          data.email.trim() === "" ||
          !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
            data.email.trim()
          )
            ? "Email is required"
            : "",
        phone: data.phone.trim() === "" ? "Phone is required" : "",
      };
      setFormErrors(newFormErrors);

      console.log({ newFormErrors });

      if (Object.values(newFormErrors)) {
        return;
      }
      return next(); // Proceed to the next step
    }
    console.log("submitting");
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormStepWrapper
        steps={steps}
        back={back}
        currentStepIndex={currentStepIndex}
      >
        <p>
          Step {currentStepIndex + 1}/{steps.length}
        </p>
        {step}
      </FormStepWrapper>
    </form>
  );
}
