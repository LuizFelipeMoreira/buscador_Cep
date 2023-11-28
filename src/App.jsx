import React from "react";
import "./App.css";
import { FiSearch } from "react-icons/fi";

function App() {
  return (
    <div className="container">
      <h1 className="tittle">Buscador Cep</h1>

      <div className="containerInput">
        <input type="text" placeholder="Digite um cep..." />

        <button className="buttonSearch">
          <FiSearch size={25} color="#000" />
        </button>
      </div>

      <main className="main">
        <h2>Cep : 11340210</h2>
        <span>Logradouro: Rua Carmem Miranda</span>
        <span>Complemento: Casa</span>
        <span>Bairro: Nautica</span>
        <span>Sao Paulo - SP</span>
      </main>
    </div>
  );
}

export default App;
