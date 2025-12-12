import "./Projects.scss";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Card = ({ title, description }) => {
  return (
    <motion.div className="card-container" whileHover={{ scale: 1.1, y: -30 }}>
      <div className="picture-container">
        <img
          className="picture-of-card"
          src={`${import.meta.env.BASE_URL}Unavailable.png`}
          alt={title}
        />
      </div>
      <div>
        <h2 className="title-of-card">{title}</h2>
        <p>{description}</p>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const cardInformation = [
    {
      id: 1,
      title: "Basketball Scheduler",
      description:
        "A scheduling tool that organizes basketball games, teams, and time slots. It helps automate match rotations, track scores, and manage multiple courts or groups efficiently.",
    },
    {
      id: 2,
      title: "Phaser.JS Game",
      description:
        "An interactive web-based game built with the Phaser.js framework. It uses JavaScript to create animations, scenes, and logic for player interaction, focusing on fun gameplay and smooth graphics.",
    },
    {
      id: 3,
      title: "Ticket Tracker",
      description:
        "A lightweight system to log, assign, and monitor tasks or issues. It helps manage workflow by tracking ticket status, priority, and resolution history, improving organization and accountability.",
    },
    {
      id: 4,
      title: "AI agent",
      description:
        "An AI tool that analyzes basketball statistics to uncover trends and generate performance insights. It can process player and team data to highlight strengths, predict outcomes, and support smarter game decisions.",
    },
  ];
  return (
    <div className="container ">
      <span className="spacer" aria-hidden="true" />
      <motion.div
        initial={{ opacity: 0, y: -80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.4, once: true }}
        transition={{ duration: 0.5 }}
        className="box bullet-points"
      >
        <h2>Projects - Note: All the project are still not ready</h2>
        <h2>The will be available very soon</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.4, once: true }}
        transition={{ duration: 0.5 }}
        className="project-flex"
      >
        {cardInformation.map((e) => (
          <Card key={e.id} title={e.title} description={e.description} />
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
