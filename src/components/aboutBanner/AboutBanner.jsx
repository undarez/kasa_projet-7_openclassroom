// Ce composant reprend tous le style de la banner de homeBanner

import React from 'react';
import '../homeBanner/_imageBanner.scss';

const ImageAbout = (props) => {
      return (
            <section className="container-bg">
                  <div className="overlay-banniere"></div>
                  <img
                        className="bg-Banniere"
                        src={props.src}
                        alt={props.alt}
                  />
            </section>
      );
};

export default ImageAbout;
