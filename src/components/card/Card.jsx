import React from 'react';
import './_card.scss';
import { Link } from 'react-router-dom';
const Card = ({ id, title, location, cover }) => {
      return (
            <Link to={`/logements/${id}`}>
                  <div className="container-card">
                        <div className="overlay-banniere"></div>
                        <img className="img-cover" src={cover} alt="location" />
                        <article className="container-article">
                              <p className="position-title">{title}</p>
                        </article>
                  </div>
            </Link>
      );
};
export default Card;

//En résumé, ce composant Card est utilisé pour afficher une carte de logement avec une image de couverture, un titre et une localisation et permet de rediriger l'utilisateur vers la page du logement spécifique en cliquant sur la carte.

// je fait appel au composant Link de react pour créer un lien vers le logement specifique