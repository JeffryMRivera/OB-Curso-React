import React, { useState } from "react";

const ContactComponent = ({ contacto, change, remove }) => {
  const status = () => {
    return contacto.estado ? (
      <span className="badge rounded-pill bg-success">Conectado</span>
    ) : (
      <span className="badge rounded-pill bg-danger">Desconectado</span>
    );
  };

  const labelStatusChange = () => {
    return contacto.estado ? (
      <i
        className="bi bi-power"
        style={{ color: "red", cursor: "pointer" }}
        onClick={() => change(contacto)}
      ></i>
    ) : (
      <i
        className="bi bi-power"
        style={{ color: "green", cursor: "pointer" }}
        onClick={() => change(contacto)}
      ></i>
    );
  };
  return (
    <tr className="fw-normal">
      <th>
        <span className="ms-2">{contacto.nombre}</span>
      </th>
      <td className="align-middle">
        <span>{contacto.correo}</span>
      </td>
      <td className="align-middle">
        <span>{status()}</span>
      </td>
      <td className="align-middle">
        {labelStatusChange()}
        <i
          className="bi-trash task-action"
          onClick={() => remove(contacto)}
          style={{ color: "tomato", cursor: "pointer" }}
        ></i>
      </td>
    </tr>
  );
};

export default ContactComponent;
