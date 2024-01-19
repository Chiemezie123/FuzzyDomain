import React from "react";
import man from "/man.svg";
import Button from "../Button/Button";
import hero from "./hero.module.css"

function Hero() {

  const email = 'tony@fuzzydomain.com';
  const handleClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div>
      <div className={hero.mainContainer}>
        <div className={hero.firstContainer}>
          <div className={hero.bigText}>
            <h2>
              Let’s help you secure that perfect <br /> <span 
              style={{color:"#476882"}}>domain name</span> 
            </h2>
          </div>
          <div className={hero.button}>
            <Button text="Get in touch" background={true} link={handleClick} />
          </div>
        </div>
        <div className={hero.secondContainer}>
          <img src={man} alt="man" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
