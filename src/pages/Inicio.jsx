import { useState } from 'react';
import '../styles/Inicio.css'
import CardExperiencia from '../components/CardExperiencia'
import data from '../data/experiences.json'

function Inicio() {
     const [visibleSection, setVisibleSection] = useState('introducao')

     return (
          <div className="inicioContainer">
               <ul className="sectionsNav">
                    <li
                         onClick={() => setVisibleSection('introducao')}
                         className={visibleSection == 'introducao' ? 'backgrounded' : ''}
                    >
                         Introdução
                    </li>
                    <li
                         onClick={() => setVisibleSection('experiencia')}
                         className={visibleSection == 'experiencia' ? 'backgrounded' : ''}
                    >
                         Experiência
                    </li>
                    <li
                         onClick={() => setVisibleSection('formacao')}
                         className={visibleSection == 'formacao' ? 'backgrounded' : ''}
                    >
                         Formação
                    </li>
               </ul>
               <hr />

               <section className='sections'>
                    {visibleSection == 'introducao' && (
                         <article className='introducao'>
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
                    )}

                    {visibleSection == 'experiencia' && (

                         <article className='experiencia'>

                              {data.map(({ id, title, description, image1}) => {
                                   const darked = (id % 2 == 0 ? true : false)
                                   return (
                                   <div key={id}>
                                        <CardExperiencia
                                             title={title}
                                             description={description}
                                             image1={"https://placehold.co/600x400"}
                                             darked={darked}
                                        />
                                   </div>
                              )})}

                         </article>

                    )}

                    {visibleSection == 'formacao' && (
                         <article className='formacao'>
                              Formadoh
                         </article>
                    )}
               </section>

          </div>

     )
}

export default Inicio;