import React, { useState } from 'react';
import './_etoiles.scss';
import EtoilesRouge from '../../asset/etoilesPleine.svg';
import EtoilesGris from '../../asset/etoilesVide.svg';

const Etoiles = (props) => {
      //tableau vide des etoiles en attente des choix des utilisateur
      const stars = [1, 2, 3, 4, 5];
      const [etoile, setEtoile] = useState(Number(props.rating));

      //la fonction choix etoiles va permetre de choisir entre les etoiles rouge ou grise .
      return (
            <div className="container-etoiles">
                  {stars.map((level, index) => (
                        <span key={index}>
                              {etoile >= index + 1 ? (
                                    <img
                                          src={EtoilesRouge}
                                          alt="etoile pleine"
                                    />
                              ) : (
                                    <img src={EtoilesGris} alt="etoile vide" />
                              )}
                        </span>
                  ))}
            </div>
      );
};

export default Etoiles;
