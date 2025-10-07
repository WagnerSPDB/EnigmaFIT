import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/home.css";
import logo from "../assets/logo.png";
import LoadingOverlay from "../components/Loading";

export default function Final() {
  const navigate = useNavigate();
  const [nomeEquipe, setNomeEquipe] = useState("");
  const [respostaFinal, setRespostaFinal] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSalvar() {
    if (loading) return;
    if (!nomeEquipe.trim()) {
      alert("Digite o nome da equipe!");
      return;
    }
    if (!respostaFinal.trim()) {
      alert("Digite a resposta final!");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/verificar`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fase: "final", resposta: respostaFinal })
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

      <p>A resposta final é a junção do primeiro caractere
         de cada uma das respostas das fases, na ordem, 
         da fase 0 até a fase 6.<br></br>Exemplo: se as respostas forem "casa", "bola", "faca",
         a resposta final será "cbf".</p>
      
      <div className="input-area-resposta">
        <input
          type="text"
          placeholder="Resposta Final"
          value={respostaFinal}
          onChange={(e) => setRespostaFinal(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={loading}
        />
      </div>
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
