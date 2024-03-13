import { useState } from "react";
import { BillingCadence } from "../../enums";

export default function useMultistepForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "",
    billingCadence: BillingCadence.MONTHLY,
  });

  const next = () => {
    //  TODO: return if no next step
    setCurrentStep((curr) => curr + 1);
  };

  const prev = () => {
    if (currentStep === 0) {
      return;
    }
    setCurrentStep((curr) => curr + 1);
  };

  return {
    currentStep,
    next,
    prev,
    formData,
    setFormData,
  };
}
