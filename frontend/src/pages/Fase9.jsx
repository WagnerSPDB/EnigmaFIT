import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/fases.css";
import fase9 from "../assets/sobrenome.gif";
import FaseTemplate from "../components/FaseTemplate";

export default function Fase9() {
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)

  async function handleClick() {
    if (loading) return;
    setLoading(true);

    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/verificar`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fase: "fase9", resposta: text })
      });

      const data = await res.json();


      if (data.ok) {
        alert("Resposta correta! Fim de jogo!");
        localStorage.setItem("ultimaFaseConcluida", "9");
        navigate("/final");
      }else{
        alert("Resposta incorreta, tente novamente.");
        setText("");
      }
    } catch (err) {
      console.error(err);
      alert("Erro ao verificar resposta");
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleClick();
    }
  }

  return (
  <FaseTemplate
      faseNum="9"
      imagem={fase9}
      value={text}
      texto="Fitcrateus"
      onChange={(e) => setText(e.target.value)}
      onKeyDown={handleKeyDown}
      onClick={handleClick}
      loading={loading}
    />
);
}
