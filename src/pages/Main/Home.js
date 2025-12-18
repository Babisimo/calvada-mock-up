import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import CaliforniaMapSVG from '../states/california/components/CaliforniaMapSVG';
import DisclaimerModal from '../../components/DisclaimerModal';

const SEVEN_DAYS = 7 * 24 * 60 * 60 * 1000;

export default function Home() {
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  useEffect(() => {
    const lastAccepted = localStorage.getItem('disclaimerAcceptedAt');
    if (!lastAccepted){
      setShowDisclaimer(true);
      return
    }

    const now = Date.now();
    const acceptedTime = parseInt(lastAccepted, 10);
    if (now - acceptedTime > SEVEN_DAYS) {
      setShowDisclaimer(true);
    }
  }, []);

  const handleAcceptDisclaimer = () => {
    localStorage.setItem('disclaimerAcceptedAt', Date.now().toString());
    setShowDisclaimer(false);
  };

  return (
    <div>
      {showDisclaimer && <DisclaimerModal onAccept={handleAcceptDisclaimer} />}
      <h1 className="title">Home</h1>
      <div className="buttons">
        <Link to={'/counties'}><button>Counties</button></Link>
        <Link to={'/cities'}><button>Cities</button></Link>
        <Link to={'/utilities'}><button>Utilities</button></Link>
        <a href={'https://experience.arcgis.com/experience/381660cb93854b2b83586538968293ea'} rel="noreferrer" target="_blank" title="Login Required"><button>Calvada GIS</button></a>
      </div>
      <CaliforniaMapSVG />
    </div>
  );
}
