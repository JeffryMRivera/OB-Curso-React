import React, { useEffect, useState } from "react";

const Clock = () => {
  const tick = () => {
    setState({
      ...state,
      fecha: new Date(),
      edad: state.edad + 1,
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      tick();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  const initialState = {
    fecha: new Date(),
    edad: 0,
    nombre: "Arnold",
    apellidos: "Mosquera Rivera",
  };

  const [state, setState] = useState(initialState);

  return (
    <div>
      <h2>
        Hora Actual:
        {state.fecha.toLocaleTimeString()}
      </h2>
      <h3>
        {state.nombre} {state.apellidos}
      </h3>
      <h1>Edad: {state.edad}</h1>
    </div>
  );
};

export default Clock;
