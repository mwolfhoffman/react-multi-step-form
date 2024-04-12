import "./App.css";
import useScreenWidth from "./hooks/useGetScreenWidth";
import MobileLayout from "./components/Layout/Mobile";
import DesktopLayout from "./components/Layout/Desktop";

function App() {
  const screenWidth = useScreenWidth()

  return (
    <>
      {screenWidth <768 ? <MobileLayout/> : <DesktopLayout/>}
    </>
  );
}

export default App;
