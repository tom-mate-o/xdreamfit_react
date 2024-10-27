import React from 'react';
import { useEffect } from 'react';

export default function Hoop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="singlepage__contentContainer">
        <div className="singlepage__dividerHeadline">
          <h2>Hoop your body</h2>
        </div>
        <div className="singlepage__dividerSubHeadline">
          <b>
            Entdecke eine neue Dimension des Hula Hoop, stärke deine Mitte und
            hab gleichzeitig jede Menge Spaß dabei.
          </b>
        </div>
        <p>
          Mehr als nur ein Spielzeug! Mit Hula Hoop kannst du Muskeln aufbauen,
          Kalorien verbrennen und sogar die Durchblutung fördern. Egal, ob
          Anfänger oder Profi, ob in Einzelunterricht oder Gruppenkursen. Unter
          meiner Anleitung lässt auch du deine Hüften schwingen und kannst
          spielerisch fit werden. Musik und Tanz oder Kombinationen mit Boxen
          oder Step-Aerobic sorgen dafür, dass eine Hoop-Einheit nie langweilig
          wird – weil Hula Hoop nicht gleich Hula Hoop ist. Probiere es selbst!{' '}
        </p>
      </div>
    </div>
  );
}
