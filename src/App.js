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