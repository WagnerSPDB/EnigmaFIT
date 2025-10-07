import { useNavigate } from 'react-router-dom';
import "./../styles/home.css";
import logo from '../assets/logo.png';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <img src={logo} alt="Logo FIT" className="logo" />
      <div>
        <h1 className="title">Enigmas <br />FIT</h1>
        <h3> Realização: Marca </h3>
      </div>
      <button className="start-btn" onClick={() => navigate('/fase0')}>
        Começar
      </button>
    </div>

  );
}