import React, { useEffect, useState } from "react";

export function ConvertirMonedas() {
  const [conversionRates, setConversionRates] = useState(null);
  const [montoOrigen, setMontoOrigen] = useState(1);
  const [monedaInicial, setMonedaInicial] = useState("USD");
  const [monedaDestino, setMonedaDestino] = useState("USD");

  useEffect(() => {
    fetch("https://v6.exchangerate-api.com/v6/7ea389ee331ec002749cd3bc/latest/USD")
      .then(response => response.json())
      .then(data => {
        setConversionRates(data.conversion_rates);
        setMonedaInicial(Object.keys(data.conversion_rates)[0]);
      })
      .catch(error => console.error("Error al obtener los datos de conversión:", error));
  }, []);

  const convertirMoneda = () => {
    if (!conversionRates) return "";
    const tasaConversion = conversionRates[monedaDestino];
    const montoConvertido = (montoOrigen * tasaConversion).toFixed(2);
    return `${montoConvertido} ${monedaDestino}`;
  };

  const cambiarMonedaInicial = (moneda) => {
    setMonedaInicial(moneda);
    setMontoOrigen(1);
  };

  const invertirMonedas = () => {
    // Intercambiar las monedas seleccionadas
    const temp = monedaInicial;
    setMonedaInicial(monedaDestino);
    setMonedaDestino(temp);
  };

  return (
    <div className="container">
      <h2 className="title">Convertidor de Monedas</h2>
      {conversionRates ? (
        <div>
          <div className="select-container">
            <select className="select" value={monedaInicial} onChange={e => cambiarMonedaInicial(e.target.value)}>
              {Object.keys(conversionRates).map(moneda => (
                <option key={moneda} value={moneda}>{moneda}</option>
              ))}
            </select>
            <button className="invert-button" onClick={invertirMonedas}>↔️</button>
            <select className="select" value={monedaDestino} onChange={e => setMonedaDestino(e.target.value)}>
              {Object.keys(conversionRates).map(moneda => (
                <option key={moneda} value={moneda}>{moneda}</option>
              ))}
            </select>
          </div>
          <div className="input-container">
            <input type="number" value={montoOrigen} onChange={e => setMontoOrigen(e.target.value)} />
          </div>
          <p className="result">Resultado: {convertirMoneda()}</p>
        </div>
      ) : (
        <p>Cargando datos de conversión...</p>
      )}
    </div>
  );
}



