import React from 'react';
import { useEffect } from 'react';

export default function Preise() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="singlepage__contentContainer">
        <h2>Preise</h2>
      </div>
    </div>
  );
}
