import { Link } from 'react-router-dom';
import logo from '../../asset/logo-Kasa.png';
import './_navbar.scss';
function Navbar() {
      return (
            <header>
                  <nav className="container-nav">
                        <img
                              className="kasa-logo"
                              src={logo}
                              alt="logo de Kasa"
                        />
                        <div className="container-typo">
                              <Link className="typo" to="/">
                                    Acceuil
                              </Link>
                              <Link className="typo" to="/a-propos">
                                    A-prôpos
                              </Link>
                        </div>
                  </nav>
            </header>
      );
}
export default Navbar;
