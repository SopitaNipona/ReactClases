import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function DesplegarBandera() {
  const { countryName } = useParams();
  const [flagUrl, setFlagUrl] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (countryName) {
      fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('País no encontrado');
          }
          return response.json();
        })
        .then(data => {
          if (data.length > 0 && data[0].flags) {
            setFlagUrl(data[0].flags.png);
          } else {
            throw new Error('no encontrado');
          }
        })
        .catch(err => {
          setError(err.message);
          console.error("Bandera no encontrada:", err);
        });
    }
  }, [countryName]);

  return (
    <div>
      {error ? <p>{error}</p> : (flagUrl ? <img src={flagUrl} alt={`Flag of ${countryName}`} /> : <p>Cargando Bandera...</p>)}
    </div>
  );
}

export default DesplegarBandera;
