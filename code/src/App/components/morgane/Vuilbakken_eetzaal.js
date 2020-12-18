
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

import glb from "./glb/Vuilbakken_eetzaal_morgbeka.glb";

export default () => {
  const gltf1 = useGLTF(glb, true);

  const Ref1 = useRef();
//   const Ref2 = useRef();

  return (
    <group>
	  <group>
        <primitive
          object={gltf1.scene.clone()}
		  position={[-5.03, -2.7, -0.5]}
		  rotation={[0, THREE.MathUtils.degToRad(180), 0]}
		  scale={[1.4, 1.4, 1.4]}
  	  	  ref={Ref1}
  	    />

<primitive
          object={gltf1.scene.clone()}
		  position={[-17.9, -2.7, 2.5]}
		  rotation={[0, THREE.MathUtils.degToRad(-180), 0]}
		  scale={[1.4, 1.4, 1.4]}
  	  	  ref={Ref1}
  	    />
      </group>   
    </group>
  );
};
