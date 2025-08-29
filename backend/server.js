// server.js
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json()); // permite receber JSON

// Dicionário de respostas
const respostas = {
  fase0: "fit2025",
  fase1: "cr7",
  fase2: "messi",
  fase3: "neymar",
  fase4: "familia"
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
    return res.json({ ok: true });
  } else {
    return res.json({ ok: false });
  }
});


const HOST = "0.0.0.0";
// Usa a porta do Render ou 3001 localmente
const PORT = process.env.PORT || 3001;
console.log("Porta do servidor:", process.env.PORT);

app.listen(PORT, HOST, () => {
  console.log(`Servidor rodando em http://${HOST}:${PORT}`);
});
