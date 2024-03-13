import { FormEvent, useEffect, useState } from "react";
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

export default function MultiStepForm() {
  const updateFields = (fields: Partial<FormData>) => {
    setData((curr) => {
      return { ...curr, ...fields };
    });
  };
  const [data, setData] = useState<FormData>(INITIAL_DATA);
  const { steps, currentStepIndex, step, next, back } = useMultiStepForm([
    <PersonalInfoStep {...data} updateFields={updateFields} />,
    <SelectPlanStep {...data} updateFields={updateFields} />,
    <AddOnsStep {...data} updateFields={updateFields} />,
    <FinishingUpStep {...data} updateFields={updateFields} />,
  ]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (currentStepIndex !== steps.length - 1) {
      return next();
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
