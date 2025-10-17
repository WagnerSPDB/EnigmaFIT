import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/fases.css";
import fase2 from "../assets/nationaldex2.mp4";
import FaseTemplate from "../components/FaseTemplate";


export default function Fase2() {
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    if (loading) return;
    setLoading(true);

    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/verificar`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fase: "fase2", resposta: text })
      });

      const data = await res.json();

      if (data.ok) {
        alert("Resposta correta!");
        localStorage.setItem("ultimaFaseConcluida", "2");
        navigate("/fase2b");
      } else {
        alert("Resposta incorreta, tente novamente.");
        setText("");
      }
    } catch (err) {
      console.error(err);
      alert("Erro ao verificar resposta");
    } finally {
      setLoading(false)
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleClick();
    }
  }

  return (
    <FaseTemplate
      faseNum="2"
      video={fase2}
      value={text}
      texto="Recep Tayyip Erdoğan"
      onChange={(e) => setText(e.target.value)}
      onKeyDown={handleKeyDown}
      onClick={handleClick}
      loading={loading}
    />
  );
}