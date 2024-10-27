import React from 'react';
import { useEffect } from 'react';

export default function Wohlbefinden() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="singlepage__contentContainer">
        <div className="singlepage__dividerHeadline">
          <h2>Wohlbefinden</h2>
        </div>
        <div className="singlepage__dividerSubHeadline">
          <b>
            Fördere dein Wohlbefinden. Finde innere Balance und Entspannung für
            Körper und Geist durch Körperanwendungen und mehr!
          </b>
        </div>
        <p>
          Das richtige Mindset, eine ausgewogene Ernährung und ausreichend
          Bewegung – das alles sind Faktoren, die unser Wohlbefinden maßgeblich
          beeinflussen. Atemübungen, Entspannungsübungen, Meditation und
          energetische Körperanwendungen ergänzen deinen Trainingsplan und
          helfen dabei, deinen Körper und deine Seele in Einklang zu bringen.{' '}
        </p>
      </div>
    </div>
  );
}
