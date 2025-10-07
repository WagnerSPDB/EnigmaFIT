import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/fases.css";
import estrelaImg from "../assets/star.png";
import fase0 from "../assets/codigomorse0.jpg";
import LoadingOverlay from "../components/Loading";

export default function Fase0() {
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
        body: JSON.stringify({ fase: "fase0", resposta: text })
      });

      const data = await res.json();

      if (data.ok) {
        alert("Resposta correta, boa sorte!");
        localStorage.setItem("ultimaFaseConcluida", "0");
        navigate("/fase1");
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
    if (e.key === "Enter") handleClick();
  }

  return (
    <div className="fase-container">
      <LoadingOverlay show={loading} />

      <img src={estrelaImg} alt="estrela" className="icon-top" />

      <div className="card">
        <img src={fase0} alt="Fase 0" className="card-img" />
      </div>

      <div className="info-box">
        <div className="fase-num">0</div>
        <p>Samuel Finley Breese</p>
      </div>

      <div className="input-area">
        <input
          type="text"
          placeholder="Resposta..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={loading}
        />
        <button onClick={handleClick} disabled={loading}>
          {loading ? "Verificando..." : "OK"}
        </button>
      </div>
    </div>
  );

}
