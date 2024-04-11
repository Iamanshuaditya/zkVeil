import "./App.css";
import Header from "./layout/Header";
import MainVisual from "./components/MainVisual";
import HeroSection from "./components/HeroSection";
import DiscoverFunction from "./components/Discover-Function";
import CrossChainSection from "./components/Cross-ChainSection";

function App() {
  return (
    <>
      <Header />
      <main>
        <MainVisual />
        <HeroSection />
        <DiscoverFunction />
        <CrossChainSection />
      </main>
    </>
  );
}

export default App;
