import "./App.css";
import { useState } from "react";
import ContactComponent from "./components/ContactComponent";
import ContactForm from "./components/ContactForm";

function App() {
  const [contactos, setContactos] = useState([
    { nombre: "Lizeth Escobar", correo: "liescoten@gmail.com", estado: false },
    {
      nombre: "Jeffry Mosquera",
      correo: "jeffrymr92@gmail.com",
      estado: true,
    },
    {
      nombre: "Arnold Mosquera",
      correo: "arnoldmosquera@datecsa.com",
      estado: false,
    },
  ]);

  const removeContacto = (contacto) => {
    const index = contactos.indexOf(contacto);
    const temp = [...contactos];
    temp.splice(index, 1);
    setContactos(temp);
  };

  const addContacto = (contacto) => {
    const temp = [...contactos];
    temp.push(contacto);
    setContactos(temp);
  };

  const changeStatus = (contacto) => {
    const index = contactos.indexOf(contacto);
    const temp = [...contactos];
    console.log(temp);
    console.log(temp[index]);
    temp[index].estado = !temp[index].estado;
    setContactos(temp);
  };

  return (
    <div className="App pt-5">
      <div>
        <div className="col-12">
          <div className="card">
            <div className="card-header p-3">
              <h5>Contactos</h5>
            </div>
            <div
              className="card-body"
              style={{ position: "relative", height: "400px" }}
              data-mdb-perfect-scrollbar="true"
            >
              <table>
                <thead>
                  <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Email</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {contactos.map((contacto, index) => {
                    return (
                      <ContactComponent
                        key={index}
                        contacto={contacto}
                        change={changeStatus}
                        remove={removeContacto}
                      />
                    );
                  })}
                </tbody>
              </table>
            </div>

            <ContactForm add={addContacto}></ContactForm>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
