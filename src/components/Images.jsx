import images from '../data/modelagens.json'
import imagens from '../assets/modelagens/garrafa.png'

function Images() {
     return (
          <figure>
               {
                    images.map((name, index) => {
                         return (
                              <img src={imagens} alt="" key={index} />
                         )
                    })
               }
          </figure>
     )
}

export default Images