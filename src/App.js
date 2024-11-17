import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import PortfolioComponent from './components/PortfolioComponent';
import ContatoComponent from './components/ContatoComponent';
import JogoSenhaComponent from './components/JogoSenhaComponent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/home" element={<HomeComponent />} />
        <Route path="/portfolio" element={<PortfolioComponent />} />
        <Route path="/contato" element={<ContatoComponent />} />
        <Route path="/jogosenha" element={<JogoSenhaComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
