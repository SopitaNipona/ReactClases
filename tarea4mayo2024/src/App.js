

import './App.css';
import ListaTareas from './components/ListaTareas';
import ProveedorTarea from './components/ProveedorTarea';
import { ContextoTareas } from './components/ProveedorTarea';
import { createContext,useContext,useState } from 'react';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");
  const [filter, setFilter] = useState("all");
  

  

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };
  return (
    <ThemeContext.Provider>
    <div className="App" id={theme}>
      <ProveedorTarea value={{theme, toggleTheme}} filter={filter}>
        <ListaTareas />
        <button onClick={toggleTheme}>Cambiar tema</button>
        <button onClick={() => setFilter('all')}> Todos </button>
        <button onClick={() => setFilter('completed')}> Completados </button>
        <button onClick={() => setFilter('pending')}> Pendientes </button>
      </ProveedorTarea>  
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
