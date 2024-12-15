import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Municipios from './pages/Municipios';
import Header from './components/Header';
import ChatModal from './components/ChatModal';

import "./App.css";

const App = () => {
  const [isChatOpen, setChatOpen] = useState(false); // Estado para controlar el modal

  return (
    <Router>
      {/* Header con la función para abrir el chatbot */}
      <Header openChat={() => setChatOpen(true)} />

      {/* Modal del chatbot */}
      <ChatModal isOpen={isChatOpen} onClose={() => setChatOpen(false)} />

      {/* Rutas de la aplicación */}
      <div style={{ marginTop: '80px' }}>
        <Routes>
          {/* Pasamos openChat como prop al componente Home */}
          <Route path="/" element={<Home openChat={() => setChatOpen(true)} />} />
          <Route path="/municipios" element={<Municipios />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
