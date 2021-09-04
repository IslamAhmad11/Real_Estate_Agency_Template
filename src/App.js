import React, {useState} from "react";
import Designs from "./components/Designs";
import Dropdown from "./components/Dropdown";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Homes from "./components/Homes";
import InfoSection from "./components/InfoSection";
import Interior from "./components/Interior";
import Navbar from "./components/Navbar";
import { InfoData, InfoDataFive, InfoDataFour, InfoDataThree, InfoDataTwo } from "./data/InfoData";
import GlobalStyle from "./GlobalStyle";

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
      <>
      <GlobalStyle />
        <Navbar toggle={toggle} />
        <Dropdown isOpen={isOpen} toggle={toggle} />
        <Hero />
        <InfoSection {...InfoData} />
        <Homes {...InfoDataTwo} />
        <Interior {...InfoDataThree} />
        <Designs {...InfoDataFour} />
        <Footer {...InfoDataFive} />
      </>
  );
}

export default App;
