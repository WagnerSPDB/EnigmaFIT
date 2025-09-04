import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../SimpleForm.css";

export default function Fase7() {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Chalé";
  }, []);

  async function handleClick() {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/verificar`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fase: "fase7", resposta: text })
      });

      const data = await res.json();


      if (data.ok) {
        alert("Resposta correta!");
        localStorage.setItem("ultimaFaseConcluida", "7"); // salva progresso
        navigate("/");
      }else{
        alert("Resposta incorreta, tente novamente.");
        setText(""); // Limpa o campo de texto se a resposta estiver errada
      }
    } catch (err) {
      console.error(err);
      alert("Erro ao verificar resposta");
    }
  }

  // Função para capturar o Enter
  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleClick();
    }
  }

  return (
    <div className="container">
      <img
        src="RickRiordan.jpg"
        alt="Imagem 1"
      />
      <input
        type="text"
        placeholder="Escreva algo aqui..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}  // Adicionando o evento de pressionar tecla
      />
      <button onClick={handleClick}>Enviar</button>
    </div>
  );
}
