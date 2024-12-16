import React from 'react';
import { Link } from 'react-router-dom';

const Recomendaciones = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Recomendaciones Turísticas</h1>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        {/* Tarjeta El Doncello */}
        <Link to="/doncello" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div style={cardStyle}>
            <h2>El Doncello</h2>
            <img
              src="https://i.pinimg.com/736x/6d/e5/9d/6de59d4f1828e5cda0c631ab9274c4af.jpg"
              alt="El Doncello"
              style={imageStyle}
            />
          </div>
        </Link>

        {/* Tarjeta San Vicente */}
        <Link to="/sanvicente" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div style={cardStyle}>
            <h2>San Vicente del Caguán</h2>
            <img
              src="https://www.esariri.com/wp-content/uploads/2022/09/Anfitrion4-scaled.jpeg"
              alt="San Vicente del Caguán"
              style={imageStyle}
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

// Estilos para las tarjetas
const cardStyle = {
  border: '1px solid #ddd',
  borderRadius: '10px',
  padding: '10px',
  width: '300px',
  textAlign: 'center',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  cursor: 'pointer',
};

const imageStyle = {
  width: '100%',
  height: '180px',
  borderRadius: '10px',
  objectFit: 'cover',
};

export default Recomendaciones;
