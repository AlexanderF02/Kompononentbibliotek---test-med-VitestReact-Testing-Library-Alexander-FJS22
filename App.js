import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import CollectionPage from './CollectionPage';
import MenPage from './src/MenPage';
import WomenPage from './src/WomenPage';
import AboutPage from './src/AboutPage';
import ContactPage from './src/ContactPage';
import './index.css'; // Import the CSS file

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Router>
      <div>
        <nav>
          <div className="logo-container">
            <span className="logo">Sneakers</span>
          </div>
          {isMobile ? (
            <>
              <input type="checkbox" id="menu-toggle" checked={menuOpen} onChange={toggleMenu} />
              <label htmlFor="menu-toggle" className="menu-toggle">
                <span className="menu-icon"></span>
              </label>
              {menuOpen && (
                <ul className="menu">
                  <li>
                    <NavLink exact to="/collection" activeClassName="active">
                      Collection
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/men" activeClassName="active">
                      Men
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/women" activeClassName="active">
                      Women
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/about" activeClassName="active">
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact" activeClassName="active">
                      Contact
                    </NavLink>
                  </li>
                </ul>
              )}
            </>
          ) : (
            <ul className="menu">
              <li>
                <NavLink exact to="/collection" activeClassName="active">
                  Collection
                </NavLink>
              </li>
              <li>
                <NavLink to="/men" activeClassName="active">
                  Men
                </NavLink>
              </li>
              <li>
                <NavLink to="/women" activeClassName="active">
                  Women
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" activeClassName="active">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" activeClassName="active">
                  Contact
                </NavLink>
              </li>
            </ul>
          )}
        </nav>

        <Routes>
          <Route path="/collection" element={<CollectionPage />} />
          <Route path="/men" element={<MenPage />} />
          <Route path="/women" element={<WomenPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

















