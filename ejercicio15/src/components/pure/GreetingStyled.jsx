import React, { useState } from "react";

const loggedStyle = {
  color: "blue",
};

const unloggedStyle = {
  color: "tomato",
  fontWeight: "bold",
};

const GreetingStyled = (props) => {
  const [logged, setLogged] = useState(false);

  return (
    <div style={logged ? loggedStyle : unloggedStyle}>
      {logged ? <p>Hola, {props.name}</p> : <p>Por favor, Logueate</p>}

      <button className="btn btn-primary" onClick={() => setLogged(!logged)}>
        {logged ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default GreetingStyled;
