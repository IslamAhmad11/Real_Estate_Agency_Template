import React, {useState} from "react";
import Dropdown from "./components/Dropdown";
import Hero from "./components/Hero";
import Homes from "./components/Homes";
import InfoSection from "./components/InfoSection";
import Navbar from "./components/Navbar";
import { InfoData, InfoDataTwo } from "./data/InfoData";
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
        <InfoSection {...InfoData}/>
        <Homes {...InfoDataTwo} />
      </>
  );
}

export default App;
