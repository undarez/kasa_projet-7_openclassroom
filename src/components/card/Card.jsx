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
