import "./App.scss";
import Navbar from "../components/navbar/Navbar";
import AboutMe from "../components/about-me/AboutMe";
import Projects from "../components/projectCard/Projects";
import { Work } from "../components/work-experiences/Work";

import Contact from "../components/contact/Contact";

import { Element } from "react-scroll";

import MiniHouse from "../components/3DComponents/MiniHouse";
import HeroText from "../components/HeroText/HeroText";
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";
import { useState, useCallback } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <div>
      {isLoading && <LoadingScreen onLoadComplete={handleLoadComplete} />}
      <div style={{ opacity: isLoading ? 0 : 1, transition: "opacity 0.5s" }}>
        <Navbar />
        <Element name="section1">
          <section id="introduction">
            <HeroText />
            <MiniHouse />
          </section>
        </Element>

        <Element name="section2">
          <section id="About">
            <AboutMe />
          </section>
        </Element>

        <Element name="section3">
          <section id="About">
            <Work />
          </section>
        </Element>

        <Element name="section4">
          <section id="Projects">
            <Projects />
          </section>
        </Element>

        <Element name="section5">
          <section id="Contact">
            <Contact />
          </section>
        </Element>
      </div>
    </div>
  );
}

export default App;
