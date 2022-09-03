/**
 * useContext() - Pasarselo a componentes inferiores
 */

import React, { useState, useContext } from "react";
import Componente2 from "../components/Componente1";
export const miContexto = React.createContext(null);

/**
 * Dispone de un contexto que va a tener un valor que recibe desde el padre
 */
const Componente1 = () => {
  // Inicializa en null y se rellena con los datos del padre
  const state = useContext(miContexto);
  return (
    <div>
      <h1>El token es: {state.token}</h1>
      <Componente2></Componente2>
    </div>
  );
};

export default function MiComponenteConContexto() {
  const estadoInicial = { token: 12345667, sesion: 1 };

  const [sessionData, setSessionData] = useState(estadoInicial);

  function actualizarSession() {
    setSessionData({ token: "asdasdasd", sesion: sessionData.sesion + 1 });
  }

  return (
    <miContexto.Provider value={sessionData}>
      {/* Todo lo que este aquí dentro puede leer los datos de sesionData ademas si se actualiza los componentes de aquí dentro tambien lo actualizan */}
      <h1>Ejemplo de useState y useContext</h1>
      <Componente1 />
      <button onClick={actualizarSession}>Actualizar Sesión</button>
    </miContexto.Provider>
  );
}
