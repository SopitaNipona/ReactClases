// Crea el componente principal de la aplicación
//Autor: Diego Sánchez Valle
import './App.css';
import Titulo from './components/Titulo';
import Fecha from './components/Fecha';
import Registro from './components/Registro';
import Imagen from './components/Imagen';

function App() {
  return (
    <div className="App">
      <Imagen/>
      <Titulo texto="COVID-19"/>  
      <Registro fecha={new Date()} descripcion="Zona Centro" cantidad="450" />
    </div>
  );
}

export default App;