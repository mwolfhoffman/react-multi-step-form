import { ReactNode } from "react";
import FormActions, { FormActionsProps } from "./FormActions";
import Card from "../../Card";
import { FormErrors } from ".";

type FormStepWrapperProps = FormActionsProps & {
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
