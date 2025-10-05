import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/home.css";
import logo from "../assets/logo.png";
import LoadingOverlay from "../components/Loading";

export default function Final() {
  const navigate = useNavigate();
  const [nomeEquipe, setNomeEquipe] = useState("");
  const [loading, setLoading] = useState(false);
  const respostaFinal = localStorage.getItem("respostaFinal") || "";

  async function handleSalvar() {
    if (loading) return;
    if (!nomeEquipe.trim()) {
      alert("Digite o nome da equipe!");
      return;
    }
    if (!respostaFinal.trim()) {
      alert("Resposta final não encontrada!");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/verificar`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fase: "fase6", resposta: respostaFinal })
      });

      const data = await res.json();
      if (!data.ok) {
        alert("Resposta final incorreta! Não é possível registrar a equipe.");
        return;
      }

      await fetch(`${process.env.REACT_APP_API_URL}/finalizar`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ equipe: nomeEquipe, resposta: respostaFinal })
      });

      localStorage.setItem("nomeEquipe", nomeEquipe);
      alert("Equipe registrada com sucesso!");
      navigate("/");
    } catch (err) {
      console.error(err);
      alert("Erro ao salvar equipe!");
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") handleSalvar();
  }

  return (
    <div className="container">
      <LoadingOverlay show={loading} />

      <img src={logo} alt="Logo FIT" className="logo" />
      <h1 className="title">Parabéns!</h1>
      <p className="subtitle">Você concluiu todos os enigmas.</p>

      <div className="input-area">
        <input
          type="text"
          placeholder="Digite o nome da equipe..."
          value={nomeEquipe}
          onChange={(e) => setNomeEquipe(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={loading}
        />
        <button onClick={handleSalvar} disabled={loading}>
          {loading ? "Salvando..." : "OK"}
        </button>
      </div>
    </div>
  );
}
