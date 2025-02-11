import CardExperiencia from './CardExperience'
import data from '../data/pesquisas.json'

function Pesquisas() {
     return (
          <article className='experiencia'>
               {
                    data.map(({ id, title, description, image }) => {
                         const darked = (id % 2 == 0 ? true : false)
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