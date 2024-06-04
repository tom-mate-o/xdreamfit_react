import React from 'react';
import { useEffect } from 'react';
import Becher from '../img/becher.jpeg';
import Haube from '../img/haube.jpeg';
import Schafe from '../img/schafe.jpeg';
import { FaWhatsapp } from 'react-icons/fa';

export default function Shop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="singlepage__contentContainer">
        <div className="singlepage__dividerHeadline">
          <h2>Shop</h2>
        </div>
        <div className="shop__shopContainer">
          <div className="shop__itemContainer">
            <h3 className="shop__itemContainer__itemName">Edehlstahlbecher</h3>
            <img
              src={Becher}
              alt="Becher"
              className="shop__itemContainer__image"
            />
            <div className="shop__itemContainer__description">
              <p>Edehlstahl-Trinkbecher mit X-Dream-Fit Logo</p>
            </div>
            <h3 className="shop__itemContainer__price">€ 18,90</h3>
            <a
              href="https://wa.me/436642435022?text=Hi%20Susi,%20ich%20möchte%20den%20Edelstahlbecher%20aus%20deinem%20Shop%20kaufen%20für%2018,90€"
              className="button cta whatsapp"
            >
              <span>Bestellen per WhatsApp</span>
            </a>
          </div>

          <div className="shop__itemContainer">
            <h3 className="shop__itemContainer__itemName">Haube</h3>
            <img
              src={Haube}
              alt="Haube"
              className="shop__itemContainer__image"
            />
            <div className="shop__itemContainer__description">
              <p>
                Handgestrickte Haube mit X-Dream-Fit Logo aus Sheepjes Stone
                Washed Wolle. XL. 70% Baumwolle, 30% Acryl.{' '}
              </p>
            </div>
            <h3 className="shop__itemContainer__price">€ 45,00</h3>
            <a
              href="https://wa.me/436642435022?text=Hi%20Susi,%20ich%20möchte%20die%20Haube%20aus%20deinem%20Shop%20kaufen%20für%2045,00€"
              className="button cta whatsapp"
            >
              <span>Bestellen per WhatsApp</span>
            </a>
          </div>

          <div className="shop__itemContainer">
            <h3 className="shop__itemContainer__itemName">De Twee Schapen</h3>
            <img
              src={Schafe}
              alt="schafe"
              className="shop__itemContainer__image"
            />
            <div className="shop__itemContainer__description">
              <p>Handarbeit pro Stück</p>
            </div>
            <h3 className="shop__itemContainer__price">€ 25,00</h3>
            <a
              href="https://wa.me/436642435022?text=Hi%20Susi,%20ich%20möchte%20die%20Schafe%20aus%20deinem%20Shop%20kaufen%20für%2025,00€"
              className="button cta whatsapp"
            >
              <span>Bestellen per WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
