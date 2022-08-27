import React, { useRef } from "react";

const ContactForm = ({ add }) => {
  const nombreRef = useRef("");
  const correoRef = useRef("");

  function addContacto(e) {
    e.preventDefault();
    if (nombreRef.current.value == "") {
      alert("Ingrese un nombre");
      return;
    }
    if (correoRef.current.value == "") {
      alert("Ingrese un nombre");
      return;
    }
    const newContact = {
      nombre: nombreRef.current.value,
      correo: correoRef.current.value,
      estado: false,
    };
    add(newContact);
    nombreRef.current.value = "";
    correoRef.current.value = "";
  }

  return (
    <div>
      <form onSubmit={addContacto}>
        <h2>Contacto Nuevo: </h2>
        <input
          ref={nombreRef}
          placeholder="Nombre"
          className="form-control mb-2"
          type="text"
          name="nombre"
        />
        <input
          ref={correoRef}
          placeholder="Email contacto"
          className="form-control mb-2"
          type="email"
          name="correo"
        />
        <button type="submit" className="btn btn-success rounded-pill">
          Agregar Contacto
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
