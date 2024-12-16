import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ openChat }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar el menú desplegable

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
      {/* Sección izquierda: Menú desplegable */}
      <div style={{ position: 'relative' }}>
        <button
          onClick={toggleMenu}
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
          ☰ Menú
        </button>

        {/* Menú desplegable */}
        {isMenuOpen && (
          <div
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              backgroundColor: 'white',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              borderRadius: '5px',
              overflow: 'hidden',
              zIndex: 1000,
            }}
          >
            <Link
              to="/acerca-de"
              style={{
                display: 'block',
                padding: '10px 20px',
                textDecoration: 'none',
                color: '#2E8B57',
                fontWeight: 'bold',
              }}
            >
              Acerca de
            </Link>
            <Link
              to="/contacto"
              style={{
                display: 'block',
                padding: '10px 20px',
                textDecoration: 'none',
                color: '#2E8B57',
                fontWeight: 'bold',
              }}
            >
              Contacto
            </Link>
          </div>
        )}
      </div>

      {/* Sección central */}
      <div>
        <h1 style={{ margin: 0, fontSize: '24px', fontWeight: 'bold' }}>Caquetá Turístico</h1>
        <p style={{ margin: 0, fontSize: '14px', fontStyle: 'italic' }}>🌿 Descubre la belleza natural</p>
      </div>

      {/* Sección derecha */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
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

        <button
          onClick={openChat}
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
