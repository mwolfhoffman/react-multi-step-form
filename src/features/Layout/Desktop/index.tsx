import MultiStepForm from "../../MultiStepForm/components"

function DesktopLayout(){
    return (  
    <div className="flex">
    
    <aside className="w-1/3">
    <img src='../../assets/images/bg-sidebar-desktop.svg' className="h-auto" alt="mobile-hero-image"/>
      </aside>
      <main className="w-2/3">
        <MultiStepForm />
      </main>
      </div>)
}

export default DesktopLayout