import { useEffect, useRef, useState } from 'react';
import '../styles/Inicio.css'
import '../styles/navigator.css'
import Experiences from '../components/Experiences';
import Formacao from '../components/Formacao'

// Icons
import { FaGuitar } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { BsFillBadge3dFill } from "react-icons/bs";
import { FaPython } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";

function Inicio() {
     const intro = useRef(null)
     const experience = useRef(null)
     const formation = useRef(null)


     const handleScroll = ref => {
          if (ref.current) {
               ref.current.scrollIntoView({
                    behavior: "auto",
                    block: "start"
               })
          }

          // const disableMouseEvents = (e) => e.preventDefault();
          // window.addEventListener("mousemove", disableMouseEvents, { passive: false });

          setTimeout(() => {
               window.removeEventListener("mousemove", disableMouseEvents);
          }, 1000); // Ajuste o tempo conforme necessário
     }

     return (
          <div className="inicioContainer">
               <aside className='sidebar'>
                    <ul className="sectionsNav">
                         <li
                              onClick={() => {
                                   handleScroll(intro)
                              }}
                              className='intro'
                         >
                              1. Introdução
                         </li>
                         <li
                              onClick={() => {
                                   handleScroll(experience)
                              }}
                              className='experiencia'
                         >
                              2. Experiência
                         </li>
                         <li
                              onClick={() => {
                                   handleScroll(formation)
                              }}
                              className='formacao'
                         >
                              3. Formação
                         </li>
                    </ul>
               </aside>

               <section className='articles' ref={intro}>
                    <article className='introducao'>
                         <div className='titulo'>
                              <h2>Sobre mim</h2>
                              <hr />
                         </div>
                         <p>
                         Meu nome é Arthur Henrique. Nasci em São Paulo, atualmente moro em Campinas e tenho 22 anos. 
                         Sou uma pessoa de muitos hobbies. Gosto muito de aprender coisas novas e fazer atividades que 
                         envolvam criatividade, inteligência e coordenação motora. Meus hobbies favoritos são: tocar violão, desenhar e praticar esportes.
                         <br></br>
                         <br></br>
                         Atualmente estou me graduando em Engenharia Mecânica na Unicamp, com um 
                         forte interesse em geração e aplicação de energias renováveis, soluções sustentáveis e gestão de projetos. 
                         Possuo ampla experiência em Desenho Técnico, Modelagem 3D,
                         Renderização e Simulação Computacional (CAE), com destaque para o desenvolvimento de projetos inovadores e o
                         design de soluções eficientes. Tenho domínio de diversas ferramentas de engenharia essenciais para a execução de
                         projetos, como softwares de CAD/CAE, além de proficiência no pacote Office (Excel, Word, PowerPoint) para análise
                         de dados, documentação e apresentação de resultados. Minha experiência também inclui a aplicação de métodos
                         ágeis, como o framework Kanban, para gestão de projetos, o que me permite otimizar processos, aumentar a
                         produtividade e garantir a entrega de resultados dentro dos prazos estabelecidos
                         </p>

                    </article>

                    <article ref={experience}>
                         <div className='title'>
                              <h2>Experiêcias</h2>
                              <hr />
                         </div>
                         <Experiences />
                    </article>

                    <article className='formacao' ref={formation}>
                    <div className='titulo'>
                              <h2>Formação</h2>
                              <hr />
                         </div>
                         <Formacao />
                    </article>
               </section>

          </div>

     )
}

export default Inicio;