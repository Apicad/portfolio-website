import "./AboutMe.scss";
import Buttons from "../buttons/Buttons";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Overview = () => {
  const buttonInformation = [
    {
      id: 1,
      title: "github",
      img: "/icons/github.png",
      link: "https://github.com/Apicad",
    },
    {
      id: 2,
      title: "linkedin",
      img: "/icons/linkedin.png",
      link: "https://www.linkedin.com/in/abdiel-picado/",
    },
    {
      id: 3,
      title: "Resume",
      img: "/icons/resume.png",
      link: "/Abdiel-Picado-Resume.pdf",
    },
  ];
  return (
    <div className="Overview-container">
      <div className="profile-container">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.4, once: true }}
          transition={{ duration: 0.5 }}
          className="box circle"
        >
          <img className="profile" src="/profile.png" alt="Profile" />
        </motion.div>
        <Buttons items={buttonInformation} />
      </div>
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ amount: 0.4, once: true }}
        transition={{ duration: 0.5 }}
        className="box bullet-points"
      >
        <ul>
          <li>
            Driven by curiosity and a strong commitment to continuous learning
            in technology.
          </li>
          <li>
            Completed studies at Foothill College and coursework through
            Stanford University, building a solid foundation in programming and
            logic.
          </li>
          <li>
            Experienced Tech Tutor, teaching programming and robotics to
            students from TK through middle school.
          </li>
          <li>
            Skilled in simplifying complex concepts, fostering collaboration,
            and supporting diverse learning styles.
          </li>
          <li>
            Dedicated to applying creativity, adaptability, and persistence to
            both personal growth and professional goals.
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

const AboutMe = () => {
  //initial trasition we want the box to have an opacity of 0.
  // as you scroll to the part of the website we want the opacity to be off
  // the animation should be our boxes coming from different sides.
  // one box should come from the left and the right
  return (
    <div className="container">
      <span className="spacer" aria-hidden="true" />
      <motion.div
        initial={{ opacity: 0, y: -80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.4, once: true }}
        transition={{ duration: 0.5 }}
        className="box"
      >
        <h1>About Me</h1>
      </motion.div>
      <Overview />
    </div>
  );
};

export default AboutMe;
