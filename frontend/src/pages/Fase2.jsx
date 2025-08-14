import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../SimpleForm.css";

export default function Fase2() {
  const [text, setText] = useState("");
    const navigate = useNavigate();

  async function handleClick() {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/verificar`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fase: "fase2", resposta: text })
      });

      const data = await res.json();

      if (data.ok) {
        alert("Resposta correta! Você é um gênio!");
        localStorage.setItem("ultimaFaseConcluida", "2"); // salva progresso
        navigate("/fase3");
      }else{
        alert("Resposta incorreta, tente novamente.");
        setText(""); // Limpa o campo de texto se a resposta estiver errada
      }
    } catch (err) {
      console.error(err);
      alert("Erro ao verificar resposta");
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
        src="messi.jpg"
        alt="Imagem 2"
      />
      <input
        type="text"
        placeholder="Escreva algo aqui na página 2..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleClick}>Enviar</button>
    </div>
  );
}
