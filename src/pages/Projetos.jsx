import { useState } from "react";
import Experiences from "../components/Experiences";
import '../styles/Projetos.css'
import Images from "../components/Images";

function Projetos() {
     const [visibleSection, setVisibleSection] = useState('pesquisa')

     return (
          <>
               <ul className="sectionsNav">
                    <li
                         onClick={() => setVisibleSection('pesquisa')}
                         className={visibleSection == 'pesquisa' ? 'backgrounded' : ''}
                    >
                         Pesquisa e Desenvolvimento
                    </li>
                    <li
                         onClick={() => setVisibleSection('modelagem')}
                         className={visibleSection == 'modelagem' ? 'backgrounded' : ''}
                    >
                         Modelagem 3D e Simulação
                    </li>
               </ul>
               <hr />
               {visibleSection === 'pesquisa' && (
                    <Experiences />
               )}

               {visibleSection === 'modelagem' && (
                    <Images/>
               )}
          </>
     )
}

export default Projetos;