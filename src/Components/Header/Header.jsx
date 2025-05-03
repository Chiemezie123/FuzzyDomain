import React from "react";
import Head from "./Header.module.css";
import Button from "../Button/Button";
import headerLogo from "/fuzzylogo.png";

function Header({moveToSupport,manRef}) {
  const email = 'tony@fuzzydomain.com';
  const handleClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className={Head.mainContainer}>
      <div className={Head.outerContainer}>
        <div className={Head.innerContainer}>
          <div className={Head.logo}>
            <img src={headerLogo} alt="header-logo" />
          </div>
          {/* testing to see of this codebase still works */}
          <div className={Head.Button}>
            <Button text="Featured names" background={false} link={()=>{moveToSupport(manRef)}} />
            <Button text="Get in touch"  background={true} link={handleClick}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
