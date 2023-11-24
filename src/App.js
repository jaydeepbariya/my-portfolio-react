import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="body">
      <div className="container">
        <Navbar />

        <HeroSection />

        <Skills />

        <Projects />

        <Contact />

        <Footer />
      </div>
    </div>
  );
}

export default App;
