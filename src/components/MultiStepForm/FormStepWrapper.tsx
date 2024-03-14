import { ReactNode } from "react";
import FormActions, { FormActionsProps } from "./FormActions";
import Card from "../Card";
import { FormErrors } from ".";

type FormStepWrapperProps = FormActionsProps & {
  children: ReactNode;
  formErrors: FormErrors;
};

export default function FormStepWrapper({
  children,
  steps,
  back,
  currentStepIndex,
  formErrors,
}: FormStepWrapperProps) {
  return (
    <>
      <Card>
        {children}
        <FormActions
          steps={steps}
          back={back}
          currentStepIndex={currentStepIndex}
          formErrors={formErrors}
        />
      </Card>
    </>
  );
}
