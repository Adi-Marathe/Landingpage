import React from "react";
import Landingpage from './Pages/Landingpage/Landingpage';
import { DarkModeProvider } from "./context/DarkModeContext";

function App() {
  return (
    <>
      <DarkModeProvider>
        <Landingpage />
      </DarkModeProvider>
    </>
  );
}

export default App;
