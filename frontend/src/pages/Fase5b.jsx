import { useNavigate } from 'react-router-dom';
import "./../styles/home.css";

export default function Fase2b() {
    const navigate = useNavigate();

    return (
        <div className="container">
            <h1 className="title">IOMT</h1>
            <div className="text-box">
                <p>
                    A IoMT é uma rede de dispositivos médicos conectados, como sensores,
                    relógios inteligentes e equipamentos hospitalares que coletam e
                    enviam dados em tempo real. Essa tecnologia permite monitorar
                    pacientes à distância e tomar decisões mais rápidas e seguras,
                    integrando saúde e internet..
                </p>
            </div>
            <button className="start-btn" onClick={() => navigate('/fase6')}>
                Prosseguir
            </button>
        </div>
    );
}
