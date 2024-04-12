import MultiStepForm from "../../MultiStepForm"

function MobileLayout(){
    //  TODO: show current step 
    return (
    <div className="relative">
        <img src='../../assets/images/bg-sidebar-mobile.svg' className="w-full h-auto" alt="mobile-hero-image"/>
        <div className="absolute top-48 left-0 w-full z-10">
            <MultiStepForm  />
        </div>
      </div>
      )
}

export default MobileLayout