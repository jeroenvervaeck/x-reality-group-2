
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

import glb from "./glb/Koffieautomaat_eetzaal_morgbeka.glb";

export default () => {
  const gltf1 = useGLTF(glb, true);

  const Ref1 = useRef();
//   const Ref2 = useRef();

  return (
    <group>
	  <group>
        <primitive
          object={gltf1.scene.clone()}
		  position={[-6.5, -2.7, 2.2]}
		  rotation={[0, 1.55,0]}
  	  	  ref={Ref1}
  	    />
      </group>   
    </group>
  );
};
