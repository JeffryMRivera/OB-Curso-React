import React, { useRef } from "react";

const Child = ({ name, send, update }) => {
  const messageRef = useRef("");
  const nameRef = useRef("");

  function pressButton() {
    const text = messageRef.current.value;
    alert(`Text in input: ${text}`);
  }

  function pressButtonParams(text) {
    alert(`Text: ${text}`);
  }

  function submitName(e) {
    e.preventDefault();
    update(nameRef.current.value);
  }

  return (
    <div style={{ background: "cyan", padding: "30px" }}>
      <p
        onMouseOver={() => {
          console.log("On Mouse Over");
        }}
      >
        Hola {name} !
      </p>
      <button onClick={() => console.log("Botón 1 pulsado")}>Botón 1</button>
      <button onClick={pressButton}>Botón 2</button>
      <button onClick={() => pressButtonParams("Hola")}>Botón 3</button>
      <input
        ref={messageRef}
        placeholder="Insert a text"
        onFocus={(e) => console.log("Foco " + e.target.value)}
        onBlur={(e) => console.log("Blur " + e.target.value)}
        onChange={(e) => console.log("Change " + e.target.value)}
        onCopy={(e) => console.log("Copy " + e.target.value)}
        onPaste={(e) => console.log("Paste " + e.target.value)}
      />
      <button onClick={() => send(messageRef.current.value)}>
        SendMessage Father
      </button>

      <div style={{ marginTop: "20px" }}>
        <form onSubmit={submitName}>
          <input ref={nameRef} type="text" placeholder="New name" />
          <button type="submit">Update Name</button>
        </form>
      </div>
    </div>
  );
};

export default Child;
