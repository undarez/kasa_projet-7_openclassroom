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

// // Ce code est un composant React nommé "Etoiles". Il affiche une notation en étoiles, où chaque étoile peut être pleine (rouge) ou vide (grise) en fonction de la note attribuée.

// Le composant utilise useState pour stocker le nombre d'étoiles pleines, qui est initialisé avec la valeur de la propriété "rating" passée en paramètre. Il utilise également une liste de 5 éléments pour afficher les étoiles, avec chaque élément représentant une étoile.

// La méthode map() est utilisée pour parcourir les éléments de la liste et afficher une étoile pleine ou vide en fonction de la note attribuée. Si l'index de l'élément est inférieur au nombre d'étoiles pleines, une étoile pleine est affichée, sinon une étoile vide est affichée.

// Les images des étoiles sont stockées dans deux variables distinctes, "EtoilesRouge" et "EtoilesGris", qui sont importées depuis des fichiers externes.