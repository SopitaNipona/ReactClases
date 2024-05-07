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

  const [setsA, setSetsA] = useState(0);
  const [setsB, setSetsB] = useState(0);

  const pointsMultiplier = [15,15,10,10];
  
  const [countMultiplierA, setCountMultiplierA] = useState(0);
  const [countMultiplierB, setCountMultiplierB] = useState(0);
  
  //const [showAlertA, setShowAlertA] = useState(false);
  //const [showAlertB, setShowAlertB] = useState(false);

  //Calcular sets
  if(puntosA >= 41 ){
    setSetsA(setsA + 1);
    setPuntosA(0);
    setPuntosB(0);
    setCountMultiplierA(0);
    setCountMultiplierB(0);
  }

  if(puntosB >= 41 ){
    setSetsB(setsB + 1);
    setPuntosA(0);
    setPuntosB(0);
    setCountMultiplierA(0);
    setCountMultiplierB(0);
  }

  if(setsB >= 5 || setsA >= 5){
    if(setsA > setsB){
        alert("Jugador A ha ganado la partida");
    }
    if(setsB > setsA){
        alert("Jugador B ha ganado la partida");
    }
    setSetsA(0);
    setSetsB(0);
    setCountMultiplierA(0);
    setCountMultiplierB(0);
}

  //console.log("Puntos A dentro de App: ", puntosA);

  //Handler para el onClick de los botones
  const onClickHandlerA = () => {
    console.log("multiplier: ",countMultiplierA);
    setPuntosA(puntosA + pointsMultiplier[countMultiplierA]);
    //console.log("Despues: ", puntosB) //Asincronos
    setCountMultiplierA(countMultiplierA + 1);
    console.log("After: ",countMultiplierA);
  }

  const onClickHandlerAmenos = () => {
    if(puntosA > 0){
      setPuntosA(puntosA - pointsMultiplier[countMultiplierA]);
      setCountMultiplierA(countMultiplierA - 1);
    }
  }

  const onClickHandlerB = () => {
    setPuntosB(puntosB + pointsMultiplier[countMultiplierB]);
    setCountMultiplierB(countMultiplierB + 1);
  }

  const onClickHandlerBmenos = () => {
    if(puntosB > 0){
      setPuntosB(puntosB - pointsMultiplier[countMultiplierB]);
      setCountMultiplierB(countMultiplierB - 1);

    }
    
  }

  const onClickHandlerReiniciar = () => {
    setPuntosA(0);
    setPuntosB(0);
    setSetsA(0);
    setSetsB(0);
    setCountMultiplierA(0);
    setCountMultiplierB(0);  
  }

  return (
    <div className="App">
      <Titulo texto="Jugador A"/>
      <Puntos puntos={puntosA} />
      <Titulo texto="Jugador B"/>
      <Puntos puntos={puntosB} />

      <Titulo texto="Sets ganados de A"/>
      <Puntos puntos={setsA} />
      <Titulo texto="Sets ganados de B"/>
      <Puntos puntos={setsB} />

      <Boton texto="punto A +" onClick={onClickHandlerA}/>
      <Boton texto="punto A -" onClick={onClickHandlerAmenos}/>
      <Boton texto="punto B +" onClick={onClickHandlerB}/>
      <Boton texto="punto B -" onClick={onClickHandlerBmenos}/>
      <Boton texto="Reiniciar" onClick={onClickHandlerReiniciar}/>
    </div>
  );
}

export default App;
