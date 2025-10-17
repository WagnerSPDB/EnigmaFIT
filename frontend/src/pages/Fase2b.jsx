import { useNavigate } from 'react-router-dom';
import "./../styles/home.css";

export default function Fase2b() {
    const navigate = useNavigate();

    return (
        <div className="container">
            <h1 className="title">MQTT</h1>
            <div className="text-box">
                <p>
                    O MQTT é um protocolo leve de comunicação entre máquinas. 
                    Ele envia mensagens de forma rápida e eficiente, mesmo com 
                    conexões instáveis. É muito usado em sensores e sistemas IoT
                     porque consome pouca energia e garante que os dados cheguem
                      ao destino certo.
                </p>
            </div>
            <button className="start-btn" onClick={() => navigate('/fase3')}>
                Prosseguir
            </button>
        </div>
    );
}
