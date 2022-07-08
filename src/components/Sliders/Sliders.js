import React, { useState } from "react";
import ResultButtons from "../ResultButtons/ResultButtons";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './sliders.css'



function Sliders() {
  const [montoTotalValue, setMontoTotalValue] = useState(5000);

  const [plazoValue, setPlazoValue] = useState(3);

  //SLIDER DE MONTO TOTAL

  let sliderMontoHandleChange = (e) => {
    setMontoTotalValue(e);
  };

  let handleMontoInputChange = (e) => {
    setMontoTotalValue(e.target.value);
    setTimeout(() => {
      if (e.target.value > 50000) {
        setMontoTotalValue(50000);
        toast.error("El valor ingresado es mayor al valor maximo posible!");
      } else if (e.target.value < 5000) {
        setMontoTotalValue(5000);
        toast.error("El valor ingresado es menor al valor minimo posible!");
      }
    }, 900);
  };

  //SLIDER DE PLAZO

  let sliderPlazoHandleChange = (e) => {
    setPlazoValue(e);
  };

  let handlePlazoInputChange = (e) => {
    setPlazoValue(e.target.value);
    setTimeout(() => {
      if (e.target.value > 24) {
        setPlazoValue(24);
        toast.error("El valor ingresado es mayor al valor maximo posible!");
      } else if (e.target.value < 3) {
        setPlazoValue(3);
        toast.error("El valor ingresado es menor al valor minimo posible!");
      }
    }, 900);
  };

  return (
    <>
      <div className="slidersContainer">
        <div className="sliderOne">
          <div className="sliderContainer">
            <div className="sliderTitulo">MONTO TOTAL</div>
            <input
              className="sliderInput"
              type="number"
              value={montoTotalValue}
              onChange={handleMontoInputChange}
              min="5000"
              max="500000"
            ></input>
          </div>

          <Slider
            className="slider"
            min={5000}
            max={50000}
            onChange={sliderMontoHandleChange}
            value={montoTotalValue}
            dotStyle={{ opacity: 1, border:'none'}}
            trackStyle={{ backgroundColor: "#fff" }}
            railStyle={{ backgroundColor: "#fff" }}
            activeDotStyle={{ opacity: 1}}
            handleStyle={{
                opacity:1,
                backgroundColor: '#fff',
                border: '2px solid #fff',
              }}
          />
          <div className="sliderMinMax">
            <div>$ 5.000</div>
            <div>$ 50.000</div>
          </div>
        </div>

        <div className="sliderTwo">
          <div className="sliderContainer">
            <div className="sliderTitulo">PLAZO</div>
            <input
              className="sliderInput"
              type="number"
              value={plazoValue}
              onChange={handlePlazoInputChange}
              min="3"
              max="24"
            ></input>
          </div>

          <Slider
            className="slider"
            min={3}
            max={24}
            onChange={sliderPlazoHandleChange}
            value={plazoValue}
            dotStyle={{ opacity: 1, border:'none'}}
            trackStyle={{ backgroundColor: "#fff" }}
            railStyle={{ backgroundColor: "#fff" }}
            activeDotStyle={{ opacity: 1}}
            handleStyle={{
                opacity:1,
                backgroundColor: '#fff',
                border: '2px solid #fff',
              }}
          />
          <div className="sliderMinMax minMaxPlazo">
            <div>3</div>
            <div>24</div>
          </div>
        </div>
      </div>
      <ResultButtons monto={montoTotalValue} plazo={plazoValue} />
      <ToastContainer autoClose={2000} position="bottom-left" hideProgressBar={true} closeOnClick/>
    </>
  );
}

export default Sliders;
