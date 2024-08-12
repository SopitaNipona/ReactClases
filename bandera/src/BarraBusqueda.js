import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function BarraBusqueda() {
  const [input, setInput] = useState('');

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="País"
      />
      <Link to={`/${input}`}>Buscar</Link>
    </div>
  );
}

export default BarraBusqueda;
