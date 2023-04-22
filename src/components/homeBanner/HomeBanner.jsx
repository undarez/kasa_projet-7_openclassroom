import React from 'react';
import './_imageBanner.scss';
// import bakgroundbanniere from '../../asset/banniereAcceuil.png'

const ImageBanner = (props) => {
      return (
            <section className="container-bg">
                  <div className="overlay-banniere"></div>

                  <img
                        className="bg-Banniere"
                        src={props.src}
                        alt={props.alt}
                  />
                  {/* <img className='bg-Banniere' src={bakgroundbanniere} alt="logo de banniere" /> */}
                  <div className="text-banniere">
                        Chez vous, partout et ailleur
                  </div>
            </section>
      );
};
export default ImageBanner;

//les props sont des paramettres definie pour chaque situation exemple ici j'ai créer un composant qui à deux props sur une balise img   qui nous informe que ce composant pourras etre réutiliser plusieurs fois car nous pouvons changer l'image qui sera appeler dans la page ou autre composant souhaiter.