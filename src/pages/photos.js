import React from 'react';
import { useEffect, useState } from 'react';
import photosBig from '../img/home_item_images/photos_big.jpg';
import { images } from '../app/data/photos-imagesdata';
import { Gallery } from 'react-grid-gallery';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

export default function Photos() {
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
        <div
          className="singlepage__headerImage"
          style={{
            backgroundImage: `linear-gradient(rgba(96, 92, 78, 0.5), rgba(96, 92, 78, 0.5)), url(${photosBig})`,
          }}
        >
          <h1 className="singlepage__headerTitle">Photos</h1>
        </div>
        <div className="singlepage__content">
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
    </div>
  );
}
