import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // Cambiado a HashRouter
import Home from './pages/Home';
import Municipios from './pages/Municipios';
import Recomendaciones from './pages/Recomendaciones'; // Importa la nueva página
import DetalleMunicipio from './pages/DetalleMunicipio';
import Doncello from './pages/Doncello';
import SanVicente from './pages/SanVicente';
import Header from './components/Header';
import ChatModal from './components/ChatModal';

import "./App.css";

const App = () => {
  const [isChatOpen, setChatOpen] = useState(false); // Estado para controlar el modal

  return (
    <Router> {/* HashRouter en lugar de BrowserRouter */}
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
          <Route path="/recomendaciones" element={<Recomendaciones />} /> {/* Nueva ruta */}
          <Route path="/municipio/:name" element={<DetalleMunicipio />} />
          <Route path="/doncello" element={<Doncello />} />
          <Route path="/sanvicente" element={<SanVicente />} />
          <Route path="/acerca-de" element={<div style={{ padding: '20px' }}>Página Acerca de</div>} />
          <Route path="/contacto" element={<div style={{ padding: '20px' }}>Página de Contacto</div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
