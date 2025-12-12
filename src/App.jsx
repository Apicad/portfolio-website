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
import { useState, useCallback, useEffect } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);
  const [hasShownIndicator, setHasShownIndicator] = useState(false);

  const handleLoadComplete = useCallback(() => {
    setIsLoading(false);
    // Show indicator immediately after loading, only once
    if (!hasShownIndicator) {
      setShowScrollIndicator(true);
      setHasShownIndicator(true);
    }
  }, [hasShownIndicator]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100 && showScrollIndicator) {
        setShowScrollIndicator(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showScrollIndicator]);

  return (
    <div>
      {isLoading && <LoadingScreen onLoadComplete={handleLoadComplete} />}
      <div style={{ opacity: isLoading ? 0 : 1, transition: "opacity 0.5s" }}>
        <Navbar />
        <Element name="section1">
          <section id="introduction">
            <HeroText />
            <MiniHouse />
            {showScrollIndicator && (
              <div className="scroll-indicator">
                <div className="scroll-arrow">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <p>Swipe Down For More</p>
              </div>
            )}
          </section>
        </Element>

        <Element name="section2">
          <section id="About">
            <AboutMe />
          </section>
        </Element>

        <Element name="section3">
          <section id="Work">
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
