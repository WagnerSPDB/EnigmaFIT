import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/fases.css";
import fase1 from "../assets/fase1.jpg";
import FaseTemplate from "../components/FaseTemplate";

export default function Fase1() {
  const [loading, setLoading] = useState(false)
  const [text, setText] = useState("");
  const navigate = useNavigate();

  async function handleClick() {
    if (loading) return;
    setLoading(true);
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/verificar`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fase: "fase1", resposta: text })
      });

      const data = await res.json();


      if (data.ok) {
        alert("Resposta correta! Continue assim!");
        localStorage.setItem("ultimaFaseConcluida", "1");
        navigate("/fase2");
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
      faseNum="1"
      imagem={fase1}
      value={text}
      onChange={(e) => setText(e.target.value)}
      onKeyDown={handleKeyDown}
      onClick={handleClick}
      loading={loading}
    />
  );
}
