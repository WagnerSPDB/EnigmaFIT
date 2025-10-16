import React from "react";
import LoadingOverlay from "./Loading";
import estrelaImg from "../assets/star.png";

export default function FaseTemplate({
  faseNum,
  imagem,
  video,
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
        <img src={estrelaImg} alt="estrela" className="icon-top" />
      </div>

      <div className="card">
        {video ? (
          <video
            src={video}
            className="card-video"
            controls
            preload="metadata"
          >
            Seu navegador não suporta vídeo.
          </video>
        ) : (
          <img src={imagem} alt={`Fase ${faseNum}`} className="card-img" />
        )}
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
