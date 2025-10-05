// src/components/LoadingOverlay.js
import React, { useEffect } from "react";
import loadingGif from "../assets/loading.gif"; // seu GIF
import "../styles/loading.css";

export default function LoadingOverlay({ show, message = "Carregando..." }) {
  useEffect(() => {
    // evita scroll da página enquanto o overlay estiver visível
    if (show) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [show]);

  if (!show) return null;

  return (
    <div className="loading-overlay" role="status" aria-live="polite" aria-busy="true">
      <div className="loading-box">
        <img src={loadingGif} alt={message} className="loading-gif" />
      </div>
    </div>
  );
}
