import { FormEvent, useEffect, useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import useMultiStepForm from "./useMultiStepForm";
import Step3 from "./Step3";
import Step4 from "./Step4";
import styles from "./MultiStepForm.module.css";
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
    <Step1 {...data} updateFields={updateFields} />,
    <Step2 {...data} updateFields={updateFields} />,
    <Step3 {...data} updateFields={updateFields} />,
    <Step4 {...data} updateFields={updateFields} />,
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
