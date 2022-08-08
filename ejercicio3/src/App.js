import logo from "./logo.svg";
import "./App.css";
import ComponenteA from "./components/ComponenteA";
import { Contacto } from "./models/contacto.class";

function App() {
  const contacto = new Contacto(
    "Arnold",
    "Mosquera",
    "jeffrymr92@gmail.com",
    true
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ComponenteA contacto={contacto} />
      </header>
    </div>
  );
}

export default App;
