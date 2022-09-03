import React, { useContext } from "react";
import MiComponenteConContexto, { miContexto } from "../hooks/Ejemplo3";

export default function Componente2() {
  const state = useContext(miContexto);
  return (
    <div>
      <h2>La sessión es: {state.sesion}</h2>
    </div>
  );
}
