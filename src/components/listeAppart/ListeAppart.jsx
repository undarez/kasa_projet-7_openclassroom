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
