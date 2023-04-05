// utilisation de use navigate pour verifier si l'id n'est pas bon

import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import Carousel from '../../components/carousel/carousel';
import Data from '../../data/Logements.json';
import './_logement.scss';
import { useParams } from 'react-router-dom';
import Tags from '../../components/tags/Tags';
import Etoiles from '../../components/etoiles/Etoiles';
import Collapse from '../../components/collapse/Collapse';

const Logements = () => {
      const navigate = useNavigate();

      const { id } = useParams();
      const oneLogement = Data.filter((logement) => logement.id === id)[0];
      const appart = Data.find((item) => item.id === id);
      useEffect(() => {
            if (!appart) {
                  navigate('/page-error');
            }
      }, [appart]);
      return (
            // contenue de la page logement.
            <>
                  {appart && (
                        <div className="container-flex">
                              <Carousel
                                    src={oneLogement.pictures}
                                    alt={oneLogement.title}
                              />
                              <div className="container-text-display">
                                    {/* cette div sert juste de container pour positionner location en dessous de title. */}
                                    <div className=" container-text-position">
                                          <h2>{oneLogement.title}</h2>
                                          <span>{oneLogement.location}</span>
                                          <div className="container-tag">
                                                {oneLogement.tags.map(
                                                      (item) => (
                                                            <Tags
                                                                  key={item}
                                                                  id={item.id}
                                                                  tags={item}
                                                            />
                                                      )
                                                )}
                                          </div>
                                    </div>
                                    <div className="container-seller">
                                          <div className="seller">
                                                <p className="color-p">
                                                      {oneLogement.host.name}
                                                </p>
                                                <img
                                                      className="img-seller"
                                                      src={
                                                            oneLogement.host
                                                                  .picture
                                                      }
                                                      alt={
                                                            oneLogement.host
                                                                  .name
                                                      }
                                                />
                                          </div>
                                          <div>
                                                <Etoiles
                                                      rating={
                                                            oneLogement.rating
                                                      }
                                                />
                                          </div>
                                    </div>
                              </div>
                              <div className="container-collapse">
                                    <Collapse
                                          title={'Équipements'}
                                          content={oneLogement.equipments}
                                    />
                                    <Collapse
                                          title={'Description'}
                                          content={oneLogement.description}
                                    />
                              </div>
                        </div>
                  )}
            </>
      );
};

export default Logements;
