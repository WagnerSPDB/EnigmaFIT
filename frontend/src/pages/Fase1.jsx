import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../SimpleForm.css";

export default function Fase2() {
  const [text, setText] = useState("");
    const navigate = useNavigate();

  function handleClick() {
    if (text === "cr7") {
        alert("SIIIIIIIIU!.");
        navigate("/camisiromigueixons");
    } else {
      alert(`Errou, sua resposta: ${text}`);
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleClick();
    }
  }

  return (
    <div className="container">
      <img
        src="cr7.jpg"
        alt="Imagem 1"
      />
      <input
        type="text"
        placeholder="Escreva algo aqui na página 1..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleClick}>Enviar</button>
    </div>
  );
}
