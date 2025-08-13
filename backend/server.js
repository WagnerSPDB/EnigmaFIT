// server.js
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json()); // permite receber JSON

// Dicionário de respostas
const respostas = {
  fase1: "cr7",
  fase2: "messi",
  fase3: "mount"
};

// Endpoint para verificar resposta
app.post("/verificar", (req, res) => {
  console.log("Recebido no backend:", req.body); // debug

  const { fase, resposta } = req.body;

  if (!fase || !resposta) {
    return res.status(400).json({ ok: false, msg: "Fase e resposta são obrigatórias" });
  }

  // Pega a resposta correta do dicionário
  const respostaCorreta = respostas[fase];

  // Normaliza a resposta do usuário: remove espaços e coloca em minúsculas
  const respostaUsuario = resposta.trim().toLowerCase();

  if (respostaCorreta && respostaCorreta.toLowerCase() === respostaUsuario) {
    return res.json({ ok: true, msg: "Resposta correta!" });
  } else {
    return res.json({ ok: false, msg: "Resposta errada!" });
  }
});


// Inicializa servidor
const PORT = 3001;
app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
