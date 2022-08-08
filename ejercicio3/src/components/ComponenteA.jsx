import React from "react";
import PropTypes from "prop-types";
import { Contacto } from "../models/contacto.class";
import ComponenteB from "./ComponenteB";

const ComponenteA = (props) => {
  return (
    <div>
      <h1>Contacto</h1>
      <h3>Nombre: {props.contacto.nombre + " " + props.contacto.apellido}</h3>
      <h3>Email: {props.contacto.email}</h3>
      <ComponenteB conectado={props.contacto.conectado} />
    </div>
  );
};

ComponenteA.propTypes = {
  contacto: PropTypes.instanceOf(Contacto),
};

export default ComponenteA;
