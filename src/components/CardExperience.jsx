import { useState } from 'react'
import styles from './componentStyles/CardExperience.module.css'


function CardExperiencia({ title, description, image1 = null, image2 = null, darked=false}) {
     return (
          <div className={`${styles.expContainer} ${darked ? styles.darked : ''}`}>
               <div className={styles.content}>
                    <h3>{title}</h3>
                    <p>{description}</p>
               </div>
               <figure>
                    <img src={image1} alt="Image of an experience" />
               </figure>
          </div>
     )
}

export default CardExperiencia
