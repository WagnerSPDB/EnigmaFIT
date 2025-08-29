# 🚀 Tutorial para Rodar o Projeto React + Node.js

Este projeto é composto por um **frontend em React (SPA)** servido via **Nginx** e um **backend em Node.js com Express**.  
Você pode rodá-lo de duas formas:

- 💻 **Localmente, sem Docker**
- 🐳 **Utilizando Docker e Docker Compose**

---

## 💻 Rodando Localmente (Precisa ter o Node instalado)

### 1. Clone o repositório e entre na pasta do projeto:
```
git clone https://github.com/WagnerSPDB/EnigmaFIT
cd EnigmaFIT
```

### 2. Rodando o backend 
```
cd backend  
npm install       # Instala as dependências (necessário apenas na primeira vez)  
npm start         # Inicia o servidor  
```
O backend ficará disponível em: ➡️ http://localhost:3001

### 3. Rodando o frontend (em outro terminal):
```
cd frontend
npm install       # Instala as dependências
npm start         # Inicia o app React
```
O frontend ficará disponível em: ➡️ http://localhost:3000


## 🐳 Rodando com Docker (Deve ter o Docker instalado previamente)
### 1. Na raiz do projeto, execute:
```
docker compose up --build
```
Esse comando irá:

Construir as imagens do frontend e do backend  
Iniciar os containers com as configurações corretas  

### 2. Acesse nos navegadores(Também coloquei pra aparecer no terminal):

Frontend:
➡️ http://localhost:3000

Backend:
➡️ http://localhost:3001
