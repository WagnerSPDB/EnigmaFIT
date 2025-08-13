import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../SimpleForm.css";

export default function Fase1() {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  async function handleClick() {
    try {
      const res = await fetch("http://localhost:5000/check-answer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answer: text })
      });

      const data = await res.json();

      if (data.correct) {
        alert("SIIIIIIIIIIU! Redirecionando para a próxima fase...");
        navigate(data.nextRoute);
      } else {
        alert(`Errou, sua resposta: ${text}`);
      }
    } catch (err) {
      console.error("Erro ao validar resposta:", err);
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") handleClick();
  }

  return (
    <div className="container">
      <img src="cr7.jpg" alt="Imagem 1" />
      <input
        type="text"
        placeholder="Escreva algo aqui..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleClick}>Enviar</button>
    </div>
  );
}
