import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BarraBusqueda from './BarraBusqueda';
import DesplegarBandera from './DesplegarBandera';

function App() {
  return (
    <Router>
      <div>
        <h1>Buscar bandera</h1>
        <h3>Diego Sánchez Valle A01748692</h3>
        <BarraBusqueda />
        <Routes>
          <Route path="/:countryName" element={<DesplegarBandera />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
