import { FormEvent, ReactNode } from "react";
import styles from "./MultiStepForm.module.css";
import { FormErrors } from ".";

export default function FormActions() {
  return (
    <>
      {" "}
      {/* {currentStepIndex !== 0 && (
        <button
          type="button"
          className={`button ${styles.bottomLeft}`}
          onClick={back}
        >
          Go Back
        </button>
      )}
      <button
        type="submit"
        className={`button ${styles.bottomRight}`}
        disabled={!!Object.values(formErrors).find((x) => x)}
      >
        {currentStepIndex === steps.length - 1 ? "Confirm" : "Next"}
      </button> */}
    </>
  );
}
