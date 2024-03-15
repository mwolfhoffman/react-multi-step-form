import "./App.css";
import SideBar from "./features/SideBar";
import MultiStepForm from "./features/MultiStepForm/components";
import { FormStateContextProvider } from "./features/MultiStepForm/context/FormStateContext";

function App() {
  return (
    <>
      <FormStateContextProvider>
        <SideBar />
        <MultiStepForm />
      </FormStateContextProvider>
    </>
  );
}

export default App;
