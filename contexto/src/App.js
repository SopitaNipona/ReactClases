

import './App.css';
import ListaTareas from './components/ListaTareas';
import ProveedorTarea from './components/ProveedorTarea';
import { createContext,useState } from 'react';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };
  return (
    <ThemeContext.Provider>
    <div className="App" id={theme}>
      <ProveedorTarea value={{theme, toggleTheme}}>
        <ListaTareas />
        <button onClick={toggleTheme}>Cambiar tema</button>
      </ProveedorTarea>  
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
