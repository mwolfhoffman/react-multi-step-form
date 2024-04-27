import MultiStepForm from '../../MultiStepForm/components'
import StepTracker from './StepTracker'

function MobileLayout() {
  return (
    <div className="h-screen flex flex-col">
      <StepTracker />
      <div className="flex-grow bg-white px-6">
        <MultiStepForm />
      </div>
    </div>
  )
}

export default MobileLayout
