/**
 * useEffect - Cada vez que hay un cambio en el estado del componente se ejecuta aquello que este en el useEffect
 * useRef - Crea una referencia con useRef() para asociar una variable con un elemento del DOM del componente (vista HTML)
 */

import React, { useState, useEffect, useRef } from "react";

export default function Ejemplo2() {
  const [contador1, setContador1] = useState(0);

  const [contador2, setContador2] = useState(0);

  const miRef = useRef();

  function incrementar1() {
    setContador1(contador1 + 1);
  }

  function incrementar2() {
    setContador2(contador2 + 1);
  }

  // Caso 1 - Ejecutar siempre que cambie algo
  // useEffect(() => {
  //   console.log("cambio en el estado del componente");
  //   console.log("Mostrando referencia a elemento del DOM");
  //   console.log(miRef);
  // });

  // Caso 2 - Ejecutar solamente cuando cambie el contador 1
  // useEffect(() => {
  //   console.log("cambio en el estado del contador 1");
  //   console.log("Mostrando referencia a elemento del DOM");
  //   console.log(miRef);
  // }, [contador1]);

  // Caso 2 - Ejecutar solamente cuando cambie el contador 1 o el contador2
  useEffect(() => {
    console.log("cambio en el estado del contador 1 / contador 2");
    console.log("Mostrando referencia a elemento del DOM");
    console.log(miRef);
  }, [contador1, contador2]);

  return (
    <div>
      <h1>****Ejemplo de useState(), useEffect(), useRef()****</h1>
      <h2>Contador1: {contador1}</h2>
      <h2>Contador2: {contador2}</h2>
      {/* Elemento referenciado */}
      <h4 ref={miRef}>Ejemplo de elemento referenciado</h4>
      <div>
        <button onClick={incrementar1}>Incrementar Contador 1</button>
        <button onClick={incrementar2}>Incrementar Contador 2</button>
      </div>
    </div>
  );
}
