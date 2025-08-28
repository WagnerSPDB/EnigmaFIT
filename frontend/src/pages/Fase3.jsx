import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../SimpleForm.css";

export default function Fase3() {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  async function handleClick() {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/verificar`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fase: "fase3", resposta: text })
      });

      const data = await res.json();


      if (data.ok) {
        alert("Resposta correta! Final de desafio!");
        localStorage.setItem("ultimaFaseConcluida", "3"); // salva progresso
        navigate("/fase4");
      }else{
        alert("Resposta incorreta, tente novamente.");
        setText(""); // Limpa o campo de texto se a resposta estiver errada
      }
    } catch (err) {
      console.error(err);
      alert("Erro ao verificar resposta");
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
        src="neymar.jpg"
        alt="Imagem 1"
      />
      <p>Senha: neymar</p>
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
