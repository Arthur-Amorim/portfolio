import data from '../data/curriculo.json'
export default function Formacao() {
     return (
          <div>
               <ul>
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