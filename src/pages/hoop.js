import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import { images } from '../app/data/hoop-photos-imagesdata';
import { Gallery } from 'react-grid-gallery';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

export default function Hoop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [index, setIndex] = useState(-1);

  const slides = images.map((image) => ({
    src: image.src,
    width: image.width,
    height: image.height,
  }));

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
        <br />
        <Gallery
          images={images}
          onClick={(event, obj) => {
            const index = images.findIndex((image) => image.src === obj.src);
            setIndex(index);
          }}
          enableImageSelection={false}
        />
        <Lightbox
          slides={slides}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
        />
      </div>
    </div>
  );
}
