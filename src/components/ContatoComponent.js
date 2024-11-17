import React from 'react';
import { useNavigate } from 'react-router-dom';

const ContatoComponent = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
      <button onClick={() => navigate('/home')}>Home</button>
        <button onClick={() => navigate('/portfolio')}>Portfólio</button>
        <button onClick={() => navigate('/contato')}>Contato</button>
        <button onClick={() => navigate('/jogosenha')}>Jogo Senha</button>
      </div>

      
      <h2>Entre em contato comigo:</h2>
      <p>Email: luishpmenezes@hotmail.com</p>
      <p>Telefone: 81 99999-8055</p>
    </div>
  );
};

export default ContatoComponent;
