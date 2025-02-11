import { useRef, useState } from "react";
import Pesquisas from "../components/Pesquisas";
import '../styles/Projetos.css'
import '../styles/navigator.css'
import Images from "../components/Images";

function Pesquisa() {
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
               <div className="sections">
                    <div>
                    <Pesquisas />
                    </div>
               </div>
          </div>
     )
}

export default Pesquisa;