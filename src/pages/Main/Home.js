import React from 'react';
import { Link } from 'react-router-dom';
import CaliforniaMapSVG from '../StatesFolder/California/CA_Components/CaliforniaMapSVG';

export default function Home() {
  return (
    <div>
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
