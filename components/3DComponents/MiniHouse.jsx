import "./Mini-3d-house.scss";
import Spline from "@splinetool/react-spline";
import { useCallback, useRef } from "react";

const MiniHouse = () => {
  const splineRef = useRef();

  const onLoad = useCallback((spline) => {
    spline.setBackgroundColor("transparent");
    splineRef.current = spline;
  }, []);

  return (
    <div style={{ pointerEvents: "none", width: "100%", height: "100%" }}>
      <Spline
        scene="https://prod.spline.design/xI6bQZSWJDbXKxvS/scene.splinecode"
        onLoad={onLoad}
      />
    </div>
  );
};

export default MiniHouse;
