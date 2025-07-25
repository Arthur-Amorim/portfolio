import { useEffect, useRef } from 'react';
import styles from './componentStyles/CardExperience.module.css';

function CardExperiencia({ title, description, image1 = null, image2 = null, darked = false }) {
  const imgRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const adjustContentHeight = () => {
      if (imgRef.current && contentRef.current) {
        const imageHeight = imgRef.current.offsetHeight-20;
        contentRef.current.style.height = `${imageHeight}px`;
      }
    };

    // Executa após imagem carregar
    const imgElement = imgRef.current;
    if (imgElement && imgElement.complete) {
      adjustContentHeight(); // Imagem já carregada
    } else {
      imgElement.onload = adjustContentHeight;
    }

    // Recalcula altura se janela for redimensionada
    window.addEventListener('resize', adjustContentHeight);

    return () => {
      window.removeEventListener('resize', adjustContentHeight);
    };
  }, [image1]);

  return (
    <div className={`${styles.expContainer} ${darked ? styles.darked : ''}`}>
      <div className={styles.content} ref={contentRef}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <figure>
        <img ref={imgRef} src={image1} alt="Image of an experience" />
      </figure>
    </div>
  );
}

export default CardExperiencia;
