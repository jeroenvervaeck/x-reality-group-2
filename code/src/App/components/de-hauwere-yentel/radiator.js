import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

import glb from "./models/radiotor.glb";

export default () => {
  const gltf1 = useGLTF(glb, true);

  const Ref1 = useRef();

  return (
    <group>
	  <group>
        <primitive
          object={gltf1.scene.clone()}
		  position={[-5.15, 0.8, -10.1]}
		  rotation={[0, 1.55,0]}
		  scale={[1.1, 1.2, 1.1]}
  	  	  ref={Ref1}
  	    />

		<primitive
          object={gltf1.scene.clone()}
		  position={[-5.15, 3.6, -10.1]}
		  rotation={[0, 1.55,0]}
		  scale={[1.1, 1.2, 1.1]}
  	  	  ref={Ref1}
  	    />
      </group>   
    </group>
  );
};
