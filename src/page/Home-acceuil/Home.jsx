import React from 'react';
import ImageBanner from '../../components/homeBanner/HomeBanner';
// import ContainerCard from '../components/card/Card';
import ListeAppart from '../../components/listeAppart/ListeAppart';
// import de l'image de la banniere
import bakgroundbanniere from '../../asset/banniereAcceuil.png';
import './_home.scss';
const home = () => {
      return (
            <div className="position-home">
                  <ImageBanner src={bakgroundbanniere} alt="logo de banniere" />
                  <ListeAppart />
            </div>
      );
};

export default home;
