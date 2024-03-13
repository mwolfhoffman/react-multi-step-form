import { FormEvent, ReactNode } from "react";
import styles from "./MultiStepForm.module.css";

export type FormActionsProps = {
  steps: ReactNode[];
  currentStepIndex: number;
  back: (e: FormEvent) => void;
};

export default function FormActions({
  steps,
  currentStepIndex,
  back,
}: FormActionsProps) {
  return (
    <>
      {" "}
      {currentStepIndex !== 0 && (
        <button
          type="button"
          className={`button ${styles.bottomLeft}`}
          onClick={back}
        >
          Go Back
        </button>
      )}
      <button type="submit" className={`button ${styles.bottomRight}`}>
        {currentStepIndex === steps.length - 1 ? "Confirm" : "Next"}
      </button>
    </>
  );
}
