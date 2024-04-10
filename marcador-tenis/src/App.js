import { useState } from 'react';
import './App.css';
import Boton from './components/Boton';
import Puntos from './components/Puntos';
import Titulo from './components/Titulo';

function App() {

  console.log("Ejecutando App");

  //Estado de la app (2 valores)
  const [puntosA, setPuntosA] = useState(0);
  const [puntosB, setPuntosB] = useState(0);

  console.log("Puntos A dentro de App: ", puntosA);

  //Handler para el onClick de los botones
  const onClickHandlerA = () => {
    console.log("Antes: ", puntosA);
    setPuntosA(puntosA + 1);
    console.log("Despues: ", puntosB) //Asincronos
  }

  const onClickHandlerB = () => {
    setPuntosB(puntosB + 1);
  }

  const onClickHandlerReiniciar = () => {
    setPuntosA(0);
    setPuntosB(0);
  }

  return (
    <div className="App">
      <Titulo texto="Jugador A"/>
      <Puntos puntos={puntosA} />
      <Titulo texto="Jugador B"/>
      <Puntos puntos={puntosB} />

      <Boton texto="Gana punto A" onClick={onClickHandlerA}/>
      <Boton texto="Gana punto B" onClick={onClickHandlerB}/>
      <Boton texto="Reiniciar" onClick={onClickHandlerReiniciar}/>
    </div>
  );
}

export default App;
