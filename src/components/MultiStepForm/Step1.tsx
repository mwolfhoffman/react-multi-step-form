import FormStepWrapper from "./FormStepWrapper";
import styles from "./MultiStepForm.module.css";

type UserFormData = {
  name: string;
  email: string;
  phone: string;
};

type Step1Props = UserFormData & {
  updateFields: (fields: Partial<UserFormData>) => void;
};

export default function Step1({
  name,
  email,
  phone,
  updateFields,
}: Step1Props) {
  return (
    <FormStepWrapper>
      <h1 className={styles.formTitle}>Personal info</h1>
      <p className={styles.formDescription}>
        Please provide your name, email, address, and phone number.
      </p>

      <label htmlFor="step1-name">Name</label>
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
      <input
        id="step1-email"
        type="email"
        name="email"
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
      />
      <br />

      <label htmlFor="step1-phone">Phone Number</label>
      <input
        type="tel"
        id="step1-phone"
        name="phone"
        value={phone}
        onChange={(e) => updateFields({ phone: e.target.value })}
      />
      <br />
    </FormStepWrapper>
  );
}
