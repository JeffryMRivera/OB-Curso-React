import logo from "./logo.svg";
import "./App.css";
import Saludo from "./components/pure/saludo";
import SaludoF from "./components/pure/saludoF";
import TaskListComponent from "./components/container/task_list";
import Ejemplo1 from "./hooks/Ejemplo1";
import Ejemplo2 from "./hooks/Ejemplo2";
import MiComponenteConContexto from "./hooks/Ejemplo3";
import Ejemplo4 from "./hooks/Ejemplo4";
import GreetingStyled from "./components/pure/GreetingStyled";
import Father from "./components/container/father";
import OpcionalRender from "./components/pure/OpcionalRender";
import LoginFormik from "./components/pure/forms/LoginFormik";
import RegisterFormik from "./components/pure/forms/RegisterFormik";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      {/* <img src={logo} className="App-logo" alt="logo" /> */}

      {/* Componente Saludo */}
      {/* <Saludo name="Arnold" /> */}
      {/* Componente Saludo Funcional */}
      {/* <SaludoF name="Arnold" /> */}
      {/* Componente Listado de Tareas */}
      {/* <TaskListComponent /> */}
      {/* Ejemplo de uso de HOOKS */}
      {/* <Ejemplo1 /> */}
      {/* <Ejemplo2 /> */}
      {/* <MiComponenteConContexto /> */}
      {/* <Ejemplo4 nombre="Jeffry">
          <h3>Contenido del children</h3>
          <p>lorem ipsum dolor sit</p>
          <button>Prueba</button>
        </Ejemplo4> */}
      {/*  */}
      {/* <GreetingStyled name="Arnold" /> */}
      {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      {/* </header> */}

      <TaskListComponent />
      {/* Gestión de eventos */}
      {/* <Father /> */}
      {/* Ejemplo de renderizado condicional */}
      {/* <OpcionalRender /> */}
      {/* Ejemplo de Formik*/}
      {/* <LoginFormik></LoginFormik> */}
      {/* <RegisterFormik></RegisterFormik> */}
    </div>
  );
}

export default App;
