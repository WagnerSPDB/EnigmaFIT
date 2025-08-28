// src/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, faseAtual }) {
  const ultimaFase = parseInt(localStorage.getItem("ultimaFaseConcluida") || "-1");

  if (faseAtual > ultimaFase + 1) {
    alert("Você precisa completar a fase anterior primeiro!");
    return <Navigate to={`/fase${ultimaFase + 1}`} />;
  }

  return children;
}
