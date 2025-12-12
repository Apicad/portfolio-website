import React, { useRef, memo } from "react";
import { useGraph, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";

export const Logo3D = memo((props) => {
  const groupRef = useRef();
  const { scene } = useGLTF(`${import.meta.env.BASE_URL}logo-transformed.glb`);
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes } = useGraph(clone);

  // Rotate the logo on the Y axis
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.5; // Slow rotation speed
    }
  });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh
        geometry={nodes.Text.geometry}
        position={[0, 0, 0]}
        scale={[0.05, 0.05, 0.05]}
      >
        <meshStandardMaterial color="white" metalness={0.3} roughness={0.4} />
      </mesh>
    </group>
  );
});

Logo3D.displayName = "Logo3D";

useGLTF.preload(`${import.meta.env.BASE_URL}logo-transformed.glb`);
