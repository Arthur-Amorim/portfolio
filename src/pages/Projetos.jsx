import { useRef, useState } from "react";
import Experiences from "../components/Experiences";
import '../styles/Projetos.css'
import '../styles/navigator.css'
import Images from "../components/Images";

function Projetos() {
     const [visibleSection, setVisibleSection] = useState('pesquisa')
     const pesq = useRef(null)
     const model = useRef(null)

     const handleScroll = ref => {
          if (ref.current) {
               ref.current.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
               })
          }
     }

     return (
          <div className="projetosContainer">

               <aside className="sidebar">
                    <ul className="sectionsNav">
                         <li
                              onClick={() => handleScroll(pesq)}
                              className={visibleSection == 'pesquisa' ? 'backgrounded' : ''}
                         >
                              1. Pesquisa
                         </li>
                         <li
                              onClick={() => handleScroll(model)}
                              className={visibleSection == 'modelagem' ? 'backgrounded' : ''}
                         >
                              2. Modelagem 3D
                         </li>
                    </ul>
               </aside>

               <div className="sections">
                    <div ref={pesq}>
                         <Experiences />
                    </div>
                    <div ref={model}>
                         <Images />
                    </div>
               </div>
          </div>
     )
}

export default Projetos;