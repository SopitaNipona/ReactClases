

import './App.css';
import ListaTareas from './components/ListaTareas';
import ProveedorTarea from './components/ProveedorTarea';



function App() {
  return (
    <div className="App">
      <ProveedorTarea>
        <ListaTareas />
      </ProveedorTarea>  
    </div>
  );
}

export default App;
