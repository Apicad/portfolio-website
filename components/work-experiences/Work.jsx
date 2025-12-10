import { useEffect, useState } from "react";
import "./Work.scss";

// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion, useAnimate, useInView } from "framer-motion";

export const Work = () => {
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
        <h1>Work Experienced</h1>
      </motion.div>
      <Tabs />
    </div>
  );
};

// a tab component
const Tabs = () => {
  //Creating two useStates that will check the id of the tab
  const [selected, setSelected] = useState(1);

  const handleSetSelected = (val) => {
    //typeof will give you the value of the selected such numbers, strin, boolean, undefined, symbols, and bigint
    if (typeof selected === "number" && typeof val === "number") {
      setSelected(val);
    } else if (val === null) {
      setSelected(null);
    }
  };

  return (
    <div className="tabs-wrapper">
      <div className="tab-container">
        {TABS.map((t) => {
          return (
            <Tab
              key={t.id}
              selected={selected}
              handleSetSelected={handleSetSelected}
              tab={t.id}
              image={t.image}
            >
              {t.title}
            </Tab>
          );
        })}
      </div>
      <AnimatePresence mode="wait">
        {selected && <Content selected={selected} key={selected} />}
      </AnimatePresence>
    </div>
  );
};

const Content = ({ selected }) => {
  const tabDescription = TABS.find((t) => t.id === selected);
  const description = tabDescription.description;

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView)
      animate(
        scope.current,
        { opacity: 1, x: 0 },
        { duration: 0.8, ease: "easeInOut" }
      );
  }, [isInView, animate, scope]);

  return (
    <motion.div
      ref={scope}
      id="overlay-content"
      className="content"
      initial={{
        opacity: 1,
        x: 15,
      }}
    >
      <ul>
        {description.map((e, index) => {
          return <li key={index}>{e}</li>;
        })}
      </ul>
    </motion.div>
  );
};

const Tab = ({ children, tab, handleSetSelected, image, selected }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ amount: 0.4, once: true }}
      transition={{ duration: 0.5 }}
      id={`shift-tab-${tab}`}
      onHoverEnd={() => handleSetSelected(tab)}
      className={`tab${selected === tab ? " selected" : ""}`}
    >
      <img src={image} alt={`${children} logo`} />
      <div className="tab-information">
        {children}
        <p>Year 2002 - 1904</p>
      </div>
    </motion.div>
  );
};

//an array with information of the tab
const TABS = [
  {
    title: "Program Assistant",
    image: `${import.meta.env.BASE_URL}icons/CamEdu.jpeg`,
    description: [
      "Designed and taught engaging coding lessons (Scratch, HTML/CSS, JavaScript, robotics, IoT).",
      "Planned interactive projects that helped students understand complex programming concepts.",
      "Supported large groups of TK–8 students with structured activities and learning plans.",
      "Collaborated with staff to organize schedules, lessons, and program improvements.",
    ],
  },
  {
    title: "Tutor Teacher",
    image: `${import.meta.env.BASE_URL}icons/foothillCollege.jpeg`,
    description: [
      "Completed a pre-apprenticeship focused on web development, Arduino programming, and teamwork.",
      "Built and debugged small software and hardware projects in C++ and JavaScript.",
      "Practiced professional communication skills through presentations and group projects.",
      "Assisted peers and volunteered as a teaching assistant with Google engineers.",
    ],
  },
  {
    title: "Dev/Mission",
    image: `${import.meta.env.BASE_URL}icons/DevMission.jpg`,
    description: [
      "Tutored students in software design, programming, and math concepts.",
      "Simplified difficult coding and algorithm topics into clear explanations.",
      "Guided students in building projects such as iOS applications.",
      "Developed patience, time management, and effective teaching strategies.",
    ],
  },
].map((n, idx) => ({ ...n, id: idx + 1 }));
