import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import styles from './componentStyles/Footer.module.css'

export default function footer() {
     return (
          <footer>
               <div className={styles.redes}>

                    <a href="https://www.linkedin.com/in/arthur-henrique-leite-amorim-818779192/">
                         <FaLinkedin color="blue" size={40}/>
                    </a>
                    <a href=" wa.me/5519947527361?text=Ol%C3%A1!%20Gostaria%20de%20iniciar%20a%20requisi%C3%A7%C3%A3o%20de%20um%20novo%20projeto.%20Poderia%20me%20informar%20os%20pr%C3%B3ximos%20passos,%20por%20favor%3F">
                         <FaWhatsappSquare size={40} color="green"/>
                    </a>
                    <a href="https://github.com/Arthur-Amorim/">
                         <FaGithub size={40} color="black"/>
                    </a>

                    <a href="mailto:arthur_hla@hotmail.com">
                         <SiGmail size={40} color="red"/>
                    </a>
               </div>
          </footer>
     )
}
