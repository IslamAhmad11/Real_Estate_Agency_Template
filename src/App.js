import Dropdown from "./components/Dropdown";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import GlobalStyle from "./GlobalStyle";


function App() {
  return (
    <div className="App">
      <>
      <GlobalStyle />
        <Navbar />
        <Dropdown />
        <Hero />
      </>
    </div>
  );
}

export default App;
