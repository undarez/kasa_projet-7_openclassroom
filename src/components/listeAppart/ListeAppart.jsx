import React from 'react';
// Card = au fichier qui va contenir le model de chaque carte
import Card from '../card/Card';
// data correspond au donnée du fichier Json
import data from '../../data/Logements.json';
// liste appart = container-appart de la maquette
import './_listeAppart.scss';

const ListeAppart = () => {
      console.log(data);
      return (
            <div className="container-appart">
                  {data.map((item) => (
                        <Card
                              key={item.id}
                              id={item.id}
                              title={item.title}
                              location={item.location}
                              cover={item.cover}
                        />
                  ))}
            </div>
            // </div>
      );
};
export default ListeAppart;

// note: Ce code source est un composant React appelé "ListeAppart" qui affiche une liste d'appartements à partir des données stockées dans un fichier JSON. Il importe un composant "Card" qui est utilisé pour afficher chaque appartement sous forme de carte.

// La fonction "ListeAppart" map les données JSON en utilisant une boucle "map" et rend un composant "Card" pour chaque élément de données. Le composant "Card" reçoit des propriétés telles que "id", "title", "location" et "cover" qui sont utilisées pour afficher les détails de chaque appartement.