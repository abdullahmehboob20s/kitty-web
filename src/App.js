import "./App.css";
import Hero from "layouts/Hero/Hero";
import About from "layouts/About/About";
import NFTS from "layouts/NFTS/NFTS";
import Cards from "layouts/Cards/Cards";
import Project from "layouts/Project/Project";
import Help from "layouts/Help/Help";
import Team from "layouts/Team/Team";
import FAQ from "layouts/FAQ/FAQ";

function App() {
  return (
    <div>
      <Hero />
      <About />
      <NFTS />
      <Cards />
      <Project />
      <Help />
      <Team />
      <FAQ />
    </div>
  );
}

export default App;
