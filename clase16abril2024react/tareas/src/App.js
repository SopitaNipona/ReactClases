import logo from './logo.svg';
import './App.css';
import { GrTask } from 'react-icons/gr';
import { FcAlarmClock } from 'react-icons/fc';
import Tarea from './components/Tarea.js';
import CapturaTarea from './components/CapturaTarea.js';
import ListaTareas from './components/ListaTareas.js';

function App() {
  return (
    <div className="App">
      <ListaTareas />
      
    </div>
  );
}

export default App;
