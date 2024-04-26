import { useFormStateContext } from "../../MultiStepForm/context/FormStateContext";

function StepTracker(){

    const { steps, currentStepIndex } = useFormStateContext();

return(
    <div className="flex flex-col space-y-10 text-alabaster bg-hero-desktop bg-center bg-cover h-screen w-64 m-4 rounded-lg">
       <div className="p-10">
            {steps.map((step, idx) => (
                <div key={idx} className={`${currentStepIndex === idx ? 'bg-pastelBlue text-marineBlue' : ''} m-10 w-8 h-8 border border-white-500 rounded-full flex items-center justify-center`}>
                    <div>
                        {idx + 1}
                    </div>
                    <div>
                        Step {idx +1 }
                    </div>
            </div>
        ))}
      </div>
    </div>)
}

export default StepTracker