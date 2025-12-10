import "./HeroText.scss";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const HeroText = () => {
  return (
    <div className="hero-text-container">
      <div className="hero-content">
        <h1 className="hero-greeting">
          Hi, I&apos;m Abdiel
          <motion.span
            className="wave-emoji"
            animate={{
              rotate: [0, 14, -8, 14, -4, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1,
            }}
          >
            👋
          </motion.span>
        </h1>

        <div className="hero-title">
          <span>I&apos;m a&nbsp;</span>
          <span className="typewriter">
            <Typewriter
              options={{
                strings: [
                  "Software Engineer",
                  "Fullstack Developer",
                  "Data Analyst",
                  "Curious Learner",
                ],
                autoStart: true,
                loop: true,
                cursor: "_",
                deleteSpeed: 100,
                delay: 100,
              }}
            />
          </span>
        </div>

        <p className="hero-subtitle">Welcome to my portfolio website.</p>
      </div>
    </div>
  );
};

export default HeroText;
