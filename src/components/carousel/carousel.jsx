import { useState } from 'react';
import { ReactComponent as ChevronG } from '../../asset/chevronGauche.svg';
import { ReactComponent as ChevronD } from '../../asset/chevronDroite.svg';
import './_carousel.scss';
const Carousel = (props) => {
      const [currentIndex, setCurrenIndex] = useState(0);

      // function page suivante
      const slideleft = () => {
            setCurrenIndex(currentIndex - 1);

            if (currentIndex === 0) {
                  setCurrenIndex(props.src.length - 1);
            }
      };
      // function page precedente
      const slideright = () => {
            setCurrenIndex(currentIndex + 1);
            if (currentIndex === props.src.length - 1) {
                  setCurrenIndex(0);
            }
      };
      return (
            <div className="slider">
                  {/*short circuit permet graéce à la condition d'éffacer les chevron ainsi que les chiffre des images si il ya q'une seule image  */}
                  {props.src.length > 1 && (
                        <>
                              {/* bouton droite */}
                              <p className="chiffre">
                                    {currentIndex + 1}/{props.src.length}
                              </p>
                              <div className="position-chevron">
                                    {/* bouton gauche */}
                                    <button
                                          onClick={slideleft}
                                          className="btn-arrowG"
                                    >
                                          <ChevronG />
                                    </button>
                                    <button
                                          onClick={slideright}
                                          className="btn-arrowD"
                                    >
                                          <ChevronD />
                                    </button>
                              </div>
                        </>
                  )}
                  <img
                        className="img-slider"
                        src={props.src[currentIndex]}
                        alt={props.alt}
                  />
            </div>
      );
};

export default Carousel;
