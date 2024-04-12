import {
  Dispatch,
  ReactElement,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type FormFields = "name" | "email" | "phone" | "billingPlan";

type AddOnOption = {
  name: string
  cost: number 
}

type FormData = {
  name: string;
  email: string;
  phone: string;
  billingPlan: string;
  billingCycle: "mo" | "yr",
  planCost: number,
  addOns: AddOnOption[]
};

export type FormErrors = {
  name: string;
  email: string;
  phone: string;
  billingPlan: string;
};

interface FormStateContextType {
  formState: FormData;
  setFormState: Dispatch<SetStateAction<FormData>>;
  formErrors: FormErrors;
  setFormErrors: Dispatch<SetStateAction<FormErrors>>;
  currentStepIndex: number;
  setCurrentStepIndex: Dispatch<SetStateAction<number>>;
  back: () => void;
  next: () => void;
  steps: ReactElement[];
  setSteps: Dispatch<SetStateAction<ReactElement[]>>;
  step: ReactElement;
}

const FormStateContext = createContext<FormStateContextType | undefined>(
  undefined
);

export const useFormStateContext = () => {
  const context = useContext(FormStateContext);
  if (!context) {
    throw new Error(
      "useFormStateContext must be usd within a FormStateContextProvider"
    );
  }
  return context;
};

interface FormStateContextProviderProps {
  children: ReactNode;
}

export const FormStateContextProvider = ({
  children,
}: FormStateContextProviderProps) => {
  const [formState, setFormState] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    billingPlan: "Arcade",
    billingCycle: "mo",
    planCost: 0,
    addOns: []
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    name: "",
    email: "",
    phone: "",
    billingPlan: "",
  });

  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [steps, setSteps] = useState<ReactElement[]>([]);

  function next() {
    setCurrentStepIndex((i) => {
      if (i >= steps.length - 1) return 1;
      return i + 1;
    });
  }

  function back() {
    setCurrentStepIndex((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  }

  return (
    <>
      <FormStateContext.Provider
        value={{
          formState,
          formErrors,
          setFormState,
          setFormErrors,
          currentStepIndex,
          setCurrentStepIndex,
          next,
          back,
          steps,
          setSteps,
          step: steps[currentStepIndex],
        }}
      >
        {children}
      </FormStateContext.Provider>
    </>
  );
};
