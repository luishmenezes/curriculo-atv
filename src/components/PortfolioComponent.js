import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Portfolio.css';
import inicianteProg from '../certificados/inicianteProg.png'
import formacaoCsharp from '../certificados/formacaoCsharp.png'
import ReactNative from '../certificados/ReactNative.png'
import github from '../certificados/github.png'
import arraysCsharp from '../certificados/arraysCsharp.png'
import csharptrabalhandoArquivos from '../certificados/csharptrabalhandoArquivos.png'
import designPaternsCsharp from '../certificados/designPaternsCsharp.png'
import Solid from '../certificados/Solid.png'
import responsabilidade from '../certificados/responsabilidade.png'
import UNIGAMES from '../certificados/UNIGAMES.png'
import atendimentopublico from '../certificados/atendimentopublico.png'
import desenvolvimentoprofissional from '../certificados/desenvolvimentoprofissional.png'
import empreendedorismo from '../certificados/empreendedorismo.png'
import estrategia from '../certificados/estrategia.png'
import combogo from '../certificados/combogo.png'
import gestaoprojetos from '../certificados/gestaoprojetos.png'
import ReactNativeHooks from '../certificados/ReactNativeHooks.png'
import cursosCsharp from '../certificados/cursosCsharp.png'




const PortfolioComponent = () => {
  const navigate = useNavigate();

  const certificados = [
    {
      id: 1,
      img: inicianteProg,
      alt: 'Iniciante Programação',
      descricao: 'Certificado de conclusão da formação completa de iniciante em Programação.',
    },
    {
      id: 2,
      img: formacaoCsharp,
      alt: 'Formação C#',
      descricao: 'Formação completa em C# com POO.',
    },
    {
      id: 3,
      img: ReactNative,
      alt: 'React Native',
      descricao: 'Curso criando um app usando React-Native.',
    },
    {
      id: 4,
      img: github,
      alt: 'Git e GitHub',
      descricao: 'Curso sobre como utilizar o Git e o GitHub.',
    },
    {
      id: 5,
      img: arraysCsharp,
      alt: 'Arrays em C#',
      descricao: 'Curso trabalhando com arrays em C#.',
    },
    {
      id: 6,
      img: csharptrabalhandoArquivos,
      alt: 'Trabalhando com Arquivos C#',
      descricao: 'Curso sobre manipulação de arquivos em C#.',
    },
    {
      id: 7,
      img: designPaternsCsharp,
      alt: 'Design Patterns C#',
      descricao: 'Curso de Design Patterns aplicado em C#.',
    },
    {
      id: 8,
      img: Solid,
      alt: 'SOLID em C#',
      descricao: 'Curso de princípios SOLID aplicados em C#.',
    },
    
    {
      id: 9,
      img: ReactNativeHooks,
      alt: 'React native hooks',
      descricao: ' Cursos de hooks usados em React Native'
    },
    {
      id: 10,
      img: responsabilidade,
      alt: 'Responsabilidade Social',
      descricao: 'Curso sobre responsabilidade social.',
    },
    {
      id: 11,
      img: UNIGAMES,
      alt: 'Palestra Unigames',
      descricao: 'Participação na palestra sobre jogos digitais.',
    },
    {
      id: 12,
      img: atendimentopublico,
      alt: 'Atendimento ao Público',
      descricao: 'Curso sobre atendimento ao público.',
    },
    {
      id: 13,
      img: desenvolvimentoprofissional,
      alt: 'Desenvolvimento Profissional',
      descricao: 'Curso de desenvolvimento profissional.',
    },
    {
      id: 14,
      img: empreendedorismo,
      alt: 'Empreendedorismo',
      descricao: 'Curso de empreendedorismo e inovação.',
    },
    {
      id: 15,
      img: estrategia,
      alt: 'Estratégia de Negócios',
      descricao: 'Curso de estratégia de negócios.',
    },
    {
      id: 16,
      img: gestaoprojetos,
      alt: 'Gestão de Projetos',
      descricao: 'Curso de gestão de projetos.',
    },
    {
      id: 17,
      img: combogo,
      alt: 'Projeto Combogó',
      descricao: 'Certificado de participação como voluntário no projeto Combogó UNICAP.',
    },
    {
      id: 18,
      img:cursosCsharp ,
      alt: 'cursos C#',
      descricao: 'curso de desenvolvimento em C#'
    }
  ];

  return (
    <div className="portfolio-container">
      
      <nav className="navbar">
        <button onClick={() => navigate('/home')}>Home</button>
        <button onClick={() => navigate('/portfolio')}>Portfólio</button>
        <button onClick={() => navigate('/contato')}>Contato</button>
        <button onClick={() => navigate('/jogosenha')}>Jogo Senha</button>
      </nav>

      
      <main className="portfolio-main">
        <h2>Meus Certificados</h2>
        <p>Aqui você encontra alguns dos meus certificados obtidos através de estudos e formações profissionais:</p>

        <div className="certificados-grid">
          {certificados.map((cert) => (
            <div className="certificado-item" key={cert.id}>
              <img src={cert.img} alt={cert.alt} />
              <p>{cert.descricao}</p>
            </div>
          ))}
        </div>
      </main>

      
    </div>
  );
};

export default PortfolioComponent;
