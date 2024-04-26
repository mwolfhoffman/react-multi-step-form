import MultiStepForm from "../../MultiStepForm/components";
import { useFormStateContext } from "../../MultiStepForm/context/FormStateContext";

function MobileLayout() {
  //  TODO: show current step 
  const { steps, currentStepIndex } = useFormStateContext();

  return (
    <div className="h-screen flex flex-col">
      <div className="flex justify-center items-center text-alabaster bg-hero-mobile bg-center bg-cover h-40">
        {steps.map((step, idx) => (
          <div key={idx} className={`${currentStepIndex === idx ? 'bg-pastelBlue text-marineBlue' : ''} mx-4 w-8 h-8 border border-white-500 rounded-full  flex items-center justify-center`}>
            {idx + 1}
          </div>
        ))}
      </div>
      <div className="flex-grow bg-white px-6">
          <MultiStepForm />
      </div>
    </div>
  );
}

export default MobileLayout;
