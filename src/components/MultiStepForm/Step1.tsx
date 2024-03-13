import { ChangeEvent, FormEvent, useRef } from "react";
import Card from "../Card";
import styles from "./MultiStepForm.module.css";
import useMultistepForm from "./useMultiStepForm";

export default function Step1() {
  const formRef = useRef<HTMLFormElement>(null);
  const { currentStep, formData, setFormData, next } = useMultistepForm();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("FormData:", formData);
    console.log("submitting");
    next();
    console.log(currentStep);
  };

  return (
    <>
      <Card>
        <h1 className={styles.formTitle}>Personal info</h1>
        <p className={styles.formDescription}>
          Please provide your name, email, address, and phone number.
        </p>

        <form ref={formRef} className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="step1-name">Name</label>
          <input
            id="step1-name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <br />

          <label htmlFor="step1-email">Email Address</label>
          <input
            id="step1-email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <br />

          <label htmlFor="step1-phone">Phone Number</label>
          <input
            type="tel"
            id="step1-phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <br />

          <button type="submit" className={`button ${styles.bottomRight}`}>
            Next Step
          </button>
        </form>
      </Card>
    </>
  );
}
