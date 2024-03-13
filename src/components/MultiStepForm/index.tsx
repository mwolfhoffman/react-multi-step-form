import { FormEvent, useEffect, useState } from "react";
import PersonalInfoStep from "./PersonalInfoStep";
import SelectPlanStep from "./SelectPlanStep";
import useMultiStepForm from "./useMultiStepForm";
import AddOnsStep from "./AddOnsStep";
import FinishingUpStep from "./FinishingUpStep";

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
  const { steps, currentStepIndex, step, next } = useMultiStepForm([
    <PersonalInfoStep {...data} updateFields={updateFields} />,
    <SelectPlanStep {...data} updateFields={updateFields} />,
    <AddOnsStep {...data} updateFields={updateFields} />,
    <FinishingUpStep {...data} updateFields={updateFields} />,
  ]);

  useEffect(() => {
    console.log("curr step in index.tsx " + currentStepIndex);
  }, [currentStepIndex]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (currentStepIndex !== steps.length - 1) {
      return next();
    }
    console.log("submitting");
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>
        Step {currentStepIndex + 1}/{steps.length}
      </p>
      {step}
    </form>
  );
}
