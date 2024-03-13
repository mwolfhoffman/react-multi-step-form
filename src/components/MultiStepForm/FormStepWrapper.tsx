import { ReactNode } from "react";
import FormActions, { FormActionsProps } from "./FormActions";
import Card from "../Card";

type FormStepWrapperProps = FormActionsProps & {
  children: ReactNode;
};

export default function FormStepWrapper({
  children,
  steps,
  back,
  currentStepIndex,
}: FormStepWrapperProps) {
  return (
    <>
      <Card>
        {children}
        <FormActions
          steps={steps}
          back={back}
          currentStepIndex={currentStepIndex}
        />
      </Card>
    </>
  );
}
