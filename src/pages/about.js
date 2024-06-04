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
