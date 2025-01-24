import styles from './componentStyles/Images.module.css'
import images from '../data/modelagens.json'
function Images() {
     return (
          <div className={styles.imagesContainer}>
               {
                    images.map(({titulo, descricao, imagem}, index) => {
                         return (
                              <div key={index} className={styles.card}>
                                   <img src={`/portfolio/modelagens/${imagem}`} alt={`Image ${index}`} key={index} />
                                   <div className={styles.text}>
                                        <h3>{titulo}</h3>
                                        <p>{descricao}</p>
                                   </div>
                              </div>
                         )
                    })
               }
          </div>
     )
}

export default Images