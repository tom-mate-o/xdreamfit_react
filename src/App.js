import React, { useEffect } from 'react';
import './dist/style.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';

import { ReactComponent as Logo } from './img/xdreamlogohorizontal.svg';
import { ReactComponent as Hamburger } from './img/bars-solid.svg';
import { ReactComponent as Close } from './img/x-bars-solid.svg';

import Home from './pages/home';
import About from './pages/about';
import Coaching from './pages/coaching';
import Sekundaerpraevention from './pages/sekundaerpraevention';
import Wohlbefinden from './pages/wohlbefinden';
import Apnoetauchen from './pages/apnoetauchen';
import Preise from './pages/preise';
import Contact from './pages/contact';
import Impressum from './pages/impressum';
import Privacydisclaimer from './pages/privacydisclaimer';

import { ReactComponent as Mastdodon } from './img/mastodon.svg';
import { ReactComponent as GitHub } from './img/github.svg';
import { ReactComponent as Extern } from './img/square-arrow-up-right-solid.svg';

export default function App() {
  const [isMobileNavVisible, setMobileNavVisible] = useState(false);

  const handleHamburgerClick = () => {
    setMobileNavVisible(true);
  };

  const handleCloseClick = () => {
    setMobileNavVisible(false);
  };

  useEffect(() => {
    if (isMobileNavVisible) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isMobileNavVisible]);

  return (
    <BrowserRouter>
      <Link to="#main" className="visually-hidden">
        Skip to main content
      </Link>
      <header className="topnav">
        <h2 className="visually-hidden">Header</h2>
        <div className="wrapper topnav__wrapper">
          <div className="topnav__leftcolumn">
            <Link to="/" className="topnav__homelink hover-fade">
              <Logo className="topnav__logo" />
            </Link>
          </div>
          <div className="topnav__rightcolumn">
            <h1 className="topnav__title visually-hidden">X-DREAM-FIT</h1>
            <nav>
              <ul className="topnav__links">
                <Hamburger
                  className="topnav__hamburger"
                  style={{ fill: 'var(--text-color-light)' }}
                  onClick={handleHamburgerClick}
                />
                <div
                  className="topnav__hamburgerwrapper"
                  onClick={handleHamburgerClick}
                ></div>
                <li className="topnav__item">
                  <Link to="/" className="topnav__link">
                    Home
                  </Link>
                </li>
                <li className="topnav__item">
                  <Link to="/about" className="topnav__link">
                    Über
                    <br />
                    mich
                  </Link>
                </li>
                <li className="topnav__item">
                  <Link to="/coaching" className="topnav__link">
                    Coaching
                  </Link>
                </li>
                <li className="topnav__item">
                  <Link to="/sekundaerpraevention" className="topnav__link">
                    Sekundär
                    <br />
                    Prävention
                  </Link>
                </li>
                <li className="topnav__item">
                  <Link to="/wohlbefinden" className="topnav__link">
                    Wohlbefinden
                  </Link>
                </li>
                <li className="topnav__item">
                  <Link to="/apnoetauchen" className="topnav__link">
                    Apnoe
                    <br />
                    Tauchen
                  </Link>
                </li>
                <li className="topnav__item">
                  <Link to="/preise" className="topnav__link">
                    Preise
                  </Link>
                </li>
                <li className="topnav__item">
                  <Link to="/kontakt" className="topnav__link">
                    Kontakt
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className={`mobilenav ${isMobileNavVisible ? '' : 'hidden'}`}>
          <nav>
            <Close
              className="mobilenav__close"
              style={{ fill: 'var(--text-color-light)' }}
              onClick={handleCloseClick}
            />

            <ul className="mobilenav__links">
              <li className="mobilenav__item" onClick={handleCloseClick}>
                <Link to="/" className="mobilenav__link">
                  Home
                </Link>
              </li>
              <li className="mobilenav__item" onClick={handleCloseClick}>
                <Link to="/about" className="mobilenav__link">
                  About Me
                </Link>
              </li>
              <li className="mobilenav__item" onClick={handleCloseClick}>
                <Link to="/coaching" className="mobilenav__link">
                  Coaching
                </Link>
              </li>
              <li className="mobilenav__item" onClick={handleCloseClick}>
                <Link to="/sekundaerpraevention" className="mobilenav__link">
                  Sekundär
                  <br />
                  Prävention
                </Link>
              </li>

              <li className="mobilenav__item" onClick={handleCloseClick}>
                <Link to="/wohlbefinden" className="mobilenav__link">
                  Wohlbefinden
                </Link>
              </li>

              <li className="mobilenav__item" onClick={handleCloseClick}>
                <Link to="/apnoetauchen" className="mobilenav__link">
                  Apnoe
                  <br />
                  Tauchen
                </Link>
              </li>
              <li className="mobilenav__item" onClick={handleCloseClick}>
                <Link to="/preise" className="mobilenav__link">
                  Preise
                </Link>
              </li>
              <li className="mobilenav__item" onClick={handleCloseClick}>
                <Link to="/kontakt" className="mobilenav__link">
                  Kontakt
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="wrapper__content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/coaching" element={<Coaching />} />
          <Route
            path="/sekundaerpraevention"
            element={<Sekundaerpraevention />}
          />
          <Route path="/wohlbefinden" element={<Wohlbefinden />} />
          <Route path="/apnoetauchen" element={<Apnoetauchen />} />
          <Route path="/preise" element={<Preise />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/privacydisclaimer" element={<Privacydisclaimer />} />
        </Routes>
        <footer className="footer">
          <div className="footer__collumn1">
            <Link to="/" className="topnav__homelink hover-fade">
              <Logo className="footer__logo" />
            </Link>
            <p>©2024 X-DREAM-FIT-COACHING</p>
          </div>
          <div className="footer__collumn2">
            <ul>
              <li>
                <a
                  href="https://github.com/tom-mate-o"
                  target="_blank"
                  className="footer__link"
                >
                  <GitHub className="footer__socialicon" />
                  GitHub
                  <Extern className="footer__externicon" />
                </a>
              </li>
              <li>
                <a
                  href="https://mastodon.art/@tomkra"
                  target="_blank"
                  className="footer__link"
                >
                  <Mastdodon className="footer__socialicon" />
                  Mastodon
                  <Extern className="footer__externicon" />
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__collumn3">
            <ul>
              <li>
                <Link to="/contact" className="footer__link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__collumn4">
            <ul>
              <li>
                <Link to="/impressum" className="footer__link">
                  <p className="footer__privacy">Impressum</p>
                </Link>
              </li>
              <li>
                <Link to="/privacydisclaimer" className="footer__link">
                  <p className="footer__privacy">Legal Terms</p>
                </Link>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}
