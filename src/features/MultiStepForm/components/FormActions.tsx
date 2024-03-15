import styles from "./MultiStepForm.module.css";
import { useFormStateContext } from "../context/FormStateContext";

export default function FormActions() {
  const { formErrors, back, steps, currentStepIndex } = useFormStateContext();

  return (
    <>
      {currentStepIndex !== 0 && (
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
      </button>
    </>
  );
}
