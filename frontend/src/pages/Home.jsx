// Home.js
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Bem-vindo ao Jogo de Perguntas!</h1>
      <p>Tente acertar todas as fases para vencer</p>
      <button onClick={() => navigate('/fase1')}>Começar</button>
    </div>
  );
}