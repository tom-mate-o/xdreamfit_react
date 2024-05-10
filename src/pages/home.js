import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PauseOnHover from '../components/PauseOnHover';
import xdreamfitavatar from '../img/xdreamfit_avatar.jpg';
import xdreamfit1 from '../img/xdreamfit_1.jpg';
import xdreamfit2 from '../img/xdreamfit_2.jpg';
import xdreamfit3 from '../img/xdreamfit_3.jpg';
import xdreamfit4 from '../img/xdreamfit_4.jpg';
import xdreamfit_sea from '../img/xdreamfit_sea.jpg';
import yingyang from '../img/yingyang.png';
import healthicon from '../img/healthicon.png';
import quote from '../img/quote.png';
import user from '../img/user.png';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="hero">
      <div className="hero__bg-image">
        <h1 className="hero__title">
          Gemeinsam fit.
          <br />
          Fitness & Wohlbefinden
        </h1>
        <div className="hero__left">
          <div className="hero__text">
            <p className="hero__content">
              👋 Hi, ich bin Susi. Tauche mit mir ein in die Welt des
              ganzheitlichen Wohlbefindens. Gemeinsam erreichen wir deine Ziele
              während dein Körper und Geist in Einklang kommen.
            </p>
            <div className="hero__buttons">
              <Link to="/about" className="hero__button button primary">
                Über mich
              </Link>
              <Link to="/kontakt" className="hero__button button secondary">
                Kontakt
              </Link>
            </div>
          </div>
        </div>
        <div className="hero__right">
          <img
            className={'hero__image'}
            src={xdreamfitavatar}
            alt="Tom Kra"
            width={230}
            height={315}
          />
        </div>
      </div>
      <main>
        <div className="highlights__section wrapper">
          <div className="highlights__container" id="1">
            <img src={xdreamfit1} alt="Personal Coaching"></img>
            <div className="highlights__textContainer">
              <h3 className="highlights__title">Personal Coaching</h3>
              <p className="highlights__text">
                Begleite mich auf deiner Reise zu persönlichem Wachstum und
                Entfaltung. Gemeinsam schaffen wir die Grundlage für deine beste
                Version.
              </p>
              <button className="highlights__button tealButton">
                <Link to="/coaching">...mehr!</Link>
              </button>
            </div>
          </div>

          <div className="highlights__container" id="2">
            <img src={xdreamfit2} alt="Sekundär-Prävention"></img>
            <div className="highlights__textContainer">
              <h3 className="highlights__title">Sekundär-Prävention</h3>
              <p className="highlights__text">
                Gemeinsam verhindern wir potenzielle Probleme. Mit
                maßgeschneiderter Sekundärprävention fördern wir dein
                Wohlbefinden langfristig.
              </p>
              <button className="highlights__button tealButton">
                <Link to="/sekundaerpraevention">...mehr!</Link>
              </button>
            </div>
          </div>

          <div className="highlights__container" id="3">
            <img src={xdreamfit3} alt="Wohlbefinden & Entspannung"></img>
            <div className="highlights__textContainer">
              <h3 className="highlights__title">Wohlbefinden</h3>
              <p className="highlights__text">
                Fördere dein Wohlbefinden.Finde innere Balance und Entspannung
                für Körper und Geist durch Körperanwendungen und mehr!
              </p>
              <button className="highlights__button tealButton">
                <Link to="/wohlbefinden">...mehr!</Link>
              </button>
            </div>
          </div>

          <div className="highlights__container" id="4">
            <img src={xdreamfit4} alt="Apnoe Tauchen"></img>
            <div className="highlights__textContainer">
              <h3 className="highlights__title">Apnoe Tauchen</h3>
              <p className="highlights__text">
                Erfahre die Faszination des Apnoe-Tauchens. Tauche ein in eine
                Welt voller Ruhe und Abenteuer unter Wasser alles mit nur einem
                einzigen Atemzug.
              </p>
              <button className="highlights__button tealButton">
                <Link to="/apnoetauchen">...mehr!</Link>
              </button>
            </div>
          </div>
        </div>

        <div className="quote__section">
          <div className="quote__container">
            <h2 className="quote__title">
              Ein gesunder Geist ruht in einem gesunden Körper.
            </h2>
            <p className="quote__subtitle">
              ...und gemeinsam schaffen wir die Grundlage für beides.
            </p>
            <div className="quote__picturecontainer">
              <img src={yingyang} alt="Wohlbefinden & Entspannung"></img>
            </div>
          </div>
        </div>

        <div className="info_section wrapper">
          <div className="info__container">
            <PauseOnHover />
          </div>
        </div>

        <div className="testimonial__section">
          <div className="testimonial__container">
            <img src={quote} alt="icon"></img>
            <h3 className="testimonial__quote">
              Das Coaching mit Susi hat mein Leben wirklich verändert. Ich fühle
              mich nicht nur körperlich stärker, sondern auch mental
              ausgeglichener. Danke für die inspirierende Reise zu mehr
              Gesundheit und Lebensfreude!
            </h3>
            <div className="testimonial__user">
              <img
                className={'hero__image'}
                src={user}
                alt="testimonial"
                width={230}
                height={315}
              />
              <div>
                <p>Name Surname</p>
                <p> Poistion</p>
              </div>
            </div>
          </div>
        </div>

        <div className="social__section">
          <div className="social__container">
            <img
              className={'hero__image'}
              src={xdreamfitavatar}
              alt="testimonial"
              width={230}
              height={315}
            />
            <div className="social__text">
              <h3>@x_dreamfit</h3>
              <button>Instagram</button>
              <button>Threads</button>
            </div>
          </div>
        </div>

        <div className="cta__section">
          <div className="cta__container">
            <h2>Starte noch heute!</h2>
            <p>
              Worauf wartest du? Beginne noch heute deine Reise zu einem
              vitaleren Leben und entfalte dein volles Potenzial!
            </p>
            <button>Termin vereinbaren</button>
          </div>
        </div>

        <div className="map__section">
          <h3>Map</h3>
        </div>
      </main>
    </div>
  );
}
