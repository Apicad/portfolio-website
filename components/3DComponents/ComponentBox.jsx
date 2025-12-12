import "./ComponentBox.scss";
import Spline from "@splinetool/react-spline";
import { useCallback, useRef, memo, useState, useEffect } from "react";
import { motion } from "framer-motion";

const ComponentBox = memo(() => {
  const splineRef = useRef();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const onLoad = useCallback(
    (spline) => {
      spline.setBackgroundColor("transparent");

      // Reduce quality on mobile for better performance
      if (isMobile) {
        try {
          spline.setZoom(0.8);
        } catch (e) {
          console.log("Could not adjust zoom");
        }
      }

      splineRef.current = spline;
    },
    [isMobile]
  );

  return (
    <motion.div
      className="component-box-container"
      initial={{ opacity: 0, x: isMobile ? 0 : 50 }}
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
