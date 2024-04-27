import { FormEvent, useEffect } from 'react'
import PersonalInfoStep from './PersonalInfoStep'
import SelectPlanStep from './SelectPlanStep'
import AddOnsStep from './AddOnsStep'
import FinishingUpStep from './FinishingUpStep'
import FormStepWrapper from './FormStepWrapper'
import { FormErrors, useFormStateContext } from '../context/FormStateContext'
import FormActions from './FormActions'

export default function MultiStepForm() {
  const {
    setSteps,
    steps,
    currentStepIndex,
    step,
    formState,
    setFormErrors,
    next,
  } = useFormStateContext()

  useEffect(() => {
    setSteps([
      {
        component: <PersonalInfoStep />,
        description: 'Your Info',
      },
      {
        component: <SelectPlanStep />,
        description: 'Your Plan',
      },
      {
        component: <AddOnsStep />,
        description: 'Add-Ons',
      },
      {
        component: <FinishingUpStep />,
        description: 'Summary',
      },
    ])
  }, [])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    let newFormErrors: FormErrors
    if (currentStepIndex !== steps.length - 1) {
      newFormErrors = {
        name: formState.name.trim() === '' ? 'Name is required' : '',
        email:
          formState.email.trim() === '' ||
          !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
            formState.email.trim(),
          )
            ? 'Valid email is required'
            : '',
        phone: formState.phone.trim() === '' ? 'Phone is required' : '',
        billingPlan: '',
      }
      setFormErrors(newFormErrors)
      if (Object.values(newFormErrors).find((x) => x)) {
        return
      }
      return next() // Proceed to the next step
    }
    console.log('submitting')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="">
        <FormStepWrapper>{step?.component}</FormStepWrapper>
        <div className="fixed bottom-0 flex justify-between p-4 w-1/2">
          <FormActions />
        </div>
      </div>
    </form>
  )
}
