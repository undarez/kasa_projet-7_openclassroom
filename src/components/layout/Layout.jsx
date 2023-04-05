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
