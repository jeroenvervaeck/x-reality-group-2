import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

import glb from "./models/urinoir.glb";

export default () => {
  const gltf1 = useGLTF(glb, true);

  const Ref1 = useRef();

  return (
    <group>
	  <group>

		// eerste verdiep
        <primitive
          object={gltf1.scene.clone()}
		  position={[-4.7, 0.8, -8.8]}
		  rotation={[0, 1.55,0]}
		  scale={[1.1, 1.2, 1.1]}
  	  	  ref={Ref1}
  	    />

		<primitive
          object={gltf1.scene.clone()}
		  position={[-4.7, 0.8, -7.4]}
		  rotation={[0, 1.55,0]}
		  scale={[1.1, 1.2, 1.1]}
  	  	  ref={Ref1}
  	    />

		<primitive
          object={gltf1.scene.clone()}
		  position={[-4.7, 0.8, -6]}
		  rotation={[0, 1.55,0]}
		  scale={[1.1, 1.2, 1.1]}
  	  	  ref={Ref1}
  	    />

		// tweede verdiep
        <primitive
          object={gltf1.scene.clone()}
		  position={[-4.7, 3.6, -8.8]}
		  rotation={[0, 1.55,0]}
		  scale={[1.1, 1.2, 1.1]}
  	  	  ref={Ref1}
  	    />

		<primitive
          object={gltf1.scene.clone()}
		  position={[-4.7, 3.6, -7.4]}
		  rotation={[0, 1.55,0]}
		  scale={[1.1, 1.2, 1.1]}
  	  	  ref={Ref1}
  	    />

		<primitive
          object={gltf1.scene.clone()}
		  position={[-4.7, 3.6, -6]}
		  rotation={[0, 1.55,0]}
		  scale={[1.1, 1.2, 1.1]}
  	  	  ref={Ref1}
  	    />
      </group>   
    </group>
  );
};
