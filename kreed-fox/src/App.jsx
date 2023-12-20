import React from "react";
import { useState } from "react";
import KreedLogo from "./assets/Group62.svg";
import "./App.css";
import Title from "./components/titleComponent";
import Nav from "./components/dropdownComponent";
import Buttons from "./components/buttonComponent";
import Heading from "./components/headingComponent";
import Paragraph from "./components/parComponent";
import MainImg from "./assets/images/img1.png";

function App() {
 
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setButtonClicked(!buttonClicked);
  };

  const bodyStyle = {
    backgroundColor: buttonClicked ? '#6DFC56' : 'lightblue',
    transition: 'background-color 0.5s ease-in-out'
  }

  return (
    <>
      <body style={bodyStyle} >
        <div className="container" >
          <div className="header">
            <div className="top-left">
              <img src={KreedLogo} alt="image.png" />
              <Title />
            </div>
            <div className="top-right">
              <div className="top-nav">
                <Nav title="Home" id="home" />
                <Nav title="About us" id="home" />
                <Nav title="Locations" id="home" />
                <Nav title="FAQ's" id="home" />
              </div>
              <div></div>
              <div className="buttons">
                <button className="switch-theme" onClick={handleButtonClick}>click</button>
                <Buttons id="contact-us" title="Contact Us" />
              </div>
            </div>
          </div>
          <div className="hero-section">
            <div className="hero-left">
              <Heading />
              <Paragraph />
              <Buttons title="Join Us" id="join-us" />
            </div>
            <div className="hero-right">
              <img src={MainImg} alt="main-image" />
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default App;
