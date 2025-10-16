// server.js
const express = require("express");
const cors = require("cors");
const PLANILHA_URL = "https://script.google.com/macros/s/AKfycbyYLg4U52eAPBjhgwnXimLjlYx5iuyJ7-TkTUHwoh0m5O4yQJ9t-06AzGRWARtyajDR/exec";

const app = express();
app.use(cors());
app.use(express.json());


const respostas = {
  fase0: "fit2025",
  fase1: "berlim",
  fase2: "mqtt",
  fase3: "apolo",
  fase4: "familia",
  fase5: "iomt",
  fase6: "20140801",
  fase7: "fe",
  fase8: "vanet",
  fase9: "descartes",
  final: "fbmafi2fvd"
};


app.post("/verificar", (req, res) => {
  console.log("Recebido no backend:", req.body);

  const { fase, resposta } = req.body;

  if (!fase || !resposta) {
    return res.status(400).json({ ok: false, msg: "Fase e resposta são obrigatórias" });
  }

  const respostaCorreta = respostas[fase];
  const respostaUsuario = resposta.trim().toLowerCase();

  if (respostaCorreta && respostaCorreta.toLowerCase() === respostaUsuario) {
    return res.json({ ok: true });
  } else {
    return res.json({ ok: false });
  }
});


function formatarHorario() {
  return new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "short",
    timeStyle: "medium",
    timeZone: "America/Sao_Paulo"
  }).format(new Date());
}


app.post("/finalizar", async (req, res) => {
  const { equipe, resposta } = req.body;

  if (!equipe || !resposta) {
    return res.status(400).json({ ok: false, msg: "Equipe e resposta são obrigatórias" });
  }

  const respostaCorreta = respostas["final"];
  if (respostaCorreta.toLowerCase() !== resposta.trim().toLowerCase()) {
    return res.status(403).json({ ok: false, msg: "Resposta incorreta!" });
  }

  const horario = formatarHorario();

  try {
    await fetch(PLANILHA_URL, {
      method: "POST",
      body: JSON.stringify({ equipe, horario }),
      headers: { "Content-Type": "application/json" }
    });

    return res.json({ ok: true, msg: "Finalizado com sucesso!" });
  } catch (err) {
    console.error("Erro ao salvar na planilha:", err);
    return res.status(500).json({ ok: false, msg: "Erro ao salvar resultado" });
  }
});


const HOST = "0.0.0.0";
const PORT = process.env.PORT || 3001;
console.log("Porta do servidor:", process.env.PORT);

app.listen(PORT, HOST, () => {
  console.log(`Servidor rodando em http://${HOST}:${PORT}`);
});
