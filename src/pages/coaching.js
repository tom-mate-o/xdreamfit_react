import React from 'react';
import { useEffect } from 'react';

export default function Coaching() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="singlepage__contentContainer">
        <h2>Coaching</h2>
      </div>
    </div>
  );
}
