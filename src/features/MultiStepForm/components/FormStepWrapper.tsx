import { ReactNode } from "react";
import FormActions from "./FormActions";
import Card from "../../Card";

type FormStepWrapperProps = {
  children: ReactNode;
};

export default function FormStepWrapper({ children }: FormStepWrapperProps) {
  return (
    <>
      <Card>
        {children}
        <FormActions />
      </Card>
    </>
  );
}
