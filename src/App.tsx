import "./App.css";
import DesktopLayout from "./features/Layout/Desktop";
import MobileLayout from "./features/Layout/Mobile";
import { FormStateContextProvider } from "./features/MultiStepForm/context/FormStateContext";
import useScreenWidth from "./hooks/useGetScreenWidth";

function App() {
  const screenWidth = useScreenWidth()

  return (
    <>
    <FormStateContextProvider>
      {screenWidth <768 ? <MobileLayout/> : <DesktopLayout/>}
      </FormStateContextProvider>
    </>
  );
}

export default App;
