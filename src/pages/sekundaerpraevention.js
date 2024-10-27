import React from 'react';
import { useEffect } from 'react';

export default function Sekundaerpraevention() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="singlepage__contentContainer">
        <div className="singlepage__dividerHeadline">
          <h2>Sekundärprevention</h2>
        </div>
        <div className="singlepage__dividerSubHeadline">
          <b>
            Vorbeugen ist besser als heilen! Mit gezielten Übungen fördern wir
            dein Wohlbefinden langfristig und halten dich fit.
          </b>
        </div>
        <p>
          Nach einem Unfall oder einer Operation wieder zurück in den Alltag zu
          finden, kann eine Herausforderung sein. Reha und Physiotherapie helfen
          bei den ersten Schritten, aber wie geht es danach weiter? Vielleicht
          fühlst du dich noch nicht fit genug fürs Fitnessstudio oder weißt
          nicht, wie du wieder mit dem Sport beginnen sollst.
        </p>
        <br />
        <p>
          Ein Personal Training, das genau auf dich abgestimmt ist, hilft dir
          dabei, deine Tiefenmuskulatur wieder zu kräftigen und fest im Leben zu
          stehen. Damit dich so schnell nichts mehr aus der Bahn wirft.
        </p>
      </div>
    </div>
  );
}
