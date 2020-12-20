
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

import glb from "./glb/Brandslang_eetzaal_morgbeka.glb";

export default () => {
  const gltf1 = useGLTF(glb, true);

  const Ref1 = useRef();
//   const Ref2 = useRef();

  return (
    <group>
	  <group>
        <primitive
          object={gltf1.scene.clone()}
		  position={[-4.5, -1.5, 1]}
		  rotation={[THREE.MathUtils.degToRad(-90), 0, 0]}
  	  	  ref={Ref1}
  	    />
      </group>   
    </group>
  );
};
