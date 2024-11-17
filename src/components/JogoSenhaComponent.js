import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './JogoSenha.css';

const JogoSenhaComponent = () => {
  const navigate = useNavigate();
  const [tentativa, setTentativa] = useState('');
  const [tentativas, setTentativas] = useState([]);
  const [combSecret, setCombSecret] = useState(generateComb());

  function generateComb() {
    return Array.from({ length: 4 }, () => Math.floor(Math.random() * 10)).join('');
  }

  function verificarTentativa() {
    if (tentativa.length !== 4 || !/^\d{4}$/.test(tentativa)) {
      alert('Digite uma tentativa válida de 4 dígitos.');
      return;
    }

    let bulls = 0;
    let cows = 0;
    const combSecretArr = combSecret.split('');
    const tentativaArr = tentativa.split('');

    const verificado = Array(4).fill(false);
    tentativaArr.forEach((digit, i) => {
      if (digit === combSecretArr[i]) {
        bulls++;
        verificado[i] = true;
      }
    });

    tentativaArr.forEach((digit, i) => {
      if (digit !== combSecretArr[i] && combSecretArr.includes(digit)) {
        const pos = combSecretArr.findIndex((d, idx) => d === digit && !verificado[idx]);
        if (pos !== -1) {
          cows++;
          verificado[pos] = true;
        }
      }
    });

    setTentativas([{ tentativa, bulls, cows }, ...tentativas]);
    setTentativa('');
  }

  function handleReveal() {
    alert(`Combinação secreta: ${combSecret}`);
  }

  return (
    <div className="game-container">
      <nav className="navbar">
        <button onClick={() => navigate('/home')}>Home</button>
        <button onClick={() => navigate('/portfolio')}>Portfólio</button>
        <button onClick={() => navigate('/contato')}>Contato</button>
        <button onClick={() => navigate('/jogosenha')}>Jogo Senha</button>
      </nav>

      <div className="game-content">
        <h1>Jogo Senha: Bulls and Cows</h1>
        <p>Jogue e divirta-se!</p>

        <div className="input-container">
          <input
            type="text"
            value={tentativa}
            onChange={(e) => setTentativa(e.target.value)}
            placeholder="Digite sua tentativa (4 dígitos)"
          />
          <button onClick={verificarTentativa}>Verificar</button>
          <button className="reveal-button" onClick={handleReveal}>
            Revelar combinação
          </button>
        </div>

        <div className="attempts-container">
          <h2>Tentativas</h2>
          <ul>
            {tentativas.map((t, index) => (
              <li key={index}>
                Tentativa: <strong>{t.tentativa}</strong> - Bulls: {t.bulls}, Cows: {t.cows}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default JogoSenhaComponent;
