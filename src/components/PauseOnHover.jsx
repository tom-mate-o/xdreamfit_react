import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import healthicon from '../../src/img/healthicon.png';

export default function PauseOnHover() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="info__slide" id="1">
          <div className="info__card">
            <img src={healthicon} alt="icon"></img>
            <h3>
              Personal <br />
              Fitness <br />
              Training
            </h3>
          </div>
        </div>
        <div className="info__slide" id="2">
          <div className="info__card">
            <img src={healthicon} alt="icon"></img>
            <h3>
              Pilates-
              <br />
              Wirbelsäulen- <br />
              Beckenbodentraining
            </h3>
          </div>
        </div>
        <div className="info__slide" id="3">
          <div className="info__card">
            <img src={healthicon} alt="icon"></img>
            <h3>Atemtraining</h3>
          </div>
        </div>
        <div className="info__slide" id="4">
          <div className="info__card">
            <img src={healthicon} alt="icon"></img>
            <h3>Outdoortraining</h3>
          </div>
        </div>
        <div className="info__slide" id="5">
          <div className="info__card">
            <img src={healthicon} alt="icon"></img>
            <h3>
              Entspannungs- <br />
              und
              <br />
              Achtsamkeitstraining
            </h3>
          </div>
        </div>
        <div className="info__slide" id="6">
          <div className="info__card">
            <img src={healthicon} alt="icon"></img>
            <h3>Apnoetauchkurse</h3>
          </div>
        </div>
        <div className="info__slide" id="7">
          <div className="info__card">
            <img src={healthicon} alt="icon"></img>
            <h3>
              Eisbaden <br />
              Eisschwimmen <br />
              Kältetraining
            </h3>
          </div>
        </div>
        <div className="info__slide" id="8">
          <div className="info__card">
            <img src={healthicon} alt="icon"></img>
            <h3>
              Aromatherapie <br />& Energetische <br />
              Körperanwendungen
            </h3>
          </div>
        </div>
      </Slider>
    </div>
  );
}
