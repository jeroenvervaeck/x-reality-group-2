import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

import glb from "./models/vuilbakske.glb";

export default () => {
  const gltf1 = useGLTF(glb, true);

  const Ref1 = useRef();

  return (
    <group>
	  <group>
        <primitive
          object={gltf1.scene.clone()}
		  position={[-8.3, 0.62, -4.68]}
		  rotation={[0, 1.55,0]}
  	  	  ref={Ref1}
  	    />

		<primitive
          object={gltf1.scene.clone()}
		  position={[-8.3, 3.4, -4.68]}
		  rotation={[0, 1.55,0]}
  	  	  ref={Ref1}
  	    />
      </group>   
    </group>
  );
};