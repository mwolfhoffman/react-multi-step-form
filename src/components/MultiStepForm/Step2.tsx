import { FormEvent } from "react";
import Card from "../Card";
import styles from "./MultiStepForm.module.css";

export default function Step2() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <Card>
        <h1 className={styles.formTitle}>Select your plan</h1>
        <p className={styles.formDescription}>
          You have the option of monthly or yearly billing.
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <button className={`button ${styles.bottomLeft}`}>Go Back</button>
          <button className={`button ${styles.bottomRight}`}>Next Step</button>
        </form>
      </Card>
    </>
  );
}
