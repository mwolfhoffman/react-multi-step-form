import styles from "./MultiStepForm.module.css";

type FormData = {
  billing: string;
};

type SelectPlanStepProps = FormData & {
  updateFields: (fields: Partial<FormData>) => void;
};

export default function SelectPlanStep({ updateFields }: SelectPlanStepProps) {
  return (
    <>
      <h1 className={styles.formTitle}>Select your plan</h1>
      <p className={styles.formDescription}>
        You have the option of monthly or yearly billing.
      </p>

      <ul>
        <li>Arcade: $90/yr</li>
        <li>Advanced: $120/yr</li>
        <li>Prop: $150/yr</li>
      </ul>
    </>
  );
}
