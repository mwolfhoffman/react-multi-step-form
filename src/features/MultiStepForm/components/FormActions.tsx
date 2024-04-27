import { useFormStateContext } from '../context/FormStateContext'

function FormActions() {
  const { formErrors, back, steps, currentStepIndex } = useFormStateContext()

  return (
    <>
      {currentStepIndex !== 0 && (
        <button
          type="button"
          className={`border border-coolGray rounded-lg bg-lightGray text-marineBlue px-4 py-2 ${currentStepIndex === 0 ? 'hidden' : 'block'}`}
          onClick={back}
        >
          Go Back
        </button>
      )}
      <button
        type="submit"
        className="border border-marineBlue rounded-lg bg-purplishBlue text-alabaster px-4 py-2"
        disabled={!!Object.values(formErrors).find((x) => x)}
      >
        {currentStepIndex === steps.length - 1 ? 'Confirm' : 'Next Step'}
      </button>
    </>
  )
}

export default FormActions