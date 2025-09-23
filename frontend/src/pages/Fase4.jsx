import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/fases.css";
import estrelaImg from "../assets/star.png";
import fase4 from "../assets/RickRiordan4.jpg";

export default function Fase4() {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  async function handleClick() {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/verificar`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fase: "fase4", resposta: text })
      });

      const data = await res.json();


      if (data.ok) {
        alert("Resposta correta! Fim de jogo!");
        localStorage.setItem("ultimaFaseConcluida", "4"); // salva progresso
        localStorage.setItem("respostaFinal", text); // salva a resposta correta
        navigate("/final");
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
    <div className="fase-container">
      <img src={estrelaImg} alt="estrela" className="icon-top" />

      <div className="card">
        <img src={fase4} alt="Fase 4" className="card-img" />
      </div>

      <div className="info-box">
        <div className="fase-num">4</div>
        <p>Resolva o enigma</p>
      </div>

      <div className="input-area">
        <input
          type="text"
          placeholder="Resposta..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleClick}>OK</button>
      </div>
    </div>
  );
}
