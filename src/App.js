import Dropdown from "./components/Dropdown";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import GlobalStyle from "./GlobalStyle";


function App() {
  return (
      <>
      <GlobalStyle />
        <Navbar />
        <Dropdown />
        <Hero />
      </>
  );
}

export default App;
