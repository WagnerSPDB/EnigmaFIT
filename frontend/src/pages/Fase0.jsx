import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../SimpleForm.css";

export default function Fase1() {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  async function handleClick() {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/verificar`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fase: "fase0", resposta: text })
      });

      const data = await res.json();

      if (data.ok) {
        alert("Resposta correta, boa sorte!");
        localStorage.setItem("ultimaFaseConcluida", "0"); // salva progresso
        navigate("/fase1");
      } else{
        alert("Resposta incorreta, tente novamente.");
        setText(""); // Limpa o campo de texto se a resposta estiver errada
      }
    } catch (err) {
      console.error(err);
      alert("Erro ao verificar resposta");
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") handleClick();
  }

  return (
    <div className="container">
      <img src="codigomorse.jpg" alt="Imagem 1" />
      <p>Nosso enigma irá funcionar da seguinte maneira: teremos uma imagem e um campo para colocar a senha. 
        A senha deve ser extraída da imagem. Podemos baixar a imagem, o nome dela pode ter alguma dica.</p>
      <input
        type="text"
        placeholder="Digite sua resposta..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleClick}>Enviar</button>
    </div>
  );
}
