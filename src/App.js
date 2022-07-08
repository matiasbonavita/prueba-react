import "./App.css";
import Sliders from "./components/Sliders/Sliders";
import React from 'react'

 

function App() {
  return (
    <>
      <div className="appContainer">
        <div className="slidersAndButtonsContainer">
        <h1>Simulá tu crédito</h1>
        <Sliders/>
        </div>
      </div>
    </>
  );
}

export default App;
