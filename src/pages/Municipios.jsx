import React from 'react';
import destinations from '../components/Destinations'; // Importa los datos de destinos

const Municipios = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ textAlign: 'center' }}>Municipios del Caquetá</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        {destinations.map((destination, index) => (
          <div
            key={index}
            style={{
              border: '1px solid #ccc',
              borderRadius: '10px',
              padding: '15px',
              maxWidth: '300px',
              textAlign: 'center',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              backgroundColor: '#f9f9f9',
            }}
          >
            <h3>{destination.name}</h3>
            <img
              src={destination.image}
              alt={destination.name}
              style={{
                width: '100%',
                height: '180px',
                objectFit: 'cover',
                borderRadius: '10px',
                marginBottom: '10px',
              }}
            />
            <p style={{ fontSize: '14px', color: '#555' }}>{destination.description}</p>
            <p>
              <strong>Actividades:</strong> {destination.activities.join(', ')}
            </p>
            <p>
              <strong>Gastronomía:</strong> {destination.food.join(', ')}
            </p>
            <p>
              <strong>Hospedaje:</strong> {destination.accommodation.join(', ')}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Municipios;
