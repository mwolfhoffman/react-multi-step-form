import { FormEvent, useEffect } from 'react'
import PersonalInfoStep from './PersonalInfoStep'
import SelectPlanStep from './SelectPlanStep'
import AddOnsStep from './AddOnsStep'
import FinishingUpStep from './FinishingUpStep'
import { useFormStateContext } from '../context/FormStateContext'
import FormActions from './FormActions'
import Card from '../../Card'
import personalInfoSchema from '../validations/personalInfo'
import { ValidationError } from 'yup'
export default function MultiStepForm() {
  const {
    setSteps,
    steps,
    currentStepIndex,
    step,
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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (currentStepIndex === 0) {
      console.log('here')
      const formData = {
        name: e.target.name.value,
        email: e.target.email.value,
        phone: e.target.phone.value,
      }
      console.log(formData)
      personalInfoSchema
        .validate(formData, { abortEarly: false })
        .then(() => next()) // Proceed to the next step
        .catch((err: ValidationError) => {
          console.error(err)
          console.log(err?.inner)
          const newErrors = {}
          err?.inner?.forEach((e: ValidationError) => {
            newErrors[e.path] = e.message
          })
          return setFormErrors((curr) => ({ ...curr, ...newErrors }))
        })
    } else if (currentStepIndex !== steps.length - 1) {
      return next()
    } else {
      //  TODO
      console.log('submitting')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="">
        <Card>{step?.component}</Card>
        <div className="fixed bottom-0 flex justify-between p-4 w-1/2">
          <FormActions />
        </div>
      </div>
    </form>
  )
}
