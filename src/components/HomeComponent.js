import React from 'react';
import { useNavigate } from 'react-router-dom';
import fotoLuis from '../Image/fotoLuis.jpeg';
import './Home.css'; 

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      
      <nav className="navbar">
        <button onClick={() => navigate('/home')}>Home</button>
        <button onClick={() => navigate('/portfolio')}>Portfólio</button>
        <button onClick={() => navigate('/contato')}>Contato</button>
        <button onClick={() => navigate('/jogosenha')}>Jogo Senha</button>
      </nav>

      
      <section className="intro-section">
        <img src={fotoLuis} alt="Minha foto" className="profile-pic" />
        <h1>Prazer, sou Luís Henrique</h1>
        <p>
          Moro em Recife e estou no 3º período do curso de Sistemas para Internet. Apaixonado por tecnologia, migrei da área contábil para me dedicar à programação. Atualmente, estudo e me especializo em desenvolvimento back-end, com conhecimentos também em front-end.
        </p>
      </section>

      
      <section className="section">
        <h2>Objetivo</h2>
        <p>
          Contribuir para o desenvolvimento de soluções eficientes e escaláveis, aprimorar minhas competências e colaborar em projetos inovadores. Busco crescer profissionalmente em uma equipe dinâmica e desafiadora.
        </p>
      </section>

      
      <section className="section">
        <h2>Como trabalho</h2>
        <p>
          Dedicação é minha prioridade. Garanto um processo de desenvolvimento altamente interativo, baseado em feedback contínuo. “Somos o que fazemos repetidamente. Excelência não é um ato, mas sim um hábito.”
        </p>
      </section>

      
      <section className="section">
        <h2>Experiência Profissional</h2>
        <ul>
          <li>Estágio na Companhia Editora de Pernambuco (03/2019 a 03/2021)</li>
          <li>Assistente Contábil na Companhia Editora de Pernambuco (03/2021 a 12/2021)</li>
          <li>Estágio na Grant Thornton (01/2022 a 07/2022)</li>
          <li>Analista Contábil Jr. na Auto Parvi (01/2024 - atualmente)</li>
        </ul>
      </section>

      
      <section className="section">
        <h2>Experiência Acadêmica</h2>
        <ul>
          <li>Inglês fluente (formado na Cultura Inglesa em 2017)</li>
          <li>Ciências Contábeis, UNICAP (01/2018 a 06/2023)</li>
          <li>Sistemas para Internet, UNICAP (06/2023 a 12/2025)</li>
          <li>
            Veja mais na página de <a onClick={() => navigate('/portfolio')}>portfolio</a> ou confira meu <a href="https://github.com/luishmenezes" target="_blank" rel="noopener noreferrer">GitHub</a>.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
