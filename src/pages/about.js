import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import { images } from '../app/data/photos-imagesdata';
import { Gallery } from 'react-grid-gallery';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

export default function About() {
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
          <h2>Über mich</h2>
        </div>
        <div className="singlepage__dividerSubHeadline">
          <b>Es ist nie zu spät, neu anzufangen! </b>
        </div>

        <p>
          Und egal, wo du gerade stehst: Du kannst jeden Tag ein neues Kapitel
          aufschlagen. Das glaubst du nicht?
        </p>
        <br />
        <p>
          Ich selbst bin vielleicht der beste Beweis dafür, dass man mit dem
          richtigen Mindset und Disziplin alles schaffen kann.
        </p>
        <br />
        <p>
          Nach mehr als zehn Operationen und der bereits dritten Prothese am
          linken Knie habe ich mich Schritt für Schritt zurück ins Leben
          gekämpft und bin nun fitter und stärker als zuvor. Mein Motto: Come
          back stronger! Denn nicht durch schonen erreicht man Großes, sondern
          indem man in Bewegung bleibt und seine Komfortzone verlässt.
        </p>
        <br />
        <p>
          Heute helfe ich anderen dabei, den Weg zurück ins Leben zu finden, fit
          zu werden und die gesetzten Ziele zu erreichen. Vielleicht auch bald
          dir!
        </p>
        <br />
        <h3 className="testimonial__quote">
          Wenn es dir egal ist, was andere über dich denken, dann hast du ein
          hohes Level an Freiheit erreicht.
        </h3>
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
