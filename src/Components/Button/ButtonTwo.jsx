import React from 'react';
import buttonTwo from "./buttonTwo.module.css";

function ButtonTwo({buttonImage,text,onClick, isDisabled}) {

  return (
    <div className={buttonTwo.mainContainer} >
      <button className={buttonTwo.button} onClick={onClick}>
       <p>{text}</p>
       {buttonImage &&  <img src={buttonImage} alt="img" />}
      </button>
    </div>
  )
}

export default ButtonTwo
