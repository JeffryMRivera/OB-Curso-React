import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState({
    width: "255px",
    height: "255px",
    backgroundColor: "#000000",
    borderRadius: "50%",
  });
  const [loop, setLoop] = useState(false);

  const generarColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const newColor = {
      ...color,
      backgroundColor: `rgb(${red},${green},${blue})`,
    };
    setColor(newColor);
  };

  const mouseOver = () => {
    setLoop(setInterval(generarColor, 100));
  };

  const mouseLeave = () => clearInterval(loop);

  const doubleClick = () => clearInterval(loop);

  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        style={color}
        onMouseOver={mouseOver}
        onMouseLeave={mouseLeave}
        onDoubleClick={doubleClick}
      ></div>
    </div>
  );
}

export default App;
