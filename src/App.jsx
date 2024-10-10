import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import Login from './Components/Login/Login.jsx';
import TemporaryHome from './Components/Services/TemporaryHome.jsx';
import CadastroLar from './Components/Services/CadastroLar.jsx'; 
import CadastroOng from './Components/Services/CadastroOng.jsx';
import Listagem from './Components/Listagem/Listagem.jsx'; // Corrigido o nome do import
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/temporary-home" element={<TemporaryHome />} />
        <Route path="/listagem" element={<Listagem />} /> {/* Nome corrigido */}
        <Route path="/cadastrar-lar" element={<CadastroLar />} />
        <Route path="/cadastrar-ong" element={<CadastroOng />} />
      </Routes>
    </Router>
  );
}

export default App;