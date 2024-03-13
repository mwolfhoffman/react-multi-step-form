import styles from "./MultiStepForm.module.css";
import useMultistepForm from "./useMultiStepForm";

export default function FormActions() {
  const { steps, currentStepIndex, back } = useMultistepForm([]);

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
