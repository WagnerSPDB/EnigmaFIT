import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../SimpleForm.css";

export default function Fase1() {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  async function handleClick() {
    try {
      const res = await fetch("http://localhost:3001/verificar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fase: "fase1", resposta: text })
      });

      const data = await res.json();
      alert(data.msg);

      if (data.ok) {
        navigate("/fase2");
      }
    } catch (err) {
      console.error(err);
      alert("Erro ao verificar resposta");
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
        placeholder="Digite sua resposta..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleClick}>Enviar</button>
    </div>
  );
}
