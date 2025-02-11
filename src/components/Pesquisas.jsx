import CardExperiencia from './CardExperience'
import styles from './componentStyles/Pesquisas.module.css'
import data from '../data/pesquisas.json'

function Pesquisas() {
     return (
          <article className={styles.experiencia}>
               {
                    data.map(({ id, title, description, image }) => {
                         const darked = (id % 2 == 0 ? false : true)
                         return (
                              <div key={id}>
                                   <CardExperiencia
                                        title={title}
                                        description={description}
                                        image1={`/portfolio/pesquisa/${image}`}
                                        darked={darked}
                                   />
                              </div>
                         )
                    })
               }

          </article>
     )
}

export default Pesquisas;