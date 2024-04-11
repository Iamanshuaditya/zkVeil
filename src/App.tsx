import "./App.css";
import Header from "./layout/Header";
import MainVisual from "./components/MainVisual";
import HeroSection from "./components/HeroSection";
import DiscoverFunction from "./components/Discover-Function";
import CrossChainSection from "./components/Cross-ChainSection";
import DirectedGraph from "./components/DirectedGraph";
import Tokenomics from "./components/Tokenomics";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <MainVisual />
        <HeroSection />
        <DiscoverFunction />
        <CrossChainSection />
        <DirectedGraph />
        <Tokenomics />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
