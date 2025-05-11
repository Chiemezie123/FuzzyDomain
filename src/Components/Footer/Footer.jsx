import React from 'react'
import Foooter from "./Footer.module.css";
import { FaXTwitter } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
import { PiLinkedinLogo } from "react-icons/pi";

function Footer() {
    const twitterProfileUrl = 'https://twitter.com/pappooisky';
    const FacebookProfileUrl = 'https://twitter.com/papoonduaguba';
    const LinkedInProfileUrl = 'https://www.linkedin.com/in/chiemezie-nduaguba-aa52141b5/';

  return (
    <div className={Foooter.mainContainer}>
      <div className={Foooter.FirstContainer}>
            <div className={Foooter.logo}>
               <img src="/gem.png" alt="gem.png" />
            </div>
            <div className={Foooter.secondLogo}>
                <div className={Foooter.reactIcons}>
                    <a href={twitterProfileUrl} target="_blank" rel="noopener noreferrer" style={{color:"#fff"}}><FaXTwitter/></a>
                    <a href={FacebookProfileUrl} target="_blank" rel="noopener noreferrer" style={{color:"#fff"}}><FiFacebook/></a>
                     <a href={LinkedInProfileUrl}target="_blank" rel="noopener noreferrer"  style={{color:"#fff"}}><PiLinkedinLogo/></a>
                </div>
                <div className={Foooter.text}>
                    <p>
                    © 2025 domainsunit. All rights reserved.
                    </p>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Footer
