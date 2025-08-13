import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../SimpleForm.css";

export default function Fase2() {
  const [text, setText] = useState("");
    const navigate = useNavigate();

  function handleClick() {
    if (text === "messi") {
        alert("Aserto, te amo pin.");
        navigate("/coe");
    } else {
      alert(`Errou, sua resposta: ${text}`);
    }
  }

  return (
    <div className="container">
      <img
        src="messi.jpg"
        alt="Imagem 2"
      />
      <input
        type="text"
        placeholder="Escreva algo aqui na página 2..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleClick}>Enviar</button>
    </div>
  );
}
