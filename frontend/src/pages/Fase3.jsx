import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../SimpleForm.css";

export default function Fase1() {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  function handleClick() {
    if (text === "mount") {
        alert("ACABOSE Voce venceu...");
        navigate("/");
    } else {
      alert(`Errou, sua resposta: ${text}`);
    }
  }

  // Função para capturar o Enter
  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleClick();
    }
  }

  return (
    <div className="container">
      <img
        src="mason.jpg"
        alt="Imagem 1"
      />
      <input
        type="text"
        placeholder="Escreva algo aqui..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}  // Adicionando o evento de pressionar tecla
      />
      <button onClick={handleClick}>Enviar</button>
    </div>
  );
}
