import Card from "../Card";
import styles from "./MultiStepForm.module.css";

type FormData = {
  billing: string;
};

type Step2Props = FormData & {
  updateFields: (fields: Partial<FormData>) => void;
};

export default function Step2({ updateFields }: Step2Props) {
  return (
    <>
      <Card>
        <h1 className={styles.formTitle}>Select your plan</h1>
        <p className={styles.formDescription}>
          You have the option of monthly or yearly billing.
        </p>
      </Card>
    </>
  );
}
