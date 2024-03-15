import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type FormFields = "name" | "email" | "phone" | "billing";

type FormData = {
  [Key in FormFields]: string;
};

export type FormErrors = {
  name: string;
  email: string;
  phone: string;
};

interface FormStateContextType {
  formState: FormData;
  setFormState: Dispatch<SetStateAction<FormData>>;
  formErrors: FormData;
  setFormErrors: Dispatch<SetStateAction<FormData>>;
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
    billing: "",
  });

  const [formErrors, setFormErrors] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    billing: "",
  });

  return (
    <>
      <FormStateContext.Provider
        value={{ formState, formErrors, setFormState, setFormErrors }}
      >
        {children}
      </FormStateContext.Provider>
    </>
  );
};
