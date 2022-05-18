import Mainpage from './front/Paginas/Mainpage.js';
import Transparencia from './front/Paginas/Transparencia'
import Contactanos from './front/Paginas/Contactanos.jsx';
import Actividades from './front/Paginas/Actividades.jsx';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Mainpage/>} />
        <Route path="/transparencia" element={<Transparencia/>} />
        <Route path="/Actividades" element={<Actividades/>} />
        <Route path="/Contactanos" element={<Contactanos/>} />
      </Routes>
  );
}

export default App;
