import { FormErrors } from ".";
import styles from "./MultiStepForm.module.css";

type UserFormData = {
  name: string;
  email: string;
  phone: string;
};

type PersonalInfoStepProps = UserFormData & {
  updateFields: (fields: Partial<UserFormData>) => void;
  formErrors: FormErrors;
};

export default function PersonalInfoStep({
  name,
  email,
  phone,
  updateFields,
  formErrors,
}: PersonalInfoStepProps) {
  return (
    <>
      <h1 className={styles.formTitle}>Personal info</h1>
      <p className={styles.formDescription}>
        Please provide your name, email, address, and phone number.
      </p>
      <label htmlFor="step1-name">Name</label>
      {formErrors["name"] && (
        <span className={styles.errorLabel}>{formErrors["name"]}</span>
      )}
      <input
        autoFocus
        id="step1-name"
        type="text"
        name="name"
        value={name}
        onChange={(e) => updateFields({ name: e.target.value })}
      />
      <br />
      <label htmlFor="step1-email">Email Address</label>
      {formErrors["email"] && (
        <span className={styles.errorLabel}>{formErrors["email"]}</span>
      )}{" "}
      <input
        id="step1-email"
        type="text"
        name="email"
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
      />
      <br />
      <label htmlFor="step1-phone">Phone Number</label>
      {formErrors["phone"] && (
        <span className={styles.errorLabel}>{formErrors["phone"]}</span>
      )}
      <input
        type="tel"
        id="step1-phone"
        name="phone"
        value={phone}
        onChange={(e) => updateFields({ phone: e.target.value })}
      />
      <br />
    </>
  );
}
