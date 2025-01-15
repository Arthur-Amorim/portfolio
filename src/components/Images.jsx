import styles from './componentStyles/Images.module.css'

function Images() {

     // Importando as imagens
     // const images = import.meta.glob('/modelagens/*.{png,jpg,jpeg,svg}', { eager: true });
     // const arrImgs = Object.entries(images)

     const images = [
          '/portfolio/modelagens/BanheiraIndividual.png',
          '/portfolio/modelagens/BanheiroDupla.png',
          '/portfolio/modelagens/bigorna.png',
          '/portfolio/modelagens/Carenagem_Nissan.png',
          '/portfolio/modelagens/engrenagem.png',
          '/portfolio/modelagens/garrafa.png',
          '/portfolio/modelagens/garrafa2.png',
          '/portfolio/modelagens/Helicoidal.png',
          '/portfolio/modelagens/pistao.png',
          '/portfolio/modelagens/Placa.png',
          '/portfolio/modelagens/rolamento.png',
     ];

     return (
          <div className={styles.imagesContainer}>
               {
                    images.map((path, index) => {
                         return (
                              <div key={index} className={styles.card}>
                                   <img src={path} alt={`Image ${index}`} key={index} />
                                   <div className={styles.text}>
                                        <h3>Titulo do card</h3>
                                        <p>Descrição sobre o card e tudo e mais 42 tudo e mais 42 tudo e mais 42 tudo e mais 42</p>
                                   </div>
                              </div>
                         )
                    })
               }
          </div>
     )
}

export default Images