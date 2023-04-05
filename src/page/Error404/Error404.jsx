import React from 'react';
import { Link } from 'react-router-dom';
import '../../sass/utils/ContainerIndex/_index.scss';
import './_error.scss';

const Error = () => {
      return (
            <div className="container-error">
                  <h1 className="color-h1">404</h1>
                  <p className="color-p">
                        Oups! La page que <br /> vous demandez n'existe pas.
                  </p>
                  {/* lien qui ramène l'utilisateur sur la page Home (acceuil) */}
                  <Link className="color-link" to="/">
                        Retourner sur la page d'acceuil
                  </Link>
            </div>
      );
};

export default Error;
