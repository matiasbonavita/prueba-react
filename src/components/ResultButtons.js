import React from "react";

function ResultButtons(props) {
  const { monto, plazo } = props;

  let cuentaCuotaFija = monto / plazo;
  
  return (
    <>
    <div className="cuotaFijaContainer">
    <div className="cuotaFijaResult">
      <div className="cuotaFijaText">CUOTA FIJA POR MES</div>
      <div className="cuotaFijaNumber">$ {cuentaCuotaFija.toLocaleString("es-AR", {maximumFractionDigits: 2})}</div>
    </div>
      <div className="buttonContainer">
        <button className="buttonCredito">OBTENÉ CRÉDITO</button>
        <button className="buttonCuotas">VER DETALLE DE CUOTAS</button>
      </div>
    </div>
      
    </>
  );
}

export default ResultButtons;
