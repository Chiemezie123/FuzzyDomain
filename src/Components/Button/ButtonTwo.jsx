import React from 'react';
import buttonTwo from "./buttonTwo.module.css";

function ButtonTwo({buttonImage,text ,onClick}) {

  return (
    <div className={buttonTwo.mainContainer} onClick={onClick}>
      <button className={buttonTwo.button}>
       <p>{text}</p>
       {buttonImage &&  <img src={buttonImage} alt="img" />}
      </button>
    </div>
  )
}

export default ButtonTwo
