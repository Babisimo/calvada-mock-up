import React from "react"
import './App.css';
import NavBar from './NavBar'
import Home from './pages/Home';
import States from './pages/States';

function App() {

  let component  
  switch(window.location.pathname) {
    case "/":
      component = <Home />
      break
      
    case "/states":
      component = <States />
      break

    default:
      break
  }

  return (
    <>
      <NavBar />
      {component}
    </>
  );
}

export default App;
