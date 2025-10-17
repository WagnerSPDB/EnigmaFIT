import { useNavigate } from 'react-router-dom';
import "./../styles/home.css";

export default function Fase8b() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1 className="title">VANET</h1>

      <div className="text-box">
        <p>
          A VANET é uma rede de comunicação entre veículos e
          urbana. Ela permite que carros troquem informações sobre
          trânsito, acidentes e condições da via em tempo real,
          ajudando a evitar colisões e a tornar o transporte mais
          inteligente e seguro.
        </p>
      </div>
      <button className="start-btn" onClick={() => navigate('/fase9')}>
        Prosseguir
      </button>
    </div>
  );
}
