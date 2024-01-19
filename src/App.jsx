import React ,{useRef}from "react";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import "./App.css";
import HeroTwo from "./Components/Hero2/HeroTwo";
import Search from "./Components/Search/Search";
import Footer from "./Components/Footer/Footer";

function App() {

  const manRef = useRef(null);

  const moveToSupport = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <>
      <Header  moveToSupport={moveToSupport} manRef={manRef}/>
      <Hero />
      <HeroTwo />
      <Search manRef={manRef} />
      <Footer/>
    </>
  );
}

export default App;
