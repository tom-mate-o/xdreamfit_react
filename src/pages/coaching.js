import React from 'react';
import { useEffect } from 'react';

export default function Coaching() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      </div>
    </div>
  );
}
