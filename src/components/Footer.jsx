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
                    <a href="https://wa.me/5519947527361?text=Ol%C3%A1%2C%20Arthur%21%20Gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20como%20come%C3%A7ar%20um%20projeto.">
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
