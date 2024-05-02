import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home, About, Contact, Products, Events, NotFound, History, Services, Agente } from './components/Paginas';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} >
          <Route path="services" element={<Services/>} />
          <Route path="history" element={<History/>} />
        </Route>
        <Route path="/products" element={<Products />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contacts" element={<Contact />} />

        <Route path="/:idAgente" element={<Agente/>}/>

        <Route path="*" element={<NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;
