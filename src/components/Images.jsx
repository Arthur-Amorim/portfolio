import styles from './componentStyles/Images.module.css'
import images from '../data/modelagens.json'

function Images() {
     return (
          <div className={styles.imagesContainer}>
               {images.map(({ categoria, imagens }, idCategoria) => (
                    <div key={idCategoria}>
                         <h2>{categoria}</h2>
                         <hr />
                         <div className={styles.categoryContainer}>
                              {imagens.map(({titulo, descricao, imagem}, idImagem) => (
                                   <div key={idImagem} className={styles.card}>
                                        <img src={`/portfolio/modelagens/${imagem}`} alt={`Image ${idImagem}`} />
                                        <div className={styles.text}>
                                             <h3>{titulo}</h3>
                                             <p>{descricao}</p>
                                        </div>
                                   </div>
                              ))}
                         </div>
                    </div>
               ))}
          </div>
     )
}

export default Images

