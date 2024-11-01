import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

import PauseOnHover from '../components/PauseOnHover';
import xdreamfitavatar from '../img/xdreamgallery/hoop2.jpeg';
import xdreamfit1 from '../img/xdreamfit_1.jpg';
import xdreamfit2 from '../img/xdreamfit_2.jpg';
import xdreamfit3 from '../img/xdreamfit_3.jpg';
import xdreamfit4 from '../img/xdreamgallery/hoop8.jpeg';
import yingyang from '../img/yingyang.png';
import quote from '../img/quote.png';

import xdreamfitinsta from '../img/xdreaminsta.png';
import { BsThreads } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { FaWhatsapp } from 'react-icons/fa';

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

  const position = [47.42950547379685, 15.276460054706659];

  function createDefaultIcon() {
    return new Icon({
      iconUrl:
        'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
      iconRetinaUrl:
        'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
      shadowUrl:
        'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
    });
  }

  return (
    <div className="hero">
      <div className="hero__bg-image">
        <h1 className="hero__title">
          Gemeinsam fit.
          <br />
          mit Personal Training und Fitnesscoaching zu mehr Wohlbefinden
        </h1>
        <div className="hero__left">
          <div className="hero__text">
            <p className="hero__content">
              Du möchtest endlich fit werden, mit dem Training beginnen, dem
              Alltagsstress entfliehen und Körper und Geist in Einklang bringen?
              Aber du weißt nicht, wo du anfangen sollst?
              <br />
              <br />
              <b>Dann bist du bei mir richtig!</b>
              <br />
              <br />
              Ich bin Susi und gemeinsam mit mir erreichst du deine Ziele. Egal,
              wie alt du bist oder welche Vorgeschichte du hast – ich habe es
              geschafft und du kannst das auch!
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
              <h3 className="highlights__title">Fitnesscoaching</h3>
              <p className="highlights__text">
                Auf deiner Reise zu persönlichem Wachstum und Entfaltung
                begleite ich dich vom ersten Schritt bis zum Erreichen deines
                Ziels. So wirst du zur besten Version deiner selbst.
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
                Vorbeugen ist besser als heilen! Mit gezielten Übungen fördern
                wir dein Wohlbefinden langfristig und halten dich fit.
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
                Fördere dein Wohlbefinden. Finde innere Balance und Entspannung
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
              <h3 className="highlights__title">Hoop your body</h3>
              <p className="highlights__text">
                Entdecke eine neue Dimension des Hula Hoop, stärke deine Mitte
                und hab gleichzeitig jede Menge Spaß dabei.
              </p>
              <button className="highlights__button tealButton">
                <Link to="/hoop">...mehr!</Link>
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
              Die Grenze ist der Verstand. Solange der Verstand sich vorstellen
              kann, dass du etwas tun kannst, kannst du es tun, solange du
              wirklich zu 100 Prozent daran glaubst.
            </h3>
            <div className="testimonial__user">
              <div>
                <p>Arnold Schwarzenegger</p>
              </div>
            </div>
          </div>
        </div>

        <div className="social__section wrapper">
          <div className="social__container">
            <img
              className={'hero__image'}
              src={xdreamfitinsta}
              alt="testimonial"
              width={230}
              height={315}
            />
            <div className="social__text">
              <h3>@x_dreamfit</h3>
              <button className="button social">
                <Link
                  to="https://www.instagram.com/x_dreamfit/"
                  target="_blank"
                >
                  <span>
                    <BsInstagram /> Instagram
                  </span>
                </Link>
              </button>
              <button className="button social">
                <Link to="https://www.threads.net/@x_dreamfit" target="_blank">
                  <span>
                    <BsThreads /> Threads
                  </span>
                </Link>
              </button>
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

            <button className="button cta">
              {' '}
              <Link to="/kontakt">Termin vereinbaren </Link>
            </button>

            <a
              className="button cta whatsapp"
              href="https://wa.me/436642435022?"
            >
              <span>
                <FaWhatsapp className="icon" />
                WhatsApp
              </span>
            </a>
          </div>
        </div>

        <div className="map__section">
          <MapContainer
            center={position}
            zoom={13}
            style={{ height: '300px', width: '100%' }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={createDefaultIcon()}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </main>
    </div>
  );
}
