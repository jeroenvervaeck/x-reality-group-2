import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

import campus from "../ruben/campus/campus.glb";

export default () => {
  const gltf = useGLTF(campus, true);
  const campusRef = useRef();
  
  return (
    <group>     
      <primitive
        object={gltf.scene}
        position={[0, 0, 0]}
	  	  ref={campusRef}
	    />
    </group>
  );
};
