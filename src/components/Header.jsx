import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ openChat }) => { // Recibimos openChat como prop
  return (
    <header
      style={{
        backgroundColor: '#2E8B57',
        color: 'white',
        padding: '10px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      }}
    >
      {/* Sección izquierda */}
      <div>
        <h1 style={{ margin: 0, fontSize: '24px', fontWeight: 'bold' }}>Caquetá Turístico</h1>
        <p style={{ margin: 0, fontSize: '14px', fontStyle: 'italic' }}>🌿 Descubre la belleza natural</p>
      </div>

      {/* Sección derecha */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        {/* Botón Inicio */}
        <Link to="/" style={{ textDecoration: 'none' }}>
          <button
            style={{
              backgroundColor: 'white',
              color: '#2E8B57',
              border: 'none',
              borderRadius: '5px',
              padding: '10px 15px',
              fontSize: '14px',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            Inicio
          </button>
        </Link>

        {/* Botón Chatbot */}
        <button
          onClick={openChat} // Usamos la prop openChat para abrir el modal
          style={{
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            padding: '10px 15px',
            fontSize: '14px',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          Chatbot
        </button>
      </div>
    </header>
  );
};

export default Header;
