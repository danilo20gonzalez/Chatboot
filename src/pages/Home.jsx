import React from 'react';
import '../styles/Home.css';

const Home = ({ openChat }) => { // Recibimos la función openChat como prop
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Explora el Caquetá</h1>
        <p>Descubre destinos únicos según tus preferencias.</p>
        <div>
          {/* Botón para abrir el chatbot */}
          <button
            className="home-button"
            onClick={openChat} // Usamos la función openChat para abrir el modal
          >
            Comenzar Chat
          </button>
          
          {/* Botón para ir a la página de municipios */}
          <button
            className="home-button"
            onClick={() => window.location.href = "/municipios"} // Redirigir manualmente
          >
            Ver Municipios
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
