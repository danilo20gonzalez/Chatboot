import React from 'react';

const Result = ({ preferences }) => {
  return (
    <div>
      <h2>Tus Preferencias</h2>
      <p><strong>Actividades:</strong> {preferences.activities.join(', ')}</p>
      <p><strong>Comida:</strong> {preferences.food}</p>
      <p><strong>Presupuesto:</strong> {preferences.budget}</p>
      <p><strong>Hospedaje:</strong> {preferences.accommodation}</p>
      <p>Próximamente: Recomendaciones personalizadas basadas en tus preferencias.</p>
    </div>
  );
};

export default Result;
