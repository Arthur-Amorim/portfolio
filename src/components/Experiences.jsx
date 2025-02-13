import CardExperiencia from './CardExperience'
import data from '../data/experiences.json'

function Experiences() {
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
                                        image1={`/portfolio/experiencias/${image}`}
                                        darked={darked}
                                   />
                              </div>
                         )
                    })
               }

          </article>
     )
}

export default Experiences;