import React, { useState } from 'react';
import '../styles/ChatModal.css'; // Importa los estilos

const ChatModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(0);
  const [preferences, setPreferences] = useState({
    activities: [],
    climate: '',
    landscapes: [],
    food: '',
    accommodation: '',
    cultureInteraction: '',
    physicalActivity: '',
    visitDuration: '',
    balnearios: '',
    additionalActivities: '',
    travelCompanions: '',
    budget: '',
    experience: ''
  });

  const questions = [
    { text: "¡Hola! Bienvenido/a al Chatbot de Turismo del Caquetá. ¿Te gustaría comenzar?", options: ["Sí, empecemos.", "No, gracias."] },
    { text: "¿Qué tipo de actividades turísticas te gustaría realizar?", options: ["Senderismo", "Rafting", "Avistamiento de aves", "Pesca recreativa", "Turismo de naturaleza", "Visitas culturales", "Retiro espiritual", "Participación en festivales", "Ecoturismo", "Otro (especificar)"] },
    { text: "¿Qué tipo de clima prefieres?", options: ["Clima cálido y soleado", "Clima fresco y lluvioso", "No tengo preferencia"] },
    { text: "¿Qué tipo de paisajes te gustaría explorar?", options: ["Selva y bosque tropical", "Montañas y colinas", "Cascadas y ríos", "Lagunas y balnearios naturales", "Otro (especificar)"] },
    { text: "¿Qué tipo de comida prefieres disfrutar?", options: ["Platos típicos", "Comida vegetariana o vegana", "Comida baja en sal", "Platos tradicionales colombianos", "Otro (especificar)"] },
    { text: "¿Qué tipo de alojamiento prefieres?", options: ["Hostales económicos", "Cabañas o eco-lodges", "Hoteles confortables", "Camping", "Otro (especificar)"] },
    { text: "¿Te interesa interactuar con comunidades locales o indígenas?", options: ["Sí, conocer su cultura", "Sí, en actividades específicas", "No, prefiero otro tipo de experiencias"] },
    { text: "¿Qué nivel de actividad física prefieres?", options: ["Caminatas suaves", "Actividades moderadas", "Actividades intensas"] },
    { text: "¿Cuánto tiempo planeas quedarte en el Caquetá?", options: ["1 día", "De 2 a 3 días", "Una semana", "Más de una semana"] },
    { text: "¿Qué tipo de balnearios o lagunas prefieres visitar?", options: ["Balnearios naturales familiares", "Lagunas remotas en la selva", "Lugares ideales para pesca recreativa", "Otro (especificar)"] },
    { text: "¿Hay alguna actividad específica que te gustaría realizar?", options: ["Observación de estrellas", "Fotografía de paisajes", "Visitas a fincas agroecológicas", "Recolección de plantas medicinales", "Otro (especificar)"] },
    { text: "¿Con quién viajas?", options: ["Solo/a", "En familia", "En pareja", "Con amigos", "Otro (especificar)"] },
    { text: "¿Cuál es tu presupuesto estimado?", options: ["Económico", "Moderado", "Alto"] },
    { text: "¿Qué esperas de tu experiencia en el Caquetá?", options: ["Relax y descanso", "Conexión con la naturaleza", "Diversión y aventura", "Paz espiritual", "Aprendizaje cultural e histórico"] },
    { text: "Gracias por responder. Basado en tus preferencias, aquí tienes las recomendaciones de los municipios turísticos del Caquetá que mejor se adaptan a tus gustos. ¿Te gustaría conocer más detalles?", options: ["Sí, por favor.", "No, gracias."] }
  ];

  const handleAnswer = (answer) => {
    const keys = ["activities", "activities", "climate", "landscapes", "food", "accommodation", "cultureInteraction", "physicalActivity", "visitDuration", "balnearios", "additionalActivities", "travelCompanions", "budget", "experience"];
    const currentKey = keys[step];
    
    setPreferences((prev) => ({
      ...prev,
      [currentKey]: Array.isArray(prev[currentKey]) ? [...prev[currentKey], answer] : answer
    }));

    setStep(step + 1); // Avanzar a la siguiente pregunta
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>×</button>
        {step < questions.length ? (
          <div>
            <h2 className="chat-question">{questions[step].text}</h2>
            <div className="chat-options">
              {questions[step].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className="chat-button"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="chat-result">
            <h2>¡Gracias por responder!</h2>
            <p>Aquí están tus preferencias seleccionadas:</p>
            <pre>{JSON.stringify(preferences, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatModal;
