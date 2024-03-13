import { FormEvent } from "react";
import Card from "./Card";
import styles from "./MultiStepForm.module.css";
import Button from "./Button";

export default function MultiStepForm() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("submitting");
  };

  return (
    <>
      <Card>
        <h1 className={styles.formTitle}>Personal info</h1>
        <p className={styles.formDescription}>
          Please provide your name, email, address, and phone number.
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="step1-name">Name</label>
          <input id="step1-name" type="text" name="name" />
          <br />

          <label htmlFor="step1-email">Email Address</label>
          <input id="step1-email" type="email" name="email" />
          <br />

          <label htmlFor="step1-phone">Phone Number</label>
          <input type="phone" id="step1-phone" name="phone" />
          <br />

          <button className={`button ${styles.bottomRight}`}>Next Step</button>
        </form>
      </Card>
    </>
  );
}
