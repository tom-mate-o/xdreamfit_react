import React from 'react';
import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import kurse from '../img/kurse.jpg';

export default function Coaching() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const position = [47.45642087852533, 15.319006283258485];

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
    <div>
      <div className="singlepage__contentContainer">
        <div className="singlepage__dividerHeadline">
          <h2>Personal Training und Fitnesscoaching</h2>
        </div>
        <div className="singlepage__dividerSubHeadline">
          <b>
            Auf deiner Reise zu persönlichem Wachstum und Entfaltung begleite
            ich dich vom ersten Schritt bis zum Erreichen deines Ziels. So wirst
            du zur besten Version deiner selbst.
          </b>
        </div>
        <p>
          Fitness und Wohlbefinden funktionieren nur als Gesamtpaket. Wenn du
          mit mir trainierst, stimmen wir alle Übungen ganz genau nach deinem
          Bedarf und deinen Fitnesszielen ab. Ob Pilates, gemeinsame Übungen
          indoor oder outdoor oder gezielter Muskelaufbau – dein Training soll
          dir Spaß machen! So schaffen wir die perfekte Grundlage fürs
          permanente Dranbleiben und deine ersten Erfolge.
        </p>
        <br />
        <p>
          Mit kräftigendem Wirbelsäulen- und Beckenbodentraining stärken wir
          zusätzlich deine Mitte und du kannst wieder aufrecht durchs Leben
          gehen und Haltung bewahren!
        </p>
        <br />
        <p>
          Alle Übungen kannst du auch ganz einfach zu Hause oder auf Reisen
          durchführen.
        </p>
        <br />
        <p>
          Auf Wunsch begleite ich dich auch gerne ins Fitnessstudio deiner Wahl.
        </p>
        <br />
        <br />
        <div className="singlepage__dividerHeadline">
          <h2>Gruppenkurse</h2>
        </div>

        <img
          className={'h'}
          src={kurse}
          alt="Gruppenkurse"
          width={'100%'}
          height={'auto'}
        />
        <br />
        <p>
          <b>XDREAM XSUND:</b>
          <br />
          eine xsunde Mischung aus Wirbelsäulen/Beckenboden/Pilatestraining mit
          Yogaelementen, Atem- und Entspannungsübungen
        </p>
        <br />
        <p>
          <b>XDREAM FIT:</b>
          <br />
          abwechslungsreiches, forderndes Workout, um deinen Körper zu kräftigen
          und zu formen
        </p>
        <br />
        <div className="singlepage__dividerSubHeadline">
          <b>Location:</b>
        </div>
        <p>
          Leistungszentrum Proderutti (Styrian Fightclub)
          <br />
          Hafendorf 8a 8605
          <br />
          Kapfenberg
        </p>
        <br />
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
            <Popup>Hafendorf 8a, 8605 Kapfenberg, Österreich</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}
