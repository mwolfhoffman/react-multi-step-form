import MultiStepForm from "../../MultiStepForm/components"
import StepTracker from "./StepTracker"

function DesktopLayout(){
    return (  
    <div className="flex  bg-white ">
    
    <StepTracker/>
    
      <main className="pr-40 pl-20
      border-2 border-white p-15 w-3/4 mx-auto mt-10 rounded-lg
      ">
        <MultiStepForm />
      </main>
      </div>)
}

export default DesktopLayout