import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Designs from "./components/Designs";
import Dropdown from "./components/Dropdown";
import FooterContainer from "./components/FooterContainer";
import Hero from "./components/Hero";
import Homes from "./components/Homes";
import InfoSection from "./components/InfoSection";
import Interior from "./components/Interior";
import Navbar from "./components/Navbar";
import { InfoData, InfoDataFive, InfoDataFour, InfoDataThree, InfoDataTwo } from "./data/InfoData";
import GlobalStyle from "./GlobalStyle";
import About from './pages/About';
import HomesPage from './pages/HomesPage';
import Rentals from './pages/Rentals';


function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
      <Router>
          <GlobalStyle />
          <Navbar toggle={toggle} />
          <Switch>
            <Route exact path='/about' component={About} />
            <Route exact path='/homespage' component={HomesPage} />
            <Route exact path='/rentals' component={Rentals} />
          </Switch>  
          <Dropdown isOpen={isOpen} toggle={toggle} />
          <Hero />
          <InfoSection {...InfoData} />
          <Homes {...InfoDataTwo} />
          <Interior {...InfoDataThree} />
          <Designs {...InfoDataFour} />
          <FooterContainer {...InfoDataFive} />
      </Router>
  );
}

export default App;
