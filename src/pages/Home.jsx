import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link para navegación
import '../styles/Home.css';

const Home = ({ openChat }) => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Explora el Caquetá</h1>
        <p>Descubre destinos únicos según tus preferencias.</p>
        <div>
          {/* Botón para abrir el chatbot */}
          <button
            className="home-button"
            onClick={openChat} // Abre el modal del chatbot
          >
            Comenzar Chat
          </button>
          
          {/* Botón para ir a la página de municipios */}
          <Link to="/municipios">
            <button className="home-button">
              Ver Municipios
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
