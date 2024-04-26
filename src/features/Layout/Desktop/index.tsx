import MultiStepForm from "../../MultiStepForm/components"

function DesktopLayout(){
    return (  
    <div className="flex  bg-white ">
    
    <aside className="w-1/3 mt-6 ml-6 h-full">
      <img src='../../assets/images/bg-sidebar-desktop.svg' className="h-auto" alt="desktop-hero-image"/>
    </aside>
    
      <main className="pr-40 pl-20
      border-2 border-white p-15 w-3/4 mx-auto mt-10 rounded-lg
      ">
        <MultiStepForm />
      </main>
      </div>)
}

export default DesktopLayout