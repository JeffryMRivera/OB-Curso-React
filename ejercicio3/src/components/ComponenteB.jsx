import React, { useState } from "react";
import PropTypes from "prop-types";
import { Contacto } from "../models/contacto.class";

const ComponenteB = ({ conectado }) => {
  const [estado, setEstado] = useState(conectado);

  const changeEstado = () => {
    setEstado(!estado);
  };

  return (
    <div>
      <h3>{estado ? "Contacto en Linea" : "Contacto No Disponible"}</h3>
      <button onClick={changeEstado}>Cambiar estado</button>
    </div>
  );
};

ComponenteB.propTypes = {
  contacto: PropTypes.bool,
};

export default ComponenteB;
