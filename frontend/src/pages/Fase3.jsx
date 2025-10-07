import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/fases.css";
import fase3 from "../assets/biogolia3.jpg";
import FaseTemplate from "../components/FaseTemplate";

export default function Fase7() {
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
        body: JSON.stringify({ fase: "fase3", resposta: text })
      });

      const data = await res.json();


      if (data.ok) {
        alert("Resposta correta!");
        localStorage.setItem("ultimaFaseConcluida", "3");
        navigate("/fase4");
      } else {
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
      faseNum="3"
      imagem={fase3}
      value={text}
      texto="biogolia"
      onChange={(e) => setText(e.target.value)}
      onKeyDown={handleKeyDown}
      onClick={handleClick}
      loading={loading}
    />
  );
}
