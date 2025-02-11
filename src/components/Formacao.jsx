import data from '../data/curriculo.json'
import styles from './componentStyles/Formacao.module.css'

export default function Formacao() {
     return (
          <div>
               <ul className={styles.listaFormacao}>
                    {
                         data.map(({instituicao, Formacao, periodo}) => {
                              return (
                                   <li>
                                        <h3>{instituicao}</h3>
                                        <p>{Formacao}</p>
                                        <small>{periodo}</small>
                                   </li>
                              )
                         })
                    }
               </ul>
          </div>
     )
}