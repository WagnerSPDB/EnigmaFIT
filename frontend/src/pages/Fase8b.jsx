import { useNavigate } from 'react-router-dom';
import "./../styles/home.css";


export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>VANET</h1>
      <p>As redes ad-hoc veiculares (VANETs) são criadas aplicando os 
        princípios das redes ad-hoc móveis (MANETs) - a criação espontânea 
        de uma rede sem fio para troca de dados de veículo-para-veículo (V2V) - 
        para o domínio de veículos. VANETs foram mencionadas e introduzidas[1] 
        pela primeira vez em 2001 em aplicações "comunicação e rede ad-hoc móveis
         carro-para-carro", onde as redes podem ser formadas e as informações 
         podem ser transmitidas entre os carros. Foi demonstrado que as arquiteturas
          de comunicações veículo-para-veículo e veículo-para-estrada irão coexistir
           nas VANETs para fornecer segurança viária, navegação e outros serviços na estrada.
            As VANETs são uma parte fundamental do sistema de transporte inteligente (ITS).
             Às vezes, as VANETs são chamadas de redes inteligentes de transporte.</p>

        <button className="start-btn" onClick={() => navigate('/fase9')}>Prosseguir</button>
    </div>

  );
}