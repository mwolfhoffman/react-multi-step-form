import { useFormStateContext } from '../../MultiStepForm/context/FormStateContext'

function StepTracker() {
  const { steps, currentStepIndex } = useFormStateContext()

  return (
    <div className="flex justify-center items-center text-alabaster bg-hero-mobile bg-center bg-cover h-40">
      {steps.map((step, idx) => (
        <div
          key={idx}
          className={`${currentStepIndex === idx ? 'bg-pastelBlue text-marineBlue' : ''} mx-4 w-8 h-8 border border-white-500 rounded-full  flex items-center justify-center`}
        >
          {idx + 1}
        </div>
      ))}
    </div>
  )
}

export default StepTracker
