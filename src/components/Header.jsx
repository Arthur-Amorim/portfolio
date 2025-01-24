import { Link, useLocation } from 'react-router-dom'
import styles from './componentStyles/Header.module.css'
import { useState, useEffect } from 'react';

import { RiHome2Line } from "react-icons/ri";
import { GrNotes } from "react-icons/gr";
import { BsBadge3D } from 'react-icons/bs';

export default function Header() {

     const [isScrolled, setIsScrolled] = useState(false);
     const cssSumir = `${isScrolled ? styles.sumir : ''}`
     const [path, setPath] = useState(useLocation().pathname)

     // Hook para monitorar a rolagem
     useEffect(() => {
          const handleScroll = () => {
               if (window.scrollY > 50) {
                    setIsScrolled(true); // Ativa a classe quando rolar mais de 50px
               } else {
                    setIsScrolled(false); // Remove a classe ao voltar ao topo
               }
          };

          window.addEventListener("scroll", handleScroll);
          return () => {
               window.removeEventListener("scroll", handleScroll); // Limpa o evento ao desmontar
          };
     }, []);


     return (
          <header className={`${styles.headerContainer} ${isScrolled ? styles.scrolledHeader : ""}`}>
               <div className={styles.profile}>
                    <figure className={styles.profileImage}>
                         <img src="/portfolio/assets/perfil.jpeg" width="100" alt="Foto de perfil" />
                    </figure>
                    <div className={styles.profileName}>
                         {!isScrolled ? <h2 className={cssSumir}>Portfolio</h2> : ''}

                         <p>Arthur H. Amorim</p>
                    </div>
               </div>

               <ul className={styles.navigator}>
                    <Link to="/portfolio" onClick={() => setPath('/portfolio')} >
                         <li className={path === '/portfolio' ? styles.underlined : ''} >
                              <RiHome2Line size={25} />
                              <span className={cssSumir}>Início</span>
                         </li>
                    </Link>

                    <Link to="/portfolio/pesquisa" onClick={() => setPath('/portfolio/pesquisa')} >
                         <li className={path === '/portfolio/pesquisa' ? styles.underlined : ''} >
                              <GrNotes size={25} />
                              <span className={cssSumir}> Pesquisa </span>
                         </li>
                    </Link>

                    <Link to="/portfolio/modelagens" onClick={() => setPath('/portfolio/modelagens')} >
                         <li className={path === '/portfolio/modelagens' ? styles.underlined : ''} >
                              <BsBadge3D size={25} />
                              <span className={cssSumir}> Modelagens </span>
                         </li>
                    </Link>

               </ul>
          </header>
     )
}