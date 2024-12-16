import React from 'react';
import { useParams } from 'react-router-dom'; // Hook para obtener parámetros de la URL
import destinations from '../components/Destinations';

const DetalleMunicipio = () => {
  const { name } = useParams(); // Captura el parámetro 'name' desde la URL
  const municipio = destinations.find(
    (item) => item.name.toLowerCase() === decodeURIComponent(name).toLowerCase()
  );

  if (!municipio) {
    return <h2 style={{ textAlign: 'center', padding: '20px' }}>Municipio no encontrado</h2>;
  }

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>{municipio.name}</h1>
      <img
        src={municipio.image}
        alt={municipio.name}
        style={{ width: '100%', maxWidth: '500px', borderRadius: '10px', marginBottom: '20px' }}
      />
      <p style={{ fontSize: '18px', marginBottom: '10px' }}>{municipio.description}</p>
      <div>
        <h3>Actividades:</h3>
        <p>{municipio.activities.join(', ')}</p>

        <h3>Gastronomía:</h3>
        <p>{municipio.food.join(', ')}</p>

        <h3>Hospedaje:</h3>
        <p>{municipio.accommodation.join(', ')}</p>
      </div>
    </div>
  );
};

export default DetalleMunicipio;
