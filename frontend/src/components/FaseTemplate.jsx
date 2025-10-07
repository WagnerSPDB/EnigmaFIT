import React from "react";
import LoadingOverlay from "./Loading";
import estrelaImg from "../assets/star.png";
import logoMarca from "../assets/logomarca.png";

export default function FaseTemplate({
  faseNum,
  imagem,
  texto = "Resolva o enigma",
  value,
  onChange,
  onKeyDown,
  onClick,
  loading
}) {
  return (
    <div className="fase-container">
      <LoadingOverlay show={loading} />

      <div className="icon-container">
        <img src={logoMarca} alt="logo esquerdo" className="icon-side" />
        <img src={estrelaImg} alt="estrela" className="icon-top" />
        <img src={logoMarca} alt="logo direito" className="icon-side" />
      </div>

      <div className="card">
        <img src={imagem} alt={`Fase ${faseNum}`} className="card-img" />
      </div>

      <div className="info-box">
        <div className="fase-num">{faseNum}</div>
        <p>{texto}</p>
      </div>

      <div className="input-area">
        <input
          type="text"
          placeholder="Resposta..."
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          disabled={loading}
        />
        <button onClick={onClick} disabled={loading}>
          {loading ? "Verificando..." : "OK"}
        </button>
      </div>
    </div>
  );
}
