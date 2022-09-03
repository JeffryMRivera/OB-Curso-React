import React, { useState } from "react";

const Ejemplo1 = () => {
  const valorInicial = 0;

  const personaInicial = {
    nombre: "Arnold",
    email: "jeffrymr92@gmail.com",
  };

  const [contador, setContador] = useState(valorInicial);
  const [persona, setPersona] = useState(personaInicial);

  /**
   * Actualizar el estado privado que contiene el contador
   */
  function incrementarContador() {
    setContador(contador + 1);
  }

  /**
   * Funcion para acutalizar el estado de persona en el componente
   */
  function actualizarPersona() {
    setPersona({ nombre: "Pepe", email: "pepe@gmail.com" });
  }

  return (
    <div>
      <h1>****Ejemplo de useState()****</h1>
      <h2>Contador: {contador}</h2>
      <h2>Datos de la Persona</h2>
      <h3>Nombre: {persona.nombre}</h3>
      <h3>Email: {persona.email}</h3>
      <div>
        <button onClick={incrementarContador}>Incrementar Contador</button>
        <button onClick={actualizarPersona}>Actualizar Persona</button>
      </div>
    </div>
  );
};

export default Ejemplo1;
