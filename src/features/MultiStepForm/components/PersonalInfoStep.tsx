import { ChangeEvent } from 'react'
import { useFormStateContext } from '../context/FormStateContext'
import styles from './MultiStepForm.module.css'

export default function PersonalInfoStep() {
  const { formState, formErrors, setFormState, setFormErrors } =
    useFormStateContext()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormState((curr) => ({ ...curr, [name]: value }))
  }

  const handleFocus = (e: ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target
    setFormErrors((curr) => ({ ...curr, [name]: '' }))
  }

  return (
    <>
      <h1 className={styles.formTitle}>Personal info</h1>
      <p className={styles.formDescription}>
        Please provide your name, email, address, and phone number.
      </p>
      <label htmlFor="step1-name">Name</label>
      {formErrors.name && (
        <span className={styles.errorLabel}>{formErrors.name}</span>
      )}
      <input
        autoFocus
        id="step1-name"
        type="text"
        name="name"
        value={formState.name}
        onChange={handleChange}
        onFocus={handleFocus}
      />
      <br />
      <label htmlFor="step1-email">Email Address</label>
      {formErrors.email && (
        <span className={styles.errorLabel}>{formErrors.email}</span>
      )}{' '}
      <input
        id="step1-email"
        type="text"
        name="email"
        value={formState.email}
        onChange={handleChange}
        onFocus={handleFocus}
      />
      <br />
      <label htmlFor="step1-phone">Phone Number</label>
      {formErrors.phone && (
        <span className={styles.errorLabel}>{formErrors.phone}</span>
      )}
      <input
        type="tel"
        id="step1-phone"
        name="phone"
        value={formState.phone}
        onChange={handleChange}
        onFocus={handleFocus}
      />
      <br />
    </>
  )
}
