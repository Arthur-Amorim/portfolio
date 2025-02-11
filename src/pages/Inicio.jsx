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
                              Lorem Ipsum is simply dummy text of the printing and typesetting
                              industry.
                              Lorem Ipsum has been the industry's standard dummy text ever since the
                              1500s,
                              when an unknown printer took a galley of type and scrambled it to make a
                              type specimen book.
                              It has survived not only five centuries, but also the leap into electronic
                              typesetting,
                              remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                              and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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
                         <Formacao />
                    </article>
               </section>

          </div>

     )
}

export default Inicio;