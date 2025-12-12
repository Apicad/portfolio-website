import "./ComponentBox.scss";
import Spline from "@splinetool/react-spline";
import { useCallback, useRef, memo } from "react";
import { motion } from "framer-motion";

const ComponentBox = memo(() => {
  const splineRef = useRef();

  const onLoad = useCallback((spline) => {
    spline.setBackgroundColor("transparent");
    splineRef.current = spline;
  }, []);

  return (
    <motion.div
      className="component-box-container"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ amount: 0.4, once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="spline-wrapper">
        <Spline
          scene="https://prod.spline.design/5CQfMSoMpTvytXvJ/scene.splinecode"
          onLoad={onLoad}
        />
      </div>
    </motion.div>
  );
});

ComponentBox.displayName = "ComponentBox";

export default ComponentBox;
