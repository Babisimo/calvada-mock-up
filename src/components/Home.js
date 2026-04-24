"use client"
import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import CaliforniaMapSVG from './CaliforniaMapSVG';
import DisclaimerModal from './DisclaimerModal';

const SEVEN_DAYS = 7 * 24 * 60 * 60 * 1000;
const FIFTEEN_DAYS = 15 * 24 * 60 * 60 * 1000;
const THIRTY_DAYS = 30 * 24 * 60 * 60 * 1000;

const DISCLAIMER_DURATION = FIFTEEN_DAYS

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
    if (now - acceptedTime > DISCLAIMER_DURATION) {
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
        <Link href={'/counties'}><button>Counties</button></Link>
        <Link href={'/cities'}><button>Cities</button></Link>
        <Link href={'/utilities'}><button>Utilities</button></Link>
        <a href={'https://experience.arcgis.com/experience/381660cb93854b2b83586538968293ea'} rel="noreferrer" target="_blank" title="Login Required"><button>Calvada GIS</button></a>
      </div>
      <CaliforniaMapSVG />
    </div>
  );
}
