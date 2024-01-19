import React from "react";
import hand from "/hand.svg";
import heroTwo from "./heroTwo.module.css";

function HeroTwo() {
  const infoData = [
    {
      number: 1,
      title: "Premium domain names",
      body: "Elevate your brand with a premium domain name that speaks volumes. A memorable and distinguished online identity awaits you, setting you apart from the competition.",
    },
    {
      number: 2,
      title: "SEO focused domain names",
      body: "Supercharge your online presence with a domain that not only sounds good but ranks well too. Get our SEO focused domain names to boost your visibility and climb the search engine ranks",
    },
    {
      number: 3,
      title: "Competitive advantage",
      body: "Gain a strategic edge in your industry. Owning a domain puts you ahead of the competition, making it harder for others to establish a similar online presence and giving you a clear advantage.",
    },
  ];
  const displayData = infoData.map((info) => (
    <div className={heroTwo.mainmain}>
      <div className={heroTwo.number}>
        <p>{info.number}</p>
      </div>
      <div className={heroTwo.otherPart}>
        <h2>{info.title}</h2>
        <p>{info.body}</p>
      </div>
    </div>
  ));
  return (
    <div>
      <div className={heroTwo.mainContainer}>
        <div className={heroTwo.firstContainer}>
          <h2>Why work with us</h2>
        </div>
        <div className={heroTwo.secondContainer}>
          <div className={heroTwo.hmmm}>
            {displayData}
            </div>
          <div className={heroTwo.pic}>
            <img src={hand} alt="hand_man"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroTwo;
