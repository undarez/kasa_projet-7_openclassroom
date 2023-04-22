import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import './_layout.scss';
const Layout = ({ children }) => {
      return (
            <div className="layout">
                  <Navbar />
                  <main>{children}</main>
                  <Footer />
            </div>
      );
};
export default Layout;


//Le but principal d'un layout est de fournir une structure cohérente à l'ensemble du site web, en utilisant un modèle de conception commun, afin que les visiteurs puissent naviguer facilement et trouver ce qu'ils recherchent rapidement. En outre, le layout peut permettre aux développeurs de réutiliser des éléments de la page tels que les styles CSS et les composants JavaScript pour créer une expérience utilisateur homogène.