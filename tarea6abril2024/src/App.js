// Crea el componente principal de la aplicación
//Autor: Diego Sánchez Valle
import './App.css';
import Titulo from './components/Titulo';
import Fecha from './components/Fecha';
import Registro from './components/Registro';
import Imagen from './components/Imagen';
import Descripcion from './components/Descripcion';

function App() {
  return (
    <div className="App">
      <Imagen/>
      <Titulo texto="BLUES CLUES" />  
      <Descripcion texto="¿Cómo te sientes hoy Blue? Prepárate para acompañar a este icónico perrito a resolver divertidos misterios."/>
    </div>
  );
}

export default App;