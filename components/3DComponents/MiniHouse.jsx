import "./mini-3d-house.scss";
import Spline from "@splinetool/react-spline";
import { useCallback, useRef } from "react";

const MiniHouse = () => {
  const splineRef = useRef();

  const onLoad = useCallback((spline) => {
    spline.setBackgroundColor("transparent");
    splineRef.current = spline;



  }, []);

  return (
    <Spline
      scene="https://prod.spline.design/xI6bQZSWJDbXKxvS/scene.splinecode"
      onLoad={onLoad}
    />
  );
};

export default MiniHouse;
