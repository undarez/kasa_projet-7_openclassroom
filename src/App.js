// import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home, Logements, About } from './ExportDefault';
// import Navbar from './page/about/Navbar/Navbar'
import Error from './page/Error404/Error404'
// import Footer from './components/footer/footer'
import Layout from "./components/layout/Layout";

// function app = routage 
function App() {
  return (

    <BrowserRouter>
      {/* <Navbar /> */}
      <Layout>
        {/* affiche le router */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/logements/:id" element={<Logements />} />
          <Route path="*" element={<Error />} />
          <Route path="/a-propos" element={<About />} />
        </Routes>
      </Layout>
      {/* <Footer /> */}
    </BrowserRouter>

  );
}

export default App;

// path = chemain a charger l'orsque l'itinéraire est atteint
// render = restitue le contenue de la route sur la page html
// render={() => <h1></h1>

//BrowserRouter de React Router pour gérer le routage. Ce composant est utilisé pour encapsuler toute l'application.

//Dans cet exemple, lorsque l'utilisateur accède à la page d'accueil (exact path="/") le composant Home est affiché. Lorsque l'utilisateur accède à la page de détails d'un logement (path="/logements/:id") le composant Logements est affiché, et l'ID du logement est passé en tant que paramètre.

// Enfin, une route est également définie pour gérer les erreurs (path="*"), qui affichera le composant Error lorsque l'utilisateur accède à une URL qui ne correspond à aucune route définie.

// Le tout est enveloppé dans un composant Layout, qui peut être utilisé pour ajouter des éléments communs à toutes les pages, comme une barre de navigation ou un pied de page.