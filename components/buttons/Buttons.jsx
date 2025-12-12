import "./Buttons.scss";

import { motion } from "framer-motion";

const Buttons = (props) => {
  const { items } = props;

  return (
    <div className="button-container">
      {items.map((e) => (
        <a
          href={e.link || "/"}
          key={e.id}
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.button
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.4, once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="button_top">
              <img className="image-icon" src={e.img} alt={e.title} />
              {e.title}
            </span>
          </motion.button>
        </a>
      ))}
    </div>
  );
};

export default Buttons;
