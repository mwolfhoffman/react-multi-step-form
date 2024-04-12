import MultiStepForm from "../../MultiStepForm/components"
import { useFormStateContext } from "../../MultiStepForm/context/FormStateContext"

function MobileLayout(){
    //  TODO: show current step 
    const { steps, currentStepIndex } = useFormStateContext()
    console.log(currentStepIndex, steps)

    return (
    <div className="relative">
        <img src='../../assets/images/bg-sidebar-mobile.svg' className="w-full h-auto" alt="mobile-hero-image"/>
        <div className="flex justify-center absolute top-8 right-16 text-white">
            {steps.map((step,idx)=>(
                <div className={`${currentStepIndex === idx? 'bg-red-500': ''} mx-4
                 w-8 h-8 border border-white-500 rounded-full text-center`}>
                    {idx + 1}
                </div>
            ))}
        </div>
        <div className="absolute top-48 left-0 w-full z-10">
            <MultiStepForm  />
        </div>
      </div>
      )
}

export default MobileLayout